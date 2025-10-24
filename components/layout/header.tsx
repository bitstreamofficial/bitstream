'use client';

import { usePathname } from 'next/navigation';
import { Navbar } from '@/components/ui/navbar';

export function Header() {
  const pathname = usePathname();

  // Hide BitStream navbar on UniRide routes
  if (pathname?.startsWith('/projects/uniride')) {
    return null;
  }

  return <Navbar />;
}
