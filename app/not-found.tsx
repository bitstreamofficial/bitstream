import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-900">404</h1>
        <h2 className="mb-4 text-3xl font-semibold text-gray-700">
          Page Not Found
        </h2>
        <p className="mx-auto mb-8 max-w-md text-gray-600">
          The page you're looking for doesn't exist. It might have been moved,
          deleted, or you entered the wrong URL.
        </p>
        <Link href="/">
          <Button className="btn-primary">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
