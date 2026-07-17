/**
 * Módulo de generación de estructura F.102/B
 * Genera los campos necesarios para rellenar un PDF del formulario F.102/B
 */

export interface CamposPDF {
  nombre: string
  valor: string
}

export interface DatosEmpleada {
  cuil: string
  nombre: string
}

export interface DatosEmpleador {
  cuil: string
  nombre: string
  domicilio: string
}

export interface DatosPeriodo {
  mes: number
  anio: number
  primerDia: number
  ultimoDia: number
}

export interface DatosFormulario {
  empleada: DatosEmpleada
  empleador: DatosEmpleador
  fechaIngreso: Date
  periodoDatos: DatosPeriodo
  horas: number
  sueldo: number
  aporte: number
}

/**
 * Convierte número a letras para montos
 */
export function numeroALetras(numero: number): string {
  const unidades = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve']
  const decenas = ['', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa']
  const teens = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve']
  const centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos']

  function convertirHasta999(n: number): string {
    if (n === 0) return ''
    else if (n < 10) return unidades[n]
    else if (n < 20) return teens[n - 10]
    else if (n < 100) {
      const dec = Math.floor(n / 10)
      const uni = n % 10
      return uni === 0 ? decenas[dec] : decenas[dec] + ' y ' + unidades[uni]
    } else {
      const cen = Math.floor(n / 100)
      const resto = n % 100
      const centena = cen === 1 ? 'cien' : centenas[cen]
      return resto === 0 ? centena : centena + 'to ' + convertirHasta999(resto)
    }
  }

  if (numero === 0) return 'cero'

  const millones = Math.floor(numero / 1000000)
  const miles = Math.floor((numero % 1000000) / 1000)
  const unid = numero % 1000

  const partes: string[] = []
  if (millones > 0) {
    partes.push(millones === 1 ? 'un millón' : convertirHasta999(millones) + ' millones')
  }
  if (miles > 0) {
    partes.push(miles === 1 ? 'mil' : convertirHasta999(miles) + ' mil')
  }
  if (unid > 0) {
    partes.push(convertirHasta999(unid))
  }

  return partes.join(' ')
}

/**
 * Genera los campos del PDF para un formulario F.102/B
 */
export function generarCamposF102B(datos: DatosFormulario): CamposPDF[] {
  const campos: CamposPDF[] = []

  // MES y AÑO del período
  campos.push({ nombre: 'MES', valor: `${datos.periodoDatos.mes.toString().padStart(2, '0')}` })
  campos.push({ nombre: 'ANIO', valor: `${datos.periodoDatos.anio.toString().padStart(4, '0')}` })

  // CUIL Trabajadora (dígito por dígito)
  for (let i = 0; i < datos.empleada.cuil.length; i++) {
    campos.push({
      nombre: `cuit${i + 1}`,
      valor: datos.empleada.cuil[i],
    })
  }

  // CUIL Empleadora (dígito por dígito)
  for (let i = 0; i < datos.empleador.cuil.length; i++) {
    campos.push({
      nombre: `cuitE${i + 1}`,
      valor: datos.empleador.cuil[i],
    })
  }

  // Datos personales
  campos.push({ nombre: 'ApellTrab', valor: datos.empleada.nombre })
  campos.push({ nombre: 'ApellEmp', valor: datos.empleador.nombre })
  campos.push({ nombre: 'Domi trabajoEmp', valor: datos.empleador.domicilio })

  // FECHA DE INGRESO (fija)
  const fechaIngreso = datos.fechaIngreso
  const diaIngreso = fechaIngreso.getDate().toString().padStart(2, '0')
  const mesIngreso = (fechaIngreso.getMonth() + 1).toString().padStart(2, '0')
  const anioIngreso = fechaIngreso.getFullYear().toString().padStart(4, '0')

  campos.push({ nombre: 'Dia1', valor: diaIngreso[0] })
  campos.push({ nombre: 'Dia2', valor: diaIngreso[1] })
  campos.push({ nombre: 'Mes1', valor: mesIngreso[0] })
  campos.push({ nombre: 'Mes2', valor: mesIngreso[1] })
  campos.push({ nombre: 'Año1', valor: anioIngreso[0] })
  campos.push({ nombre: 'Año2', valor: anioIngreso[1] })
  campos.push({ nombre: 'Año3', valor: anioIngreso[2] })
  campos.push({ nombre: 'Año4', valor: anioIngreso[3] })

  // PERÍODO DESDE (01/mes/año del período)
  const mesPeriodo = datos.periodoDatos.mes.toString().padStart(2, '0')
  const anioPeriodo = datos.periodoDatos.anio.toString().padStart(4, '0')

  campos.push({ nombre: 'Dia3', valor: '0' })
  campos.push({ nombre: 'Dia4', valor: '1' })
  campos.push({ nombre: 'Mes3', valor: mesPeriodo[0] })
  campos.push({ nombre: 'Mes4', valor: mesPeriodo[1] })
  campos.push({ nombre: 'Año5', valor: anioPeriodo[0] })
  campos.push({ nombre: 'Año6', valor: anioPeriodo[1] })
  campos.push({ nombre: 'Año7', valor: anioPeriodo[2] })
  campos.push({ nombre: 'Año8', valor: anioPeriodo[3] })

  // PERÍODO HASTA (últimodía/mes/año del período)
  const diaHasta = datos.periodoDatos.ultimoDia.toString().padStart(2, '0')

  campos.push({ nombre: 'Dia5', valor: diaHasta[0] })
  campos.push({ nombre: 'Dia6', valor: diaHasta[1] })
  campos.push({ nombre: 'Mes5', valor: mesPeriodo[0] })
  campos.push({ nombre: 'Mes6', valor: mesPeriodo[1] })
  campos.push({ nombre: 'Año9', valor: anioPeriodo[0] })
  campos.push({ nombre: 'Año91', valor: anioPeriodo[1] })
  campos.push({ nombre: 'Año92', valor: anioPeriodo[2] })
  campos.push({ nombre: 'Año93', valor: anioPeriodo[3] })

  // Datos laborales
  campos.push({ nombre: 'Cant Horas', valor: datos.horas.toString() })
  campos.push({ nombre: 'Basico', valor: datos.sueldo.toFixed(2) })
  campos.push({ nombre: 'TOTAL', valor: datos.sueldo.toFixed(2) })
  campos.push({ nombre: 'ImporteHoras', valor: datos.aporte.toFixed(2) })
  campos.push({ nombre: 'pesos', valor: numeroALetras(datos.sueldo) + ' pesos' })

  // Checkboxes
  campos.push({ nombre: 'Semana', valor: 'Yes' })
  campos.push({ nombre: 'F10216', valor: 'Yes' })
  campos.push({ nombre: 'F1023ACTIVO', valor: 'Yes' })

  return campos
}

/**
 * Valida que los datos sean correctos antes de generar
 */
export function validarDatosFormulario(datos: DatosFormulario): { valido: boolean; errores: string[] } {
  const errores: string[] = []

  if (!datos.empleada.cuil || datos.empleada.cuil.length !== 11) {
    errores.push('CUIL trabajadora inválido')
  }
  if (!datos.empleador.cuil || datos.empleador.cuil.length !== 11) {
    errores.push('CUIL empleadora inválido')
  }
  if (!datos.empleada.nombre || datos.empleada.nombre.trim() === '') {
    errores.push('Nombre trabajadora requerido')
  }
  if (!datos.empleador.nombre || datos.empleador.nombre.trim() === '') {
    errores.push('Nombre empleadora requerido')
  }
  if (datos.sueldo <= 0) {
    errores.push('Sueldo debe ser mayor a 0')
  }
  if (datos.aporte <= 0) {
    errores.push('Aporte debe ser mayor a 0')
  }
  if (datos.horas <= 0) {
    errores.push('Horas debe ser mayor a 0')
  }

  return {
    valido: errores.length === 0,
    errores,
  }
}

/**
 * Resumen de lo que se va a generar
 */
export function generarResumenF102B(datos: DatosFormulario): string {
  return `
F.102/B - PERÍODO ${datos.periodoDatos.mes}/${datos.periodoDatos.anio}

Trabajadora: ${datos.empleada.nombre} (${datos.empleada.cuil})
Empleadora: ${datos.empleador.nombre} (${datos.empleador.cuil})
Ingreso: ${datos.fechaIngreso.toLocaleDateString('es-AR')}
Período: ${datos.periodoDatos.primerDia}/${datos.periodoDatos.mes}/${datos.periodoDatos.anio} a ${datos.periodoDatos.ultimoDia}/${datos.periodoDatos.mes}/${datos.periodoDatos.anio}
Horas: ${datos.horas}
Sueldo: $${datos.sueldo}
Aporte: $${datos.aporte}
Total: $${datos.sueldo}
Pesos: ${numeroALetras(datos.sueldo)}
`
}