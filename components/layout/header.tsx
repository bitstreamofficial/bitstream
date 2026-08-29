'use client';

import { usePathname } from 'next/navigation';
import { Navbar } from '@/components/ui/navbar';

export function Header() {
  const pathname = usePathname();

  // Product pages ship their own navigation.
  if (
    pathname?.startsWith('/projects/uniride') ||
    pathname?.startsWith('/open-routine')
  ) {
    return null;
  }

  return <Navbar />;
}
