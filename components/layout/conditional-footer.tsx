'use client';

import { usePathname } from 'next/navigation';
import { Footer } from './footer';

export function ConditionalFooter() {
  const pathname = usePathname();

  // Don't show BitStream footer on UniRide pages
  if (pathname?.startsWith('/projects/uniride')) {
    return null;
  }

  return <Footer />;
}
