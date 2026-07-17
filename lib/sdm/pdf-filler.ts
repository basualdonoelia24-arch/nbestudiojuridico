/**
 * Módulo de relleno de PDFs con pdf-lib
 * Rellena el template PDF con los datos de cada formulario
 */

import { PDFDocument } from 'pdf-lib'
import { readFileSync } from 'fs'
import type { FormularioGenerado } from './caso'

/**
 * Rellena el template PDF con los datos de un formulario
 */
export async function rellenarPDFTemplate(
  rutaTemplate: string,
  formulario: FormularioGenerado
): Promise<Buffer> {
  try {
    // Leer el template
    const templateBytes = readFileSync(rutaTemplate)
    const pdfDoc = await PDFDocument.load(templateBytes)

    // Obtener los campos del formulario
    const campos = formulario.campos.reduce(
      (acc, c) => ({ ...acc, [c.nombre]: c.valor }),
      {} as Record<string, string>
    )

    // Rellenar campos
    const form = pdfDoc.getForm()
    const fields = form.getFields()

    for (const field of fields) {
  const nombreCampo = field.getName()

  if (campos[nombreCampo]) {
    try {
      const value = campos[nombreCampo]
      const fieldAny = field as any
      if (fieldAny.setText) {
        fieldAny.setText(value)
      }
    } catch (error) {
      console.warn(`No se pudo rellenar campo ${nombreCampo}`)
    }
  }
}

    // Flatear el formulario
    form.flatten()

    // Guardar a bytes
    const pdfBytes = await pdfDoc.save()
    return Buffer.from(pdfBytes)
  } catch (error) {
    throw new Error(
      `Error rellenando PDF: ${error instanceof Error ? error.message : String(error)}`
    )
  }
}

/**
 * Rellena múltiples PDFs
 */
export async function rellenarPDFsTemplate(
  rutaTemplate: string,
  formularios: FormularioGenerado[]
): Promise<{ periodo: string; buffer: Buffer }[]> {
  const pdfs: { periodo: string; buffer: Buffer }[] = []

  for (const formulario of formularios) {
    try {
      const buffer = await rellenarPDFTemplate(rutaTemplate, formulario)
      pdfs.push({
        periodo: formulario.periodo,
        buffer,
      })
    } catch (error) {
      console.error(`Error PDF ${formulario.periodo}:`, error)
    }
  }

  return pdfs
}