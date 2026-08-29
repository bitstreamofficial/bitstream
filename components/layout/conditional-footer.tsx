'use client';

import { usePathname } from 'next/navigation';
import { Footer } from './footer';

export function ConditionalFooter() {
  const pathname = usePathname();

  // Product pages ship their own footer.
  if (
    pathname?.startsWith('/projects/uniride') ||
    pathname?.startsWith('/open-routine')
  ) {
    return null;
  }

  return <Footer />;
}
