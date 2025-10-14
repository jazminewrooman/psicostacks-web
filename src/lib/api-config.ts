/**
 * Obtiene la URL base del backend API
 */
export function getBackendUrl(): string {
  return process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001';
}

/**
 * Construye una URL completa para un endpoint del backend
 * @param path Ruta del endpoint (ej: '/api/ai-interpret')
 */
export function getBackendApiUrl(path: string): string {
  const baseUrl = getBackendUrl();
  // Asegurar que el path empiece con /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${normalizedPath}`;
}
