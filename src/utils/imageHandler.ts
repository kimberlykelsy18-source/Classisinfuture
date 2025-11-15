// Image handler that works in both development and production
// In dev: Uses figma:asset imports
// In production: Falls back to placeholder or similar images

export function getFigmaAssetUrl(assetPath: string, fallbackUrl: string): string {
  // In development, figma:asset imports are resolved by the bundler
  // In production, we use fallback URLs
  
  // Check if we're in production (asset path starts with "figma:asset")
  if (typeof assetPath === 'string' && assetPath.startsWith('figma:asset')) {
    // Asset didn't resolve, use fallback
    return fallbackUrl;
  }
  
  // Asset resolved properly (dev mode), use it
  return assetPath;
}

// Export the actual URL creator
export function createImageUrl(assetPath: any, fallbackUrl: string): string {
  // If assetPath is already a URL (production build resolved it), use it
  if (typeof assetPath === 'string' && !assetPath.startsWith('figma:asset')) {
    return assetPath;
  }
  
  // Otherwise use fallback
  return fallbackUrl;
}
