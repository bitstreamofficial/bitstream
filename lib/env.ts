/**
 * Environment variable validation
 * This ensures all required environment variables are set before the app starts
 */

const requiredEnvVars = [
  'MONGODB_URI',
  'NEXTAUTH_SECRET',
  'NEXTAUTH_URL',
] as const;

const optionalEnvVars = [
  'SENDGRID_API_KEY',
  'FROM_EMAIL',
  'NEXT_PUBLIC_CLOUDINARY_CLOUD',
  'CLOUDINARY_CLOUD_NAME',
  'CLOUDINARY_API_KEY',
  'CLOUDINARY_API_SECRET',
  'NEXT_PUBLIC_APP_URL',
] as const;

type EnvVar =
  | (typeof requiredEnvVars)[number]
  | (typeof optionalEnvVars)[number];

export function validateEnv(): void {
  const missing: string[] = [];

  // Check required environment variables
  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      missing.push(envVar);
    }
  }

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables:\n${missing
        .map((v) => `  - ${v}`)
        .join('\n')}\n\nPlease check your .env.local file.`
    );
  }

  // Warn about missing optional variables
  const missingOptional: string[] = [];
  for (const envVar of optionalEnvVars) {
    if (!process.env[envVar]) {
      missingOptional.push(envVar);
    }
  }

  if (missingOptional.length > 0 && process.env.NODE_ENV === 'development') {
    console.warn(
      `⚠️  Warning: Missing optional environment variables:\n${missingOptional
        .map((v) => `  - ${v}`)
        .join('\n')}`
    );
  }
}

export function getEnv(key: EnvVar): string {
  const value = process.env[key];

  if (
    !value &&
    requiredEnvVars.includes(key as (typeof requiredEnvVars)[number])
  ) {
    throw new Error(`Environment variable ${key} is required but not set`);
  }

  return value || '';
}

// Validate on import (only in Node.js environment)
if (typeof window === 'undefined') {
  validateEnv();
}
