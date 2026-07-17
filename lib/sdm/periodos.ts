/**
 * Módulo de generación de períodos mensuales
 * Genera un array de todos los meses entre dos fechas
 */

export interface Periodo {
  numero: number
  fecha: Date
  mes: number
  anio: number
  periodo: string
  primerDia: number
  ultimoDia: number
}

/**
 * Genera todos los períodos mensuales entre dos fechas
 * @param fechaInicio - Fecha de inicio (formato: Date)
 * @param fechaFin - Fecha de fin (formato: Date)
 * @returns Array de períodos mensuales
 */
export function generarPeriodos(
  fechaInicio: Date,
  fechaFin: Date
): Periodo[] {
  const periodos: Periodo[] = []
  let fecha = new Date(fechaInicio)
  let numero = 1

  while (fecha <= fechaFin) {
    const mes = fecha.getMonth() + 1
    const anio = fecha.getFullYear()
    
    // Último día del mes
    const ultimoDia = new Date(anio, mes, 0).getDate()
    
    const periodo: Periodo = {
      numero,
      fecha: new Date(fecha),
      mes,
      anio,
      periodo: `${anio}-${String(mes).padStart(2, '0')}`,
      primerDia: 1,
      ultimoDia,
    }
    
    periodos.push(periodo)
    
    // Siguiente mes
    if (mes === 12) {
      fecha = new Date(anio + 1, 0, 1)
    } else {
      fecha = new Date(anio, mes, 1)
    }
    
    numero++
  }

  return periodos
}

/**
 * Obtiene un período específico por número
 * @param periodos - Array de períodos
 * @param numero - Número de período (1-based)
 * @returns Período o undefined
 */
export function obtenerPeriodo(periodos: Periodo[], numero: number): Periodo | undefined {
  return periodos.find(p => p.numero === numero)
}

/**
 * Obtiene períodos por año
 * @param periodos - Array de períodos
 * @param anio - Año a filtrar
 * @returns Array de períodos del año
 */
export function obtenerPeriodosPorAnio(periodos: Periodo[], anio: number): Periodo[] {
  return periodos.filter(p => p.anio === anio)
}

/**
 * Valida que un rango de fechas sea válido
 * @param fechaInicio - Fecha de inicio
 * @param fechaFin - Fecha de fin
 * @returns true si es válido
 */
export function validarRangoFechas(fechaInicio: Date, fechaFin: Date): boolean {
  return fechaInicio <= fechaFin
}

/**
 * Calcula la cantidad de meses entre dos fechas
 * @param fechaInicio - Fecha de inicio
 * @param fechaFin - Fecha de fin
 * @returns Cantidad de meses
 */
export function calcularCantidadMeses(fechaInicio: Date, fechaFin: Date): number {
  const meses = (fechaFin.getFullYear() - fechaInicio.getFullYear()) * 12 + 
                (fechaFin.getMonth() - fechaInicio.getMonth()) + 1
  return meses
}