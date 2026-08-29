import type { Metadata } from 'next';

const DESCRIPTION =
  'Free forever — no subscription, no unlock fee, no account. The DIU class ' +
  'routine app: type your batch, get your week, and it keeps working offline.';

export const metadata: Metadata = {
  title: 'Open Routine — your DIU class routine, free forever',
  description: DESCRIPTION,
  keywords: [
    'DIU routine',
    'DIU class routine',
    'Daffodil International University routine',
    'CSE class routine',
    'free DIU routine app',
    'DIU routine without subscription',
    'DIU empty room',
    'DIU teacher schedule',
    'open routine app',
  ],
  alternates: { canonical: 'https://bitstreamhq.com/open-routine' },
  openGraph: {
    type: 'website',
    url: 'https://bitstreamhq.com/open-routine',
    title: 'Open Routine — your DIU class routine, free forever',
    description: DESCRIPTION,
    siteName: 'BitStream',
    images: [
      {
        url: '/images/open-routine/student.jpg',
        width: 1080,
        height: 2178,
        alt: 'A student’s weekly schedule in Open Routine',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open Routine — your DIU class routine, free forever',
    description: DESCRIPTION,
    images: ['/images/open-routine/student.jpg'],
  },
};

export default function OpenRoutineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
