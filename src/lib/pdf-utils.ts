/**
 * Valida que el archivo sea un PDF y no exceda el tamaño máximo
 * @param file Archivo a validar
 * @param maxSizeMB Tamaño máximo en MB (por defecto 10MB)
 * @returns true si es válido, lanza error si no
 */
export function validatePDFFile(file: File, maxSizeMB: number = 10): boolean {
  // Validar tipo de archivo
  if (file.type !== 'application/pdf') {
    throw new Error('Please upload a PDF file');
  }
  
  // Validar tamaño
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  if (file.size > maxSizeBytes) {
    throw new Error(`File size must be less than ${maxSizeMB}MB`);
  }
  
  return true;
}
