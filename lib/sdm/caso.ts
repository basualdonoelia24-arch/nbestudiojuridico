/**
 * Módulo de generación de casos completos
 * Combina periodos, salarios, aportes y genera todos los formularios
 */
import { generarPeriodos, type Periodo } from './periodos'
import { cargarSalariosDelExcel, obtenerSalario, type SalariosPorCategoria } from './salarios'
import { cargarAportesDelExcel, obtenerAporte, type AportesPorCategoria } from './aportes'
import { generarCamposF102B, validarDatosFormulario, type CamposPDF, type DatosFormulario } from './f102b'

export interface DatosEmpleada {
  cuil: string
  nombre: string
}

export interface DatosEmpleador {
  cuil: string
  nombre: string
  domicilio: string
}

export interface DatosRelacion {
  fechaIngreso: Date
  fechaEgreso: Date
  horas: number
  categoria: string
}

export interface FormularioGenerado {
  periodo: string
  numero: number
  campos: CamposPDF[]
  resumen: {
    mes: number
    anio: number
    sueldo: number
    aporte: number
  }
}

export interface ResultadoCaso {
  valido: boolean
  errores: string[]
  totalFormularios: number
  formularios: FormularioGenerado[]
  resumen: {
    empleada: DatosEmpleada
    empleador: DatosEmpleador
    periodo: string
    categoria: string
  }
}

function validarEntrada(
  empleada: DatosEmpleada,
  empleador: DatosEmpleador,
  relacion: DatosRelacion
): { valido: boolean; errores: string[] } {
  const errores: string[] = []

  if (!empleada.cuil || empleada.cuil.length !== 11) {
    errores.push('CUIL trabajadora debe tener 11 dígitos')
  }
  if (!empleada.nombre || empleada.nombre.trim() === '') {
    errores.push('Nombre trabajadora requerido')
  }

  if (!empleador.cuil || empleador.cuil.length !== 11) {
    errores.push('CUIL empleadora debe tener 11 dígitos')
  }
  if (!empleador.nombre || empleador.nombre.trim() === '') {
    errores.push('Nombre empleadora requerido')
  }

  if (relacion.fechaIngreso >= relacion.fechaEgreso) {
    errores.push('Fecha de ingreso debe ser menor a fecha de egreso')
  }
  if (relacion.horas <= 0 || relacion.horas > 48) {
    errores.push('Horas deben estar entre 1 y 48')
  }
  if (!relacion.categoria || relacion.categoria.trim() === '') {
    errores.push('Categoría requerida')
  }

  return {
    valido: errores.length === 0,
    errores,
  }
}

export function generarCaso(
  empleada: DatosEmpleada,
  empleador: DatosEmpleador,
  relacion: DatosRelacion,
  rutaExcel: string
): ResultadoCaso {
  const validacion = validarEntrada(empleada, empleador, relacion)

  if (!validacion.valido) {
    return {
      valido: false,
      errores: validacion.errores,
      totalFormularios: 0,
      formularios: [],
      resumen: {
        empleada,
        empleador,
        periodo: '',
        categoria: relacion.categoria,
      },
    }
  }

  try {
    const salarios = cargarSalariosDelExcel(rutaExcel)
    const aportes = cargarAportesDelExcel(rutaExcel)

    const periodos = generarPeriodos(relacion.fechaIngreso, relacion.fechaEgreso)

    const formularios: FormularioGenerado[] = []
    const erroresFormularios: string[] = []

    for (const periodo of periodos) {
      try {
        const sueldo = obtenerSalario(salarios, periodo.fecha, relacion.categoria)
        const aporte = obtenerAporte(aportes, periodo.periodo, 'Menos de 12 hs')

        if (sueldo === null) {
          erroresFormularios.push(
            `Período ${periodo.periodo}: No se encontró sueldo para categoría "${relacion.categoria}"`
          )
          continue
        }

        if (aporte === null) {
          erroresFormularios.push(`Período ${periodo.periodo}: No se encontró aporte`)
          continue
        }

        const datosFormulario: DatosFormulario = {
          empleada,
          empleador,
          fechaIngreso: relacion.fechaIngreso,
          periodoDatos: {
            mes: periodo.mes,
            anio: periodo.anio,
            primerDia: periodo.primerDia,
            ultimoDia: periodo.ultimoDia,
          },
          horas: relacion.horas,
          sueldo,
          aporte,
        }

        const validacionFormulario = validarDatosFormulario(datosFormulario)
        if (!validacionFormulario.valido) {
          erroresFormularios.push(
            `Período ${periodo.periodo}: ${validacionFormulario.errores.join(', ')}`
          )
          continue
        }

        const campos = generarCamposF102B(datosFormulario)

        formularios.push({
          periodo: periodo.periodo,
          numero: periodo.numero,
          campos,
          resumen: {
            mes: periodo.mes,
            anio: periodo.anio,
            sueldo,
            aporte,
          },
        })
      } catch (error) {
        erroresFormularios.push(
          `Período ${periodo.periodo}: ${error instanceof Error ? error.message : String(error)}`
        )
      }
    }

    return {
      valido: formularios.length > 0,
      errores: erroresFormularios,
      totalFormularios: formularios.length,
      formularios,
      resumen: {
        empleada,
        empleador,
        periodo: `${relacion.fechaIngreso.getFullYear()}-${String(relacion.fechaIngreso.getMonth() + 1).padStart(2, '0')} a ${relacion.fechaEgreso.getFullYear()}-${String(relacion.fechaEgreso.getMonth() + 1).padStart(2, '0')}`,
        categoria: relacion.categoria,
      },
    }
  } catch (error) {
    return {
      valido: false,
      errores: [error instanceof Error ? error.message : String(error)],
      totalFormularios: 0,
      formularios: [],
      resumen: {
        empleada,
        empleador,
        periodo: '',
        categoria: relacion.categoria,
      },
    }
  }
}

export function obtenerFormulario(
  resultado: ResultadoCaso,
  numero: number
): FormularioGenerado | undefined {
  return resultado.formularios.find(f => f.numero === numero)
}

export function generarResumenCaso(resultado: ResultadoCaso): string {
  const resumen = resultado.resumen
  const lines: string[] = [
    `CASO COMPLETADO - ${resultado.totalFormularios > 0 ? 'EXITOSO' : 'CON ERRORES'}`,
    ``,
    `Trabajadora: ${resumen.empleada.nombre} (${resumen.empleada.cuil})`,
    `Empleadora: ${resumen.empleador.nombre} (${resumen.empleador.cuil})`,
    `Categoría: ${resumen.categoria}`,
    `Período: ${resumen.periodo}`,
    `Total formularios: ${resultado.totalFormularios}`,
  ]

  if (resultado.formularios.length > 0) {
    lines.push(``)
    lines.push(`Primeros 3:`)
    resultado.formularios.slice(0, 3).forEach(f => {
      lines.push(
        `  ${f.numero}. ${f.periodo}: $${f.resumen.sueldo} (aporte: $${f.resumen.aporte})`
      )
    })

    if (resultado.formularios.length > 3) {
      lines.push(`  ...`)
      const ultimos = resultado.formularios.slice(-3)
      ultimos.forEach(f => {
        lines.push(
          `  ${f.numero}. ${f.periodo}: $${f.resumen.sueldo} (aporte: $${f.resumen.aporte})`
        )
      })
    }
  }

  if (resultado.errores.length > 0) {
    lines.push(``)
    lines.push(`Errores (${resultado.errores.length}):`)
    resultado.errores.slice(0, 5).forEach(e => {
      lines.push(`  ❌ ${e}`)
    })
    if (resultado.errores.length > 5) {
      lines.push(`  ... y ${resultado.errores.length - 5} más`)
    }
  }

  return lines.join('\n')
}