import { NextRequest, NextResponse } from 'next/server';
import {
  rateLimit,
  rateLimitResponse,
  addSecurityHeaders,
} from '@/lib/security';

export async function GET(request: NextRequest) {
  // Apply rate limiting
  const { limited } = rateLimit(request, { windowMs: 60000, maxRequests: 30 });

  if (limited) {
    return rateLimitResponse();
  }

  const response = NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    service: 'BitStream API',
    environment: process.env.NODE_ENV || 'production',
  });

  return addSecurityHeaders(response);
}
