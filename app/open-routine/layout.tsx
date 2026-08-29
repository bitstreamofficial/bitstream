import type { Metadata } from 'next';

const DESCRIPTION =
  'Free, open-source class routine app for Daffodil International University. ' +
  'Type your batch and get your week — instantly, offline, with no account.';

export const metadata: Metadata = {
  title: 'Open Routine — DIU class routine, offline',
  description: DESCRIPTION,
  keywords: [
    'DIU routine',
    'DIU class routine',
    'Daffodil International University routine',
    'CSE class routine',
    'DIU empty room',
    'DIU teacher schedule',
    'open routine app',
  ],
  alternates: { canonical: 'https://bitstreamhq.com/open-routine' },
  openGraph: {
    type: 'website',
    url: 'https://bitstreamhq.com/open-routine',
    title: 'Open Routine — your DIU class routine, offline',
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
    title: 'Open Routine — your DIU class routine, offline',
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
