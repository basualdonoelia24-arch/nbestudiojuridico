/**
 * Módulo de gestión de aportes
 * Lee del Excel y busca aportes por período y categoría
 */

import * as XLSX from 'xlsx'
import { readFileSync } from 'fs'

export interface RangoAporte {
  desde: string // MM/YYYY
  hasta: string // MM/YYYY
  categoria: string
  descripcion: string
  importe: number
}

export interface AportesPorCategoria {
  categoria: string
  rangos: RangoAporte[]
}

/**
 * Lee el archivo Excel y extrae aportes por categoría
 * @param rutaExcel - Ruta al archivo Excel
 * @returns Array de aportes por categoría
 */
export function cargarAportesDelExcel(rutaExcel: string): AportesPorCategoria[] {
  try {
    const archivo = readFileSync(rutaExcel)
    const workbook = XLSX.read(archivo, { type: 'buffer' })
    const nombreHoja = 'APORTES_MENOS_12HS'
    
    if (!workbook.SheetNames.includes(nombreHoja)) {
      throw new Error(`Hoja "${nombreHoja}" no encontrada. Hojas disponibles: ${workbook.SheetNames.join(', ')}`)
    }

    const hoja = workbook.Sheets[nombreHoja]
    const datos = XLSX.utils.sheet_to_json(hoja, { header: 1 }) as any[][]

    const aportes: Map<string, RangoAporte[]> = new Map()

    // Procesar filas (saltear header)
    for (let i = 1; i < datos.length; i++) {
      const fila = datos[i]
      
      if (!fila || fila.length < 4 || !fila[0] || !fila[1] || !fila[3]) continue

      const desde = String(fila[0]).trim()
      const hasta = String(fila[1]).trim()
      const descripcion = String(fila[2]).trim()
      const importe = Number(fila[3])

      if (!desde || !hasta || isNaN(importe)) continue

      // Validar formato MM/YYYY
      if (!/^\d{2}\/\d{4}$/.test(desde) || !/^\d{2}\/\d{4}$/.test(hasta)) continue

      // Determinar categoría basada en descripción
      let categoria = 'Menos de 12 hs'
      if (descripcion.includes('12') || descripcion.includes('más')) {
        categoria = '12 hs o más'
      }

      const rango: RangoAporte = {
        desde,
        hasta,
        categoria,
        descripcion,
        importe,
      }

      if (!aportes.has(categoria)) {
        aportes.set(categoria, [])
      }

      aportes.get(categoria)!.push(rango)
    }

    // Convertir Map a Array
    const resultado: AportesPorCategoria[] = Array.from(aportes.entries()).map(
      ([categoria, rangos]) => ({
        categoria,
        rangos: rangos.sort((a, b) => {
          const aFecha = new Date(parseInt(a.desde.split('/')[1]), parseInt(a.desde.split('/')[0]) - 1)
          const bFecha = new Date(parseInt(b.desde.split('/')[1]), parseInt(b.desde.split('/')[0]) - 1)
          return aFecha.getTime() - bFecha.getTime()
        }),
      })
    )

    return resultado
  } catch (error) {
    throw new Error(`Error al cargar aportes: ${error instanceof Error ? error.message : String(error)}`)
  }
}

/**
 * Obtiene el aporte aplicable para un período y categoría
 * @param aportes - Array de aportes por categoría
 * @param periodo - Período en formato YYYY-MM
 * @param categoria - Categoría laboral (ej: "Menos de 12 hs")
 * @returns Importe del aporte o null
 */
export function obtenerAporte(
  aportes: AportesPorCategoria[],
  periodo: string,
  categoria: string
): number | null {
  const aporteCategoria = aportes.find(a => a.categoria === categoria)
  
  if (!aporteCategoria) return null

  // Convertir período YYYY-MM a MM/YYYY
  const partes = periodo.split('-')
  if (partes.length !== 2) return null
  
  const periodoBuscado = `${partes[1]}/${partes[0]}`

  // Buscar el rango que contenga el período
  for (const rango of aporteCategoria.rangos) {
    if (estaEnRango(periodoBuscado, rango.desde, rango.hasta)) {
      return rango.importe
    }
  }

  return null
}

/**
 * Verifica si un período está dentro de un rango
 * @param periodo - Período a verificar (MM/YYYY)
 * @param desde - Período inicial (MM/YYYY)
 * @param hasta - Período final (MM/YYYY)
 * @returns true si el período está en el rango
 */
function estaEnRango(periodo: string, desde: string, hasta: string): boolean {
  const [mesPeriodo, anioPeriodo] = periodo.split('/')
  const [mesDesde, anioDesde] = desde.split('/')
  const [mesHasta, anioHasta] = hasta.split('/')

  const fechaPeriodo = new Date(parseInt(anioPeriodo), parseInt(mesPeriodo) - 1)
  const fechaDesde = new Date(parseInt(anioDesde), parseInt(mesDesde) - 1)
  const fechaHasta = new Date(parseInt(anioHasta), parseInt(mesHasta) - 1)

  return fechaPeriodo >= fechaDesde && fechaPeriodo <= fechaHasta
}

/**
 * Valida que un aporte sea razonable
 * @param importe - Importe a validar
 * @returns true si es válido
 */
export function validarAporte(importe: number | null): boolean {
  if (importe === null || importe === undefined) return false
  return importe > 0 && importe < 10000
}

/**
 * Obtiene todos los rangos para una categoría
 * @param aportes - Array de aportes por categoría
 * @param categoria - Categoría a filtrar
 * @returns Array de rangos
 */
export function obtenerRangos(
  aportes: AportesPorCategoria[],
  categoria: string
): RangoAporte[] {
  const aporteCategoria = aportes.find(a => a.categoria === categoria)
  return aporteCategoria?.rangos || []
}

/**
 * Obtiene todas las categorías disponibles
 * @param aportes - Array de aportes por categoría
 * @returns Array de nombres de categoría
 */
export function obtenerCategorias(aportes: AportesPorCategoria[]): string[] {
  return aportes.map(a => a.categoria)
}