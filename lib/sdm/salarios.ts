/**
 * Módulo de gestión de salarios y vigencias
 * Lee del Excel y busca salarios por fecha y categoría
 */

import * as XLSX from 'xlsx'
import { readFileSync } from 'fs'

export interface Vigencia {
  fecha: Date
  categoria: string
  monto: number
}

export interface SalariosPorCategoria {
  categoria: string
  vigencias: Vigencia[]
}

/**
 * Lee el archivo Excel y extrae salarios por categoría
 * @param rutaExcel - Ruta al archivo Excel
 * @returns Array de salarios por categoría
 */
export function cargarSalariosDelExcel(rutaExcel: string): SalariosPorCategoria[] {
  try {
    const archivo = readFileSync(rutaExcel)
    const workbook = XLSX.read(archivo, { type: 'buffer' })
    const nombreHoja = 'SALARIOS T '
    
    if (!workbook.SheetNames.includes(nombreHoja)) {
      throw new Error(`Hoja "${nombreHoja}" no encontrada. Hojas disponibles: ${workbook.SheetNames.join(', ')}`)
    }

    const hoja = workbook.Sheets[nombreHoja]
    const datos = XLSX.utils.sheet_to_json(hoja, { header: 1 }) as any[][]

    const salarios: Map<string, Vigencia[]> = new Map()

    // Procesar filas (saltear header)
    for (let i = 1; i < datos.length; i++) {
      const fila = datos[i]
      
      if (!fila || fila.length < 3 || !fila[0] || !fila[1] || !fila[2]) continue

      const fechaRaw = fila[0]
      const categoria = String(fila[1]).trim()
      const monto = Number(fila[2])

      if (!categoria || isNaN(monto)) continue

      // Convertir fecha
      let fecha: Date
      if (fechaRaw instanceof Date) {
        fecha = fechaRaw
      } else if (typeof fechaRaw === 'number') {
        // Excel serial number
        fecha = new Date((fechaRaw - 25569) * 86400 * 1000)
      } else {
        // String formato DD/MM/YYYY
        const partes = String(fechaRaw).split('/')
        if (partes.length !== 3) continue
        fecha = new Date(parseInt(partes[2]), parseInt(partes[1]) - 1, parseInt(partes[0]))
      }

      if (!salarios.has(categoria)) {
        salarios.set(categoria, [])
      }

      salarios.get(categoria)!.push({ fecha, categoria, monto })
    }

    // Convertir Map a Array y ordenar por fecha
    const resultado: SalariosPorCategoria[] = Array.from(salarios.entries()).map(
      ([categoria, vigencias]) => ({
        categoria,
        vigencias: vigencias.sort((a, b) => a.fecha.getTime() - b.fecha.getTime()),
      })
    )

    return resultado
  } catch (error) {
    throw new Error(`Error al cargar Excel: ${error instanceof Error ? error.message : String(error)}`)
  }
}

/**
 * Obtiene el salario aplicable para una fecha y categoría
 * @param salarios - Array de salarios por categoría
 * @param fecha - Fecha a consultar
 * @param categoria - Categoría laboral
 * @returns Monto del salario o null
 */
export function obtenerSalario(
  salarios: SalariosPorCategoria[],
  fecha: Date,
  categoria: string
): number | null {
  const categoriaSalarios = salarios.find(s => s.categoria === categoria)
  
  if (!categoriaSalarios) return null

  // Buscar la vigencia más reciente que sea <= a la fecha
  let salarioAplicable: number | null = null

  for (const vigencia of categoriaSalarios.vigencias) {
    if (vigencia.fecha <= fecha) {
      salarioAplicable = vigencia.monto
    } else {
      break
    }
  }

  return salarioAplicable
}

/**
 * Valida que un salario sea razonable
 * @param monto - Monto a validar
 * @returns true si es válido
 */
export function validarSalario(monto: number | null): boolean {
  if (monto === null || monto === undefined) return false
  return monto > 0 && monto < 100000
}

/**
 * Obtiene todas las vigencias para una categoría
 * @param salarios - Array de salarios por categoría
 * @param categoria - Categoría a filtrar
 * @returns Array de vigencias
 */
export function obtenerVigencias(
  salarios: SalariosPorCategoria[],
  categoria: string
): Vigencia[] {
  const categoriaSalarios = salarios.find(s => s.categoria === categoria)
  return categoriaSalarios?.vigencias || []
}
