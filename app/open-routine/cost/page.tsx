import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import {
  AMBER,
  INK,
  INK_DIM,
  LegendSwatch,
  Mono,
  StepHeading,
  TEAL,
  Verdict,
} from '../_components/prose';

const GITHUB = 'https://github.com/mr-shakib/open-routine';
const API = 'https://routine.bitstreamhq.com';

const DESCRIPTION =
  'Open Routine is free, and “servers cost money” is a checkable claim. We ' +
  'measured the payload, counted the users, and read our own invoice: about ' +
  '$5 a month, flat no matter how many students use it.';

export const metadata: Metadata = {
  title: 'What it actually costs to run a class routine app',
  description: DESCRIPTION,
  keywords: [
    'DIU routine app cost',
    'class routine server cost',
    'why is the routine app paid',
    'open routine free',
    'routine app subscription',
    'server cost breakdown',
  ],
  alternates: { canonical: 'https://bitstreamhq.com/open-routine/cost' },
  openGraph: {
    type: 'article',
    url: 'https://bitstreamhq.com/open-routine/cost',
    title: 'What it actually costs to run a class routine app',
    description: DESCRIPTION,
    siteName: 'BitStream',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What it actually costs to run a class routine app',
    description: DESCRIPTION,
  },
};

const tiles = [
  {
    k: 'Per student, per version',
    v: '53',
    unit: 'KB',
    d: 'The entire routine, compressed. Downloaded once, then answered offline.',
  },
  {
    k: 'Our real monthly bill',
    v: '$9',
    unit: '/mo',
    d: 'Measured on AWS — pricier infrastructure than this workload needs.',
  },
  {
    k: 'Origin traffic per year',
    v: '1.8',
    unit: 'MB',
    d: 'Behind a free CDN, serving a file that is identical for everyone.',
  },
  {
    k: 'Cost per student, per year',
    v: '0.14',
    unit: 'BDT',
    d: 'Fourteen poisha — modelled at 50,000 users, far more than exist.',
  },
];

const egressRows = [
  ['5,000', '10', '2.9 GB', '0.24 GB', false],
  ['10,000', '15', '8.6 GB', '0.72 GB', false],
  ['50,000', '15', '42.9 GB', '3.6 GB', false],
  ['50,000', '24', '68.7 GB', '5.7 GB', true],
] as const;

const itemised = [
  [
    'Compute — smallest VPS or Lightsail tier',
    '$5.00',
    'Workload needs nothing bigger',
  ],
  ['Bandwidth', '$0.00', 'Inside the included allowance'],
  [
    'CDN — Cloudflare free plan',
    '$0.00',
    'The payload is identical for everyone',
  ],
  ['Database', '$0.00', '~2,000 rows, SQLite on the same disk'],
  ['Push notifications — FCM', '$0.00', 'Free and unmetered'],
] as const;

const ourBill = [
  ['EC2 t3.micro · ap-south-1', '$8.00'],
  ['16 GB gp3 disk', '$1.30'],
  ['Elastic IP', 'included'],
  ['Database — SQLite, same disk', '$0.00'],
] as const;

const rebuttals = [
  {
    q: '“Servers are expensive.”',
    a: 'This whole backend fits on the cheapest VPS any host sells — around $5 a month. We pay $9 for the equivalent on AWS, which is dearer than it needs to be. Measured, not estimated.',
  },
  {
    q: '“Bandwidth is expensive.”',
    a: '53 KB per student per routine version, gzipped and measured. Even at 50,000 users with 24 releases a year and nothing cached anywhere, that is 69 GB — about half a percent of a €4 VPS’s monthly allowance. Behind a CDN, origin traffic is roughly 1.8 MB a year.',
  },
  {
    q: '“But costs scale with users.”',
    a: 'Not meaningfully. One more student is 60 KB per version — under 1.5 MB a year. Ten thousand more are about 9 GB a year, still inside the base tier. Cost stays flat while revenue would grow with every install. That gap is the whole point, not any single figure here.',
  },
  {
    q: '“The database costs money.”',
    a: 'There is no managed database here, and none is needed. Roughly 2,000 rows, read-only between publishes, SQLite sitting on the same disk as the app. Zero.',
  },
  {
    q: '“It’s offline-first, so the server barely runs.”',
    a: 'Correct — and this is the point that cuts hardest. The architecture is deliberately built to keep the server idle. Minimising server cost is its central design decision, which makes server cost a strange thing to charge for.',
  },
];

const limits = [
  {
    t: 'It does not reveal anyone’s pricing.',
    b: 'We never touched a subscription or payment endpoint on any other service — probing someone else’s billing is off limits. Nothing here came from that.',
  },
  {
    t: 'It does not prove bad faith.',
    b: 'A developer who has only ever deployed on expensive infrastructure may genuinely believe their servers cost a lot. Being wrong about a number is not dishonesty, and none of this should be read as calling anyone a liar.',
  },
  {
    t: 'It does not show anyone else’s invoice.',
    b: 'If someone runs infrastructure far larger than this workload needs, their bill is higher than ours — and still flat as users grow. A bigger idle server does not become a per-user cost.',
  },
  {
    t: 'It does not address anyone’s labour.',
    b: 'Time spent building and maintaining an app is real and mostly uncompensated. Wanting to be paid for that is entirely legitimate. Our point is narrow, and it is only about the stated reason.',
  },
];

/* ------------------------------------------------------------------ page --- */

export default function OpenRoutineCostPage() {
  return (
    <div className="min-h-screen bg-[#0B1416] text-slate-100">
      {/* ---------------------------------------------------------- nav --- */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1416]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/open-routine" className="flex items-center gap-3">
            <Image
              src="/images/open-routine/icon.png"
              alt=""
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="text-lg font-semibold tracking-tight">
              Open Routine
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/open-routine/system"
              className="hidden text-sm text-slate-300 hover:text-white sm:block"
            >
              How it is maintained
            </Link>
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-sm text-slate-300 hover:text-white sm:block"
            >
              GitHub
            </a>
            <Link
              href="/open-routine#download"
              className="rounded-lg bg-[#14B8A6] px-4 py-2 text-sm font-semibold text-[#06231F] transition hover:bg-[#2DD4BF]"
            >
              Download
            </Link>
          </div>
        </div>
      </nav>

      {/* -------------------------------------------------------- hero --- */}
      <header className="relative overflow-hidden px-5 pb-16 pt-20 sm:pt-28">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#0E5C60] opacity-25 blur-[120px]"
        />
        <div className="relative mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.16em] text-[#2DD4BF]">
            <span>Cost analysis</span>
            <span className="text-white/25">/</span>
            <span>Measured 29 Aug 2026</span>
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
            Fourteen poisha a year
          </h1>
          <p className="mt-4 text-xl leading-snug text-slate-400 sm:text-2xl">
            What it actually costs to serve one student their class routine.
          </p>

          <p className="mt-8 text-lg leading-relaxed text-slate-300">
            Open Routine is free, and the question we get most often is how that
            can last. The usual answer elsewhere is <em>server costs</em> —
            which is a good answer, because almost nobody checks it. So we
            checked it. We reconstructed the payload, measured it on the wire,
            counted the users, then built the same backend ourselves and read
            the invoice.{' '}
            <strong className="font-semibold text-white">
              The server bill is about five dollars a month.
            </strong>
          </p>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-slate-500">
            <span>Measured, not estimated</span>
            <span>Public endpoints only</span>
            <span>Every figure reproducible</span>
          </div>
        </div>
      </header>

      {/* ------------------------------------------------------- tiles --- */}
      <section className="px-5 pb-8">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((t) => (
            <div
              key={t.k}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.13em] text-slate-500">
                {t.k}
              </div>
              <div className="mt-4 text-4xl font-bold tabular-nums tracking-tight text-white">
                {t.v}
                <span className="ml-1 text-lg font-semibold text-slate-500">
                  {t.unit}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {t.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------- the question --- */}
      <section className="border-t border-white/5 px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-r-xl border-l-[3px] border-[#DB6E33] bg-[#DB6E33]/10 px-6 py-5">
            <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#E8935F]">
              The claim under examination
            </div>
            <p className="mt-2 text-lg text-slate-200">
              “We have to charge — running the servers costs money.”
            </p>
          </div>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate-300">
            <p>
              This looks at exactly one thing:{' '}
              <strong className="font-semibold text-white">server cost</strong>.
              Not the domain, not the Play Store registration fee, not anyone’s
              time. Those are real expenses, and we come back to the last one at
              the end — but they are not what gets claimed. Rolling them in
              would be the same move we are objecting to.
            </p>
            <p>
              The narrow question is answerable, and it is this: what does it
              cost to run this backend for the people who actually use it?
            </p>
          </div>

          <Verdict>
            <strong className="font-semibold text-white">
              Answer: roughly $5 a month.
            </strong>{' '}
            Double it to be generous and you still have not found the money.
          </Verdict>

          <p className="mt-8 text-lg leading-relaxed text-slate-300">
            One note on reading this. Anything set{' '}
            <span className="font-mono text-[0.9em] font-semibold text-[#2DD4BF]">
              in this face
            </span>{' '}
            was measured, or computed from something measured. Everything else
            is argument. We keep the two visibly apart on purpose, because the
            whole weight of this rests on the first kind — and because the usual
            way these arguments go wrong is by quietly promoting a guess into a
            fact.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------ step 1 --- */}
      <section className="border-t border-white/5 px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <StepHeading n="01" title="The number everyone gets wrong" />
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-300">
            <p>
              Every estimate of this — including our own first draft — makes the
              same mistake. It uses the <em>raw</em> size of the JSON. But
              nobody transfers raw JSON. It is gzipped in flight, and this
              payload is gloriously repetitive: the same course codes, the same
              room names, the same six time slots, thousands of times over.
              Compression eats it alive.
            </p>
            <p>
              So we measured it properly — our own snapshot live off the wire,
              and a reconstruction of the bigger precache format a subscription
              app would ship, built from its documented schema.
            </p>
          </div>
        </div>

        <figure className="mx-auto mt-10 max-w-4xl rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <figcaption>
            <div className="font-semibold text-white">
              What actually crosses the wire
            </div>
            <div className="mt-1 text-sm text-slate-400">
              Raw JSON against the gzipped bytes a phone really downloads, in
              kilobytes.
            </div>
          </figcaption>

          <div className="mt-6 overflow-x-auto">
            <svg viewBox="0 0 720 268" className="h-auto w-full min-w-[560px]">
              <title>
                Raw versus gzipped payload sizes. A full precache: 754 KB raw,
                53 KB gzipped. Our snapshot: 484 KB raw, 26 KB gzipped.
                teachers.json: 77 KB raw, 12.8 KB gzipped. rooms.json: 2.4 KB
                raw, 0.4 KB gzipped.
              </title>

              {[310, 420, 530, 640].map((x) => (
                <line
                  key={x}
                  x1={x}
                  y1={10}
                  x2={x}
                  y2={200}
                  stroke="#ffffff"
                  strokeOpacity={0.08}
                />
              ))}
              <line
                x1={200}
                y1={10}
                x2={200}
                y2={200}
                stroke="#ffffff"
                strokeOpacity={0.18}
              />

              {[
                {
                  label: 'Full precache',
                  sub: '(reconstructed)',
                  y: 16,
                  raw: 754,
                  rawW: 414.7,
                  gz: '53 KB',
                  gzW: 29.2,
                },
                {
                  label: 'Our snapshot',
                  sub: '(measured live)',
                  y: 64,
                  raw: 484,
                  rawW: 266.2,
                  gz: '26 KB',
                  gzW: 14.3,
                },
                {
                  label: 'teachers.json',
                  sub: '(measured live)',
                  y: 112,
                  raw: 77,
                  rawW: 42.4,
                  gz: '12.8 KB',
                  gzW: 7,
                },
                {
                  label: 'rooms.json',
                  sub: '(measured live)',
                  y: 160,
                  raw: 2.4,
                  rawW: 2.5,
                  gz: '0.4 KB',
                  gzW: 2,
                },
              ].map((r) => (
                <g key={r.label}>
                  <text
                    x={190}
                    y={r.y + 14}
                    textAnchor="end"
                    fill={INK}
                    fontSize={11}
                    fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
                  >
                    {r.label}
                  </text>
                  <text
                    x={190}
                    y={r.y + 28}
                    textAnchor="end"
                    fill={INK_DIM}
                    fontSize={10}
                    fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
                  >
                    {r.sub}
                  </text>

                  <rect
                    x={200}
                    y={r.y}
                    width={r.rawW}
                    height={14}
                    rx={4}
                    fill={AMBER}
                  />
                  <text
                    x={200 + r.rawW + 6}
                    y={r.y + 11}
                    fill={INK}
                    fontSize={11}
                    fontWeight={600}
                    fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
                  >
                    {r.raw}
                  </text>

                  <rect
                    x={200}
                    y={r.y + 16}
                    width={r.gzW}
                    height={14}
                    rx={4}
                    fill={TEAL}
                  />
                  <text
                    x={200 + r.gzW + 6}
                    y={r.y + 27}
                    fill={TEAL}
                    fontSize={11}
                    fontWeight={600}
                    fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
                  >
                    {r.gz}
                  </text>
                </g>
              ))}

              <line
                x1={200}
                y1={200}
                x2={640}
                y2={200}
                stroke="#ffffff"
                strokeOpacity={0.18}
              />
              {[
                [200, '0'],
                [310, '200'],
                [420, '400'],
                [530, '600'],
                [640, '800'],
              ].map(([x, t]) => (
                <text
                  key={t as string}
                  x={x as number}
                  y={218}
                  textAnchor="middle"
                  fill={INK_DIM}
                  fontSize={10}
                  fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
                >
                  {t}
                </text>
              ))}
              <text
                x={420}
                y={240}
                textAnchor="middle"
                fill={INK_DIM}
                fontSize={10}
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              >
                kilobytes
              </text>
            </svg>
          </div>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            <LegendSwatch color={AMBER}>
              Raw JSON — the number people quote
            </LegendSwatch>
            <LegendSwatch color={TEAL}>
              Gzipped — the number that gets billed
            </LegendSwatch>
          </div>

          <p className="mt-5 border-t border-white/10 pt-4 text-sm leading-relaxed text-slate-400">
            The two public files are directly checkable:{' '}
            <Mono>teachers.json</Mono> gzips from <Mono>77,195</Mono> bytes to{' '}
            <Mono>12,775</Mono>, and <Mono>rooms.json</Mono> from{' '}
            <Mono>2,458</Mono> to <Mono>411</Mono>. Run <Mono>gzip -9</Mono> on
            them yourself.
          </p>
        </figure>

        <div className="mx-auto mt-10 max-w-3xl">
          <Verdict>
            A phone downloads{' '}
            <strong className="font-semibold text-white">
              53 KB, once, per routine version.
            </strong>{' '}
            Not 484 KB. Not a megabyte and a half. Fifty-three kilobytes — about
            one photograph, and a small one. Everything below is built on this,
            and it is a measurement rather than a guess.
          </Verdict>
        </div>
      </section>

      {/* ------------------------------------------------------ step 2 --- */}
      <section className="border-t border-white/5 px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <StepHeading n="02" title="How many people are we serving?" />
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-300">
            <p>
              A Play Store listing in this category shows <Mono>10,000+</Mono>{' '}
              downloads — Google’s bucket, so the real figure sits somewhere
              between <Mono>10K</Mono> and <Mono>50K</Mono>.
            </p>
            <p>
              We are going to model the <em>top</em> of that bucket:{' '}
              <strong className="font-semibold text-white">50,000 users</strong>
              . That is deliberately unfair to our own argument. The CSE routine
              covers roughly <Mono>6,000–7,000</Mono> students, so fifty
              thousand assumes an app many times more popular than it can
              plausibly be, and that every install is a live daily user. We do
              it so nobody can rescue the server-cost claim by saying we
              lowballed the traffic.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ step 3 --- */}
      <section className="border-t border-white/5 px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <StepHeading n="03" title="The bandwidth bill" />
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-300">
            <p>
              Per user, per routine version: <Mono>53 KB</Mono> of routine data
              plus about <Mono>7 KB</Mono> of small calls — version pings, time
              slot lookups, autocomplete. Call it <Mono>60 KB</Mono>, rounded
              up.
            </p>
            <p>
              Here is the worst case, and it is a genuinely absurd one: nothing
              cached anywhere, every user re-downloading everything, every time.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-3xl overflow-x-auto">
          <table className="w-full font-mono text-sm tabular-nums">
            <caption className="pb-3 text-left font-mono text-[11px] uppercase tracking-[0.13em] text-slate-500">
              Total transfer with zero caching — the impossible worst case
            </caption>
            <thead>
              <tr className="border-b border-white/20 text-[11px] uppercase tracking-wider text-slate-500">
                <th className="py-2 pr-4 text-left font-semibold">Users</th>
                <th className="py-2 pr-4 text-right font-semibold">
                  Versions / yr
                </th>
                <th className="py-2 pr-4 text-right font-semibold">
                  Transfer / yr
                </th>
                <th className="py-2 text-right font-semibold">
                  Transfer / month
                </th>
              </tr>
            </thead>
            <tbody>
              {egressRows.map(([u, v, yr, mo, hot], i) => (
                <tr
                  key={i}
                  className={`border-b border-white/5 ${
                    hot ? 'font-semibold text-[#E8935F]' : 'text-slate-300'
                  }`}
                >
                  <td className="py-2.5 pr-4 text-left">{u}</td>
                  <td className="py-2.5 pr-4 text-right">{v}</td>
                  <td className="py-2.5 pr-4 text-right">{yr}</td>
                  <td className="py-2.5 text-right">{mo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mx-auto mt-8 max-w-3xl">
          <p className="text-lg leading-relaxed text-slate-300">
            Read the bottom row: every plausible user, the routine republished{' '}
            <em>twice a month</em>, nothing cached at all. That moves{' '}
            <Mono>69 GB</Mono> in a year. A <Mono>€4</Mono>/month VPS includes{' '}
            <Mono>1–20 TB</Mono> of transfer <em>per month</em>.
          </p>
        </div>

        <figure className="mx-auto mt-10 max-w-4xl rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <figcaption>
            <div className="font-semibold text-white">
              The worst month against the smallest allowance
            </div>
            <div className="mt-1 text-sm text-slate-400">
              Monthly transfer in the absurd scenario, as a share of the
              cheapest VPS quota.
            </div>
          </figcaption>

          <div className="mt-6">
            <div className="relative h-8 overflow-hidden rounded border border-white/10 bg-white/[0.04]">
              <div
                className="absolute inset-y-0 left-0"
                style={{ width: '0.56%', background: AMBER }}
              />
            </div>
            <div className="mt-2 flex justify-between font-mono text-xs text-slate-500">
              <span>0 GB</span>
              <span>1,024 GB / month included</span>
            </div>
            <p className="mt-4 font-mono text-xs font-semibold text-[#E8935F]">
              ↑ 5.7 GB — that sliver on the left is the entire bill.{' '}
              <span className="font-normal text-slate-500">
                0.56% of the quota.
              </span>
            </p>
          </div>

          <p className="mt-5 border-t border-white/10 pt-4 text-sm leading-relaxed text-slate-400">
            And <Mono>1 TB</Mono> is the <em>smallest</em> such allowance —
            several budget hosts include <Mono>20 TB</Mono>. Going over is not a
            near miss. It is off by more than two orders of magnitude.
          </p>
        </figure>

        <div className="mx-auto mt-12 max-w-3xl">
          <h3 className="text-xl font-semibold text-white">
            Now put a CDN in front of it
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            The routine payload is <em>byte-identical</em> for every student in
            a department, for a given version. That is the single most cacheable
            object a service can have. Cloudflare’s free plan will serve it from
            the edge, and after the first request per version the origin sees
            essentially nothing.
          </p>
          <Verdict>
            Origin traffic ≈ <Mono>15 versions × 2 departments × 60 KB</Mono> ≈{' '}
            <strong className="font-semibold text-white">
              1.8 MB per year.
            </strong>{' '}
            Not per month. Per year.
          </Verdict>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Behind a CDN that costs nothing, bandwidth for an app like this is
            not a small cost. It is a rounding error.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------ step 4 --- */}
      <section className="border-t border-white/5 px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <StepHeading n="04" title="The compute bill" />
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-300">
            <p>
              There is almost no compute to pay for, and that is by design —
              ours and everyone else’s who builds this the sensible way.
            </p>
            <p>
              A routine app is{' '}
              <strong className="font-semibold text-white">
                offline-first
              </strong>
              . It downloads once and then answers every query on the device.
              The server is deliberately idle almost all the time. That is the
              whole architectural idea, and it is a good one.
            </p>
            <p>
              Behind a CDN, the origin handles only cache misses plus version
              check pings of about <Mono>200 bytes</Mono> each. The dataset is
              roughly <Mono>2,000</Mono> rows, read-only between publishes — no
              managed database is needed, and SQLite on the same disk is more
              than sufficient, at a cost of <Mono>$0</Mono>. Push notifications
              go through Firebase Cloud Messaging: free and unmetered.
            </p>
            <p>
              A workload shaped like that runs comfortably on the smallest
              instance any host sells — a <Mono>$4–6</Mono>/month VPS, or AWS
              Lightsail’s <Mono>$5</Mono> tier. Nothing here needs more.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ step 5 --- */}
      <section className="border-t border-white/5 px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <StepHeading n="05" title="Adding it up" />
        </div>

        <div className="mx-auto mt-8 max-w-3xl overflow-x-auto">
          <table className="w-full font-mono text-sm tabular-nums">
            <caption className="pb-3 text-left font-mono text-[11px] uppercase tracking-[0.13em] text-slate-500">
              Server cost, itemised
            </caption>
            <thead>
              <tr className="border-b border-white/20 text-[11px] uppercase tracking-wider text-slate-500">
                <th className="py-2 pr-4 text-left font-semibold">Component</th>
                <th className="py-2 pr-4 text-right font-semibold">
                  Cost / month
                </th>
                <th className="py-2 text-left font-semibold">Basis</th>
              </tr>
            </thead>
            <tbody>
              {itemised.map(([c, cost, basis]) => (
                <tr key={c} className="border-b border-white/5 text-slate-300">
                  <td className="py-2.5 pr-4 text-left">{c}</td>
                  <td
                    className={`py-2.5 pr-4 text-right ${
                      cost === '$0.00' ? 'text-[#2DD4BF]' : ''
                    }`}
                  >
                    {cost}
                  </td>
                  <td className="py-2.5 text-left text-slate-500">{basis}</td>
                </tr>
              ))}
              <tr className="font-semibold text-white">
                <td className="pr-4 pt-3 text-left">Server total</td>
                <td className="pr-4 pt-3 text-right">≈ $5.00</td>
                <td className="pt-3 text-left text-slate-400">≈ $60 / year</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mx-auto mt-8 max-w-3xl">
          <p className="text-lg leading-relaxed text-slate-300">
            Call it <Mono>$10</Mono>/month to be maximally generous about an
            instance nobody outside can see — around <Mono>1,200 BDT</Mono> a
            month at the very top end. We will keep carrying that generous
            figure forward rather than the honest one.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------ step 6 --- */}
      <section className="border-t border-white/5 px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <StepHeading
            n="06"
            title="The control: we run this, and we can read the invoice"
          />
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            This is the part that is hard to wave away. We did not only estimate
            what a routine backend should cost. We{' '}
            <strong className="font-semibold text-white">run one</strong> —{' '}
            <Mono>2,002</Mono> classes, four query types, the same offline
            snapshot — and it sits on <strong>AWS</strong>, which is more
            expensive than this workload actually requires.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-3xl overflow-x-auto">
          <table className="w-full font-mono text-sm tabular-nums">
            <caption className="pb-3 text-left font-mono text-[11px] uppercase tracking-[0.13em] text-slate-500">
              Our live bill · Open Routine backend · AWS ap-south-1
            </caption>
            <thead>
              <tr className="border-b border-white/20 text-[11px] uppercase tracking-wider text-slate-500">
                <th className="py-2 pr-4 text-left font-semibold">Line item</th>
                <th className="py-2 text-right font-semibold">Cost / month</th>
              </tr>
            </thead>
            <tbody>
              {ourBill.map(([item, cost]) => (
                <tr
                  key={item}
                  className="border-b border-white/5 text-slate-300"
                >
                  <td className="py-2.5 pr-4 text-left">{item}</td>
                  <td
                    className={`py-2.5 text-right ${
                      cost === '$0.00' || cost === 'included'
                        ? 'text-[#2DD4BF]'
                        : ''
                    }`}
                  >
                    {cost}
                  </td>
                </tr>
              ))}
              <tr className="font-semibold text-white">
                <td className="pr-4 pt-3 text-left">Total</td>
                <td className="pt-3 text-right">≈ $9.30</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mx-auto mt-8 max-w-3xl">
          <Verdict>
            <strong className="font-semibold text-white">
              $9 a month, measured, on the pricier platform.
            </strong>{' '}
            This is not a theory about what a routine backend ought to cost. It
            is a receipt.
          </Verdict>
        </div>
      </section>

      {/* ------------------------------------------------------ step 7 --- */}
      <section className="border-t border-white/5 px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <StepHeading n="07" title="The line that does not move" />
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Here is the part that actually settles it, and it is not any single
            number. Feed more students into this architecture and watch what the
            server bill does.
          </p>
        </div>

        <figure className="mx-auto mt-10 max-w-4xl rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <figcaption>
            <div className="font-semibold text-white">
              Annual server cost as the user base grows twentyfold
            </div>
            <div className="mt-1 text-sm text-slate-400">
              The horizontal axis runs from 5,000 to 100,000 users. Neither line
              responds.
            </div>
          </figcaption>

          <div className="mt-6 overflow-x-auto">
            <svg viewBox="0 0 720 300" className="h-auto w-full min-w-[560px]">
              <title>
                Annual server cost against user count from 5,000 to 100,000
                users. Our measured AWS bill stays flat at $108 a year. The
                cheapest VPS tier stays flat at $60 a year. Neither line changes
                as users increase.
              </title>

              {[20, 93.3, 166.7].map((y) => (
                <line
                  key={y}
                  x1={70}
                  y1={y}
                  x2={690}
                  y2={y}
                  stroke="#ffffff"
                  strokeOpacity={0.08}
                />
              ))}
              <line
                x1={70}
                y1={240}
                x2={690}
                y2={240}
                stroke="#ffffff"
                strokeOpacity={0.18}
              />

              {[
                [24, '$150'],
                [97.3, '$100'],
                [170.7, '$50'],
                [244, '$0'],
              ].map(([y, t]) => (
                <text
                  key={t as string}
                  x={60}
                  y={y as number}
                  textAnchor="end"
                  fill={INK_DIM}
                  fontSize={10}
                  fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
                >
                  {t}
                </text>
              ))}

              <path
                d="M100,240 L100,81.6 L660,81.6 L660,240 Z"
                fill={TEAL}
                fillOpacity={0.14}
              />
              <path
                d="M100,81.6 L660,81.6"
                fill="none"
                stroke={TEAL}
                strokeWidth={2}
                strokeLinecap="round"
              />
              <path
                d="M100,152 L660,152"
                fill="none"
                stroke={AMBER}
                strokeWidth={2}
                strokeLinecap="round"
                strokeDasharray="6 4"
              />

              {[100, 240, 380, 520, 660].map((x) => (
                <circle
                  key={x}
                  cx={x}
                  cy={81.6}
                  r={4.5}
                  fill={TEAL}
                  stroke="#0B1416"
                  strokeWidth={2}
                />
              ))}
              {[100, 660].map((x) => (
                <circle
                  key={x}
                  cx={x}
                  cy={152}
                  r={4.5}
                  fill={AMBER}
                  stroke="#0B1416"
                  strokeWidth={2}
                />
              ))}

              <text
                x={112}
                y={72}
                fill={TEAL}
                fontSize={11}
                fontWeight={600}
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              >
                $108 / yr — our measured AWS bill
              </text>
              <text
                x={112}
                y={143}
                fill={AMBER}
                fontSize={11}
                fontWeight={600}
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              >
                $60 / yr — cheapest VPS tier
              </text>

              {[
                [100, '5K'],
                [240, '10K'],
                [380, '25K'],
                [520, '50K'],
                [660, '100K'],
              ].map(([x, t]) => (
                <text
                  key={t as string}
                  x={x as number}
                  y={258}
                  textAnchor="middle"
                  fill={INK_DIM}
                  fontSize={10}
                  fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
                >
                  {t}
                </text>
              ))}
              <text
                x={380}
                y={280}
                textAnchor="middle"
                fill={INK_DIM}
                fontSize={10}
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              >
                users
              </text>
            </svg>
          </div>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            <LegendSwatch color={TEAL}>Our measured AWS bill</LegendSwatch>
            <LegendSwatch color={AMBER}>Cheapest VPS tier</LegendSwatch>
          </div>

          <p className="mt-5 border-t border-white/10 pt-4 text-sm leading-relaxed text-slate-400">
            One additional student adds about <Mono>60 KB</Mono> per version —
            under <Mono>1.5 MB</Mono> a year. Ten thousand more add roughly{' '}
            <Mono>9 GB</Mono> a year, still comfortably inside the base
            allowance. The cost of the twenty-thousandth user is, for practical
            purposes, zero.
          </p>
        </figure>

        <div className="mx-auto mt-10 max-w-3xl">
          <p className="text-lg leading-relaxed text-slate-300">
            That is the whole argument in one picture.{' '}
            <strong className="font-semibold text-white">
              Cost is flat. Revenue would be per-user.
            </strong>{' '}
            Whatever a subscription recovers, it is not this line — because this
            line does not move.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------ the stat --- */}
      <section className="border-t border-white/5 px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-12 lg:grid-cols-[auto,1fr]">
            <div className="text-center lg:text-left">
              <div className="text-7xl font-bold tracking-tight text-[#2DD4BF] sm:text-8xl">
                ৳0.14
              </div>
              <p className="mt-2 text-lg font-medium text-white">
                per student, per year
              </p>
              <p className="mt-1 text-sm text-slate-400">fourteen poisha</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                The number to remember
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                Divide the server bill by the people it serves. At the generous{' '}
                <Mono>$60</Mono> a year, across the top-of-bucket{' '}
                <Mono>50,000</Mono> users, that is <Mono>$0.0012</Mono> per user
                per year — about fourteen poisha.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                Even at the doubled <Mono>$120</Mono> a year it is{' '}
                <Mono>0.29 BDT</Mono>: under a third of one taka. Running the
                backend for one student for an entire year costs a small
                fraction of a single cup of tea.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-500">
                Converted at roughly <Mono>120 BDT</Mono> to the dollar. Adjust
                the rate and the conclusion does not budge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- rebuttals --- */}
      <section className="border-t border-white/5 px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Point by point
          </h2>
          <p className="mt-3 text-slate-400">
            These are the responses this analysis gets, and what the
            measurements say to each.
          </p>

          <div className="mt-10 space-y-4">
            {rebuttals.map((r) => (
              <div
                key={r.q}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="font-semibold text-[#E8935F]">{r.q}</div>
                <p className="mt-2 leading-relaxed text-slate-300">{r.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- limits --- */}
      <section className="border-t border-white/5 px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What this does not show
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-slate-400">
            An analysis that only argues one direction is a sales pitch. So here
            is the boundary of the claim, stated as plainly as the claim itself.
          </p>

          <ol className="mt-10 space-y-6">
            {limits.map((l, i) => (
              <li key={l.t} className="flex gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/20 font-mono text-xs text-slate-400">
                  {i + 1}
                </span>
                <p className="leading-relaxed text-slate-300">
                  <strong className="font-semibold text-white">{l.t}</strong>{' '}
                  {l.b}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ------------------------------------------------------- kicker --- */}
      <section className="border-t border-white/5 px-5 py-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-t-[3px] border-white/10 border-t-[#14B8A6] bg-white/[0.03] p-8 sm:p-10">
          <p className="text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl">
            The server bill does not explain the pricing.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            That is the only claim being made here, and it is the one the
            measurements support. If the real reason is somebody’s time, that is
            a defensible thing to say and it deserves a straight answer rather
            than a number that does not hold up. But “servers cost money” is a
            checkable statement. We checked it. It comes to about five dollars a
            month.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/open-routine#download"
              className="rounded-xl bg-[#14B8A6] px-6 py-3.5 font-semibold text-[#06231F] transition hover:bg-[#2DD4BF]"
            >
              Download Open Routine
            </Link>
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-slate-100 transition hover:bg-white/5"
            >
              Read the source
            </a>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- colophon --- */}
      <section className="border-t border-white/5 px-5 py-16">
        <div className="mx-auto max-w-3xl space-y-5 font-mono text-xs leading-relaxed text-slate-500">
          <p>
            <span className="font-semibold text-slate-300">Method.</span>{' '}
            Payload figures are measured with <Mono>gzip -9</Mono> on files
            retrieved from public, unauthenticated endpoints on{' '}
            <Mono>2026-08-29</Mono>, plus a precache reconstruction built from a
            documented client schema and our own equivalent dataset. Install
            counts are read from a live Play Store listing. The control bill is
            our own AWS account for the Open Routine backend.
          </p>
          <p>
            <span className="font-semibold text-slate-300">Ethics.</span> Based
            on publicly available data and normal client behaviour only. No
            authentication was bypassed, no security control circumvented, no
            private data accessed, and no payment or state-changing request was
            ever issued. No other service is named here, and no subscription or
            payment endpoint was ever contacted.
          </p>
          <p>
            <span className="font-semibold text-slate-300">Reproduce it.</span>{' '}
            Every input is public and every step is arithmetic. If a number here
            is wrong, it is wrong in a way you can demonstrate — which is the
            whole reason to publish it this way.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------- footer --- */}
      <footer className="border-t border-white/10 px-5 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/images/open-routine/icon.png"
                  alt=""
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <span className="font-semibold">Open Routine</span>
              </div>
              <p className="mt-3 max-w-sm text-sm text-slate-400">
                A free, open-source class routine app for Daffodil International
                University. Built by{' '}
                <Link
                  href="/"
                  className="text-slate-200 underline underline-offset-2"
                >
                  BitStream
                </Link>
                .
              </p>
            </div>

            <div className="flex gap-12 text-sm">
              <div>
                <h3 className="font-semibold text-white">App</h3>
                <ul className="mt-3 space-y-2 text-slate-400">
                  <li>
                    <Link
                      href="/open-routine#download"
                      className="hover:text-white"
                    >
                      Download
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/open-routine#features"
                      className="hover:text-white"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/open-routine#faq" className="hover:text-white">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white">Project</h3>
                <ul className="mt-3 space-y-2 text-slate-400">
                  <li>
                    <a
                      href={GITHUB}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/open-routine/cost"
                      className="hover:text-white"
                    >
                      What it costs to run
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/open-routine/system"
                      className="hover:text-white"
                    >
                      How it is maintained
                    </Link>
                  </li>
                  <li>
                    <a
                      href={`${API}/docs`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      API
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mt-10 border-t border-white/5 pt-6 text-xs leading-relaxed text-slate-500">
            Open Routine is not affiliated with or endorsed by Daffodil
            International University. Routine data is taken from the
            department’s published class routine; where the two differ, the
            official routine is the authority.
          </p>
        </div>
      </footer>
    </div>
  );
}
