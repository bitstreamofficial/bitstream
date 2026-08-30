import type { Metadata } from 'next';
import { Noto_Sans_Bengali } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

import {
  AMBER,
  Claim,
  Figure,
  INK,
  INK_DIM,
  Mono,
  StepHeading,
  TEAL,
  Verdict,
} from '../_components/prose';

/* Scoped to this page: the comment we are answering is in Bangla, and Inter
   carries no Bengali glyphs. */
const bengali = Noto_Sans_Bengali({
  subsets: ['bengali'],
  weight: ['400'],
  display: 'swap',
});

const GITHUB = 'https://github.com/mr-shakib/open-routine';
const API = 'https://routine.bitstreamhq.com';

const DESCRIPTION =
  'Maintenance is the real cost of a routine app, not servers. Here is how ' +
  'Open Routine handles a new routine, a changed PDF layout, more users, and ' +
  'the maintainer walking away.';

export const metadata: Metadata = {
  title: 'Can you actually maintain it?',
  description: DESCRIPTION,
  keywords: [
    'open routine maintenance',
    'DIU routine app updates',
    'routine app scaling',
    'open source routine app',
    'class routine system design',
  ],
  alternates: { canonical: 'https://bitstreamhq.com/open-routine/system' },
  openGraph: {
    type: 'article',
    url: 'https://bitstreamhq.com/open-routine/system',
    title: 'Can you actually maintain it?',
    description: DESCRIPTION,
    siteName: 'BitStream',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Can you actually maintain it?',
    description: DESCRIPTION,
  },
};

const gates = [
  {
    v: '134',
    l: 'backend tests',
    d: 'Run on every push, on three Python versions.',
  },
  {
    v: '78',
    l: 'app tests',
    d: 'Plus static analysis and format checks on the Flutter side.',
  },
  {
    v: '81%',
    l: 'line coverage',
    d: 'Reported on every run, not measured once and forgotten.',
  },
  {
    v: '<1%',
    l: 'unparsed cells',
    d: 'A hard assertion against the real published PDF.',
  },
];

const concessions = [
  'Maintenance is the real cost of an app like this, not servers.',
  'Building something once is easy. Keeping it correct for years is not.',
  'Plenty of student projects are launched, celebrated, and abandoned by the next semester.',
  'Someone who has maintained a free tool for years has earned the benefit of the doubt.',
];

const limits = [
  {
    t: 'We cannot promise to be here forever.',
    b: 'Nobody honestly can. What we can do is make our disappearance survivable, which is a different and more useful promise — and the reason the licence and the deploy scripts are in the repository.',
  },
  {
    t: 'Automation does not mean nobody is needed.',
    b: 'Someone still has to notice a new routine was published and upload it. The system makes that job small and safe; it does not make it zero.',
  },
  {
    t: 'A big enough format change will break the parser.',
    b: 'If the department restructures the document, the tests will fail loudly and someone will have to fix the parser. That is the job. The tests mean it gets caught before students see a wrong routine, not that it never happens.',
  },
  {
    t: 'None of this makes charging wrong.',
    b: 'If someone wants to be paid for their time, that is legitimate and we have said so plainly. Our argument was only ever with the specific claim that servers are the expensive part.',
  },
];

/* ------------------------------------------------------------------ page --- */

export default function OpenRoutineSystemPage() {
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
              href="/open-routine/cost"
              className="hidden text-sm text-slate-300 hover:text-white sm:block"
            >
              What it costs
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
            <span>System analysis</span>
            <span className="text-white/25">/</span>
            <span>Maintenance, scale, and the bus factor</span>
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
            Can you actually maintain it?
          </h1>
          <p className="mt-4 text-xl leading-snug text-slate-400 sm:text-2xl">
            The best criticism we have received, answered with the system rather
            than a promise.
          </p>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
              A comment on the last post
            </div>
            <blockquote
              className={`${bengali.className} mt-4 text-lg leading-loose text-slate-200`}
            >
              ভাই এতো এতো যে অ্যাপ বানাইতেছে, টাকা দেবো কেনো এই ফাপর দিয়ে...এরা
              কি রেগুলার মেইনটেইন করতে পারবে?...রুটিন কিন্তু প্রত্যেক উইকে চেঞ্জ
              হয়। একটা অ্যাপ বানানো ইজি, রেগুলার মেইনটেইন করা এতোটাও ইজি
              না...সবাই অ্যাপ বানাই ফেলে কেউ সিস্টেম লেভেল চিন্তা করে না..ইউজার
              বাড়লে কি হবে অ্যাপের...
            </blockquote>
            <p className="mt-5 border-t border-white/10 pt-4 text-sm leading-relaxed text-slate-400">
              Roughly: everyone builds an app, but can they maintain it? The
              routine changes constantly. Building is easy, maintaining is not.
              Nobody thinks at the system level — what happens to the app when
              the users grow?
            </p>
          </div>

          <p className="mt-8 text-lg leading-relaxed text-slate-300">
            This is a fair question, and the last page did not answer it. That
            one was about{' '}
            <Link
              href="/open-routine/cost"
              className="text-[#2DD4BF] underline underline-offset-2"
            >
              server cost
            </Link>
            , which is the claim we were disputing. This one is about the thing
            that actually costs something.
          </p>
        </div>
      </header>

      {/* ------------------------------------------------ the concession --- */}
      <section className="border-t border-white/5 px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything in that comment that is right
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            We want to be precise about this before answering, because most of
            it is correct and pretending otherwise would be the same cheap move
            we complained about.
          </p>

          <ul className="mt-8 space-y-4">
            {concessions.map((c) => (
              <li key={c} className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 shrink-0 text-[#E8935F]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-lg leading-relaxed text-slate-300">
                  {c}
                </span>
              </li>
            ))}
          </ul>

          <Claim label="So here is the real question">
            Not “are servers expensive” — they are not, and we showed the
            invoice. The real question is whether the <em>work</em> of keeping
            this correct is small enough that nobody needs to be paid to do it,
            and whether it survives us losing interest.
          </Claim>

          <p className="mt-8 text-lg leading-relaxed text-slate-300">
            That is a system design question, so the answer is a system, not a
            promise. Four things have to hold: publishing a new routine has to
            be cheap, the parser has to fail loudly rather than quietly, more
            users must not mean more work, and none of it can depend on us
            staying interested.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------ step 1 --- */}
      <section className="border-t border-white/5 px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <StepHeading n="01" title="What a new routine actually costs us" />
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-300">
            <p>
              Take the strongest version of the claim — that the routine changes
              every week. It does not change quite that often, but it does not
              matter, because the cost of an update does not depend on how often
              it happens.
            </p>
            <p>
              Publishing a new routine is{' '}
              <strong className="font-semibold text-white">
                uploading the PDF
              </strong>
              . Not transcribing it, not re-scraping a website, not editing a
              spreadsheet. The department publishes a document; it goes into the
              admin console; the pipeline does the rest.
            </p>
            <p>
              Even the version number is read out of the document’s own header,
              so there is nothing for an operator to retype or mistype.
            </p>
          </div>
        </div>

        <Figure
          title="How a published PDF becomes the routine on your phone"
          sub="Importing and publishing are separate steps, which is the part that matters."
          note={
            <>
              The revision is written to a <em>new</em> row and only becomes
              active once every cell has been parsed and stored, so a phone
              never sees a half-imported routine. A cell the parser cannot read
              is recorded and reported rather than silently dropped — silent
              drops are how a routine quietly ends up missing classes.
              Publishing a routine with zero classes in it is refused outright.
            </>
          }
        >
          <div className="mt-6 overflow-x-auto">
            <svg
              viewBox="0 0 920 300"
              className="h-auto w-full min-w-[640px]"
              role="img"
              aria-label="Flow diagram. A published PDF is read, its cells parsed and normalised, and written to a staged revision that is not yet live. An operator reviews the import report. If it looks right the revision is activated in an atomic swap and becomes live for every phone. If cells are missing it is held back and nothing ships, so a bad parse never reaches a student."
            >
              <defs>
                <marker
                  id="sysArrow"
                  viewBox="0 0 10 10"
                  refX="9"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill={INK_DIM} />
                </marker>
                <marker
                  id="sysArrowTeal"
                  viewBox="0 0 10 10"
                  refX="9"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill={TEAL} />
                </marker>
                <marker
                  id="sysArrowAmber"
                  viewBox="0 0 10 10"
                  refX="9"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill={AMBER} />
                </marker>
              </defs>

              {/* the import pipeline */}
              {[
                { x: 20, label: 'routine.pdf' },
                { x: 200, label: 'read tables' },
                { x: 380, label: 'parse cells' },
                { x: 560, label: 'normalise' },
              ].map((b) => (
                <g key={b.label}>
                  <rect
                    x={b.x}
                    y={30}
                    width={140}
                    height={46}
                    rx={8}
                    fill="none"
                    stroke={INK_DIM}
                    strokeOpacity={0.5}
                  />
                  <text
                    x={b.x + 70}
                    y={58}
                    textAnchor="middle"
                    fill={INK}
                    fontSize={12}
                    fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
                  >
                    {b.label}
                  </text>
                </g>
              ))}

              {/* staged revision — dashed, because it is not live yet */}
              <rect
                x={740}
                y={30}
                width={150}
                height={46}
                rx={8}
                fill="none"
                stroke={INK_DIM}
                strokeOpacity={0.7}
                strokeDasharray="5 4"
              />
              <text
                x={815}
                y={52}
                textAnchor="middle"
                fill={INK}
                fontSize={12}
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              >
                staged
              </text>
              <text
                x={815}
                y={67}
                textAnchor="middle"
                fill={INK_DIM}
                fontSize={10}
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              >
                not live
              </text>

              {[160, 340, 520, 700].map((x) => (
                <line
                  key={x}
                  x1={x}
                  y1={53}
                  x2={x + 32}
                  y2={53}
                  stroke={INK_DIM}
                  strokeWidth={1.5}
                  markerEnd="url(#sysArrow)"
                />
              ))}

              {/* route down and back to the review gate */}
              <path
                d="M815,76 L815,100 L470,100 L470,116"
                fill="none"
                stroke={INK_DIM}
                strokeWidth={1.5}
                markerEnd="url(#sysArrow)"
              />

              <rect
                x={350}
                y={120}
                width={240}
                height={44}
                rx={8}
                fill="none"
                stroke={INK_DIM}
                strokeOpacity={0.7}
              />
              <text
                x={470}
                y={147}
                textAnchor="middle"
                fill={INK}
                fontSize={12}
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              >
                review the import report
              </text>

              {/* the two outcomes */}
              <path
                d="M420,164 L420,190 L290,190 L290,214"
                fill="none"
                stroke={TEAL}
                strokeWidth={1.5}
                markerEnd="url(#sysArrowTeal)"
              />
              <text
                x={300}
                y={184}
                textAnchor="middle"
                fill={TEAL}
                fontSize={11}
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              >
                looks right
              </text>

              <path
                d="M520,164 L520,190 L660,190 L660,214"
                fill="none"
                stroke={AMBER}
                strokeWidth={1.5}
                markerEnd="url(#sysArrowAmber)"
              />
              <text
                x={655}
                y={184}
                textAnchor="middle"
                fill={AMBER}
                fontSize={11}
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              >
                cells missing
              </text>

              <rect
                x={170}
                y={218}
                width={240}
                height={52}
                rx={8}
                fill={TEAL}
                fillOpacity={0.12}
                stroke={TEAL}
              />
              <text
                x={290}
                y={241}
                textAnchor="middle"
                fill={TEAL}
                fontSize={12}
                fontWeight={600}
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              >
                activated — atomic swap
              </text>
              <text
                x={290}
                y={258}
                textAnchor="middle"
                fill={INK_DIM}
                fontSize={10}
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              >
                live for every phone
              </text>

              <rect
                x={540}
                y={218}
                width={240}
                height={52}
                rx={8}
                fill={AMBER}
                fillOpacity={0.12}
                stroke={AMBER}
              />
              <text
                x={660}
                y={241}
                textAnchor="middle"
                fill={AMBER}
                fontSize={12}
                fontWeight={600}
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              >
                held back
              </text>
              <text
                x={660}
                y={258}
                textAnchor="middle"
                fill={INK_DIM}
                fontSize={10}
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              >
                students keep the old one
              </text>
            </svg>
          </div>
        </Figure>

        <div className="mx-auto mt-10 max-w-3xl">
          <Verdict>
            A bad import is worse than no new routine at all, so the system is
            built so a bad import{' '}
            <strong className="font-semibold text-white">
              cannot reach a student by accident
            </strong>
            . It has to be published, deliberately, after the report is read.
          </Verdict>
        </div>
      </section>

      {/* ------------------------------------------------------ step 2 --- */}
      <section className="border-t border-white/5 px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <StepHeading n="02" title="The thing that actually breaks" />
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-300">
            <p>
              The commenter is right that maintenance is where these projects
              die — but it is worth being specific about <em>how</em> they die.
              It is almost never the server. It is that the university changes
              the document, the parser quietly reads it wrong, and nobody
              notices until a student misses a class.
            </p>
            <p>
              That is the failure we designed against, so it is the failure we
              test for. The test suite runs the parser against{' '}
              <strong className="font-semibold text-white">
                the real published PDF
              </strong>
              , not a convenient fixture, and asserts things that only hold if
              the document still looks the way we think it does.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
            <div className="divide-y divide-white/10">
              {[
                {
                  a: 'More than 1,000 cells parse out of the document',
                  b: 'A layout change that silently halves the import fails the build.',
                },
                {
                  a: 'Fewer than 1% of cells are unreadable',
                  b: 'Published documents carry a few typos. A wave of failures means drift.',
                },
                {
                  a: 'Every class lands on the known time lattice',
                  b: 'A new or moved time slot cannot pass unnoticed.',
                },
                {
                  a: 'Room names carry no table-extraction artifacts',
                  b: 'Stray newlines in room keys are a real bug we found in the wild.',
                },
                {
                  a: 'Labs are still distinguishable from theory rooms',
                  b: 'The room-type signal survives a format change.',
                },
              ].map((r) => (
                <div
                  key={r.a}
                  className="flex flex-col gap-1 bg-white/[0.03] px-6 py-4 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <div className="font-mono text-sm text-[#2DD4BF] sm:w-1/2 sm:shrink-0">
                    {r.a}
                  </div>
                  <div className="text-sm leading-relaxed text-slate-400">
                    {r.b}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 text-lg leading-relaxed text-slate-300">
            These run on every push, across three Python versions, alongside
            linting, formatting and type checking. The Flutter app has its own
            suite and its own analysis gate. None of it is optional — a failing
            check blocks the change.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 px-0 sm:grid-cols-2 lg:grid-cols-4">
          {gates.map((g) => (
            <div
              key={g.l}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="text-4xl font-bold tabular-nums tracking-tight text-[#2DD4BF]">
                {g.v}
              </div>
              <div className="mt-1 font-medium text-white">{g.l}</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {g.d}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <Verdict>
            This is what “thinking at the system level” looks like in practice
            for a routine app. Not a bigger server —{' '}
            <strong className="font-semibold text-white">
              a parser that tells you the moment it stops understanding the
              document.
            </strong>
          </Verdict>
        </div>
      </section>

      {/* ------------------------------------------------------ step 3 --- */}
      <section className="border-t border-white/5 px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <StepHeading n="03" title="What happens when the users grow" />
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-300">
            <p>
              This was the sharpest part of the comment, and it has a specific
              answer. In most apps, more users means more work for the server,
              because every screen a user opens is a request. That is the
              architecture the question assumes.
            </p>
            <p>
              It is not this one. Open Routine answers{' '}
              <strong className="font-semibold text-white">
                every query on the phone
              </strong>
              , from a copy of the routine in a local database. Opening the app,
              checking your week, searching a room, looking up a teacher — none
              of that touches the network at all.
            </p>
          </div>
        </div>

        <Figure
          title="What one phone asks the server for"
          sub="Reads never cross the boundary. Only a version check does."
          note={
            <>
              The phone compares the stored version against the server’s and
              downloads a new snapshot <em>only</em> when they differ. If the
              network is gone entirely, that is a normal state rather than an
              error: the stored routine is still authoritative and the app opens
              as usual. The faculty directory is treated as a nicety — if it
              fails to refresh, the sync still succeeds.
            </>
          }
        >
          <div className="mt-6 overflow-x-auto">
            <svg
              viewBox="0 0 860 290"
              className="h-auto w-full min-w-[600px]"
              role="img"
              aria-label="Diagram. Inside the phone, a local database holds 2,002 classes and answers every query with no network. Crossing to the server, the only regular traffic is a small version check of roughly 200 bytes. A 53 KB snapshot is downloaded back only when the routine version has changed."
            >
              <defs>
                <marker
                  id="netArrow"
                  viewBox="0 0 10 10"
                  refX="9"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill={INK_DIM} />
                </marker>
                <marker
                  id="netArrowTeal"
                  viewBox="0 0 10 10"
                  refX="9"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill={TEAL} />
                </marker>
              </defs>

              {/* phone boundary */}
              <rect
                x={20}
                y={40}
                width={360}
                height={215}
                rx={14}
                fill="none"
                stroke={INK_DIM}
                strokeOpacity={0.45}
                strokeDasharray="6 5"
              />
              <text
                x={40}
                y={64}
                fill={INK_DIM}
                fontSize={11}
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              >
                on the phone
              </text>

              <rect
                x={50}
                y={82}
                width={300}
                height={48}
                rx={8}
                fill={TEAL}
                fillOpacity={0.12}
                stroke={TEAL}
              />
              <text
                x={200}
                y={104}
                textAnchor="middle"
                fill={TEAL}
                fontSize={12}
                fontWeight={600}
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              >
                local database
              </text>
              <text
                x={200}
                y={120}
                textAnchor="middle"
                fill={INK_DIM}
                fontSize={10}
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              >
                2,002 classes · 72 rooms
              </text>

              <path
                d="M200,130 L200,172"
                fill="none"
                stroke={TEAL}
                strokeWidth={1.5}
                markerEnd="url(#netArrowTeal)"
              />
              <text
                x={212}
                y={156}
                fill={INK_DIM}
                fontSize={10}
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              >
                no network
              </text>

              <rect
                x={50}
                y={176}
                width={300}
                height={52}
                rx={8}
                fill="none"
                stroke={INK_DIM}
                strokeOpacity={0.5}
              />
              <text
                x={200}
                y={198}
                textAnchor="middle"
                fill={INK}
                fontSize={12}
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              >
                your week · free rooms
              </text>
              <text
                x={200}
                y={216}
                textAnchor="middle"
                fill={INK}
                fontSize={12}
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              >
                teacher · room search
              </text>

              {/* server boundary */}
              <rect
                x={580}
                y={40}
                width={258}
                height={215}
                rx={14}
                fill="none"
                stroke={INK_DIM}
                strokeOpacity={0.45}
                strokeDasharray="6 5"
              />
              <text
                x={600}
                y={64}
                fill={INK_DIM}
                fontSize={11}
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              >
                the server
              </text>

              <rect
                x={610}
                y={120}
                width={200}
                height={52}
                rx={8}
                fill="none"
                stroke={INK_DIM}
                strokeOpacity={0.5}
              />
              <text
                x={710}
                y={142}
                textAnchor="middle"
                fill={INK}
                fontSize={12}
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              >
                active revision
              </text>
              <text
                x={710}
                y={160}
                textAnchor="middle"
                fill={INK_DIM}
                fontSize={10}
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              >
                one row, read-only
              </text>

              {/* the only regular traffic */}
              <path
                d="M380,104 L580,104"
                fill="none"
                stroke={INK_DIM}
                strokeWidth={1.5}
                markerEnd="url(#netArrow)"
              />
              <text
                x={480}
                y={94}
                textAnchor="middle"
                fill={INK}
                fontSize={11}
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              >
                which version?
              </text>
              <text
                x={480}
                y={122}
                textAnchor="middle"
                fill={INK_DIM}
                fontSize={10}
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              >
                ~200 bytes
              </text>

              <path
                d="M580,200 L380,200"
                fill="none"
                stroke={TEAL}
                strokeWidth={1.5}
                strokeDasharray="6 4"
                markerEnd="url(#netArrowTeal)"
              />
              <text
                x={480}
                y={190}
                textAnchor="middle"
                fill={TEAL}
                fontSize={11}
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              >
                snapshot · 53 KB
              </text>
              <text
                x={480}
                y={218}
                textAnchor="middle"
                fill={INK_DIM}
                fontSize={10}
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              >
                only when it changed
              </text>
            </svg>
          </div>
        </Figure>

        <div className="mx-auto mt-10 max-w-3xl">
          <p className="text-lg leading-relaxed text-slate-300">
            So growth adds version checks, not queries. Ten thousand more
            students do not add ten thousand more database reads — they add a
            few hundred kilobytes a day of “has it changed yet”, answered from a
            single read-only row, and one snapshot each on the days the routine
            actually moves.
          </p>
          <Verdict>
            This is why the{' '}
            <Link
              href="/open-routine/cost"
              className="text-[#2DD4BF] underline underline-offset-2"
            >
              cost line stays flat
            </Link>
            . It is not optimism about traffic. It is that the architecture
            moved the work off the server on purpose, and the work is not coming
            back.
          </Verdict>
        </div>
      </section>

      {/* ------------------------------------------------------ step 4 --- */}
      <section className="border-t border-white/5 px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <StepHeading n="04" title="What happens when we quit" />
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-300">
            <p>
              This is the real fear underneath the comment, and it deserves a
              direct answer rather than reassurance. Students have watched
              projects get built, celebrated, and abandoned. Asking whether we
              will still be here next year is completely reasonable.
            </p>
            <p>
              We cannot promise we will be. Nobody honestly can. What we can do
              is make it{' '}
              <strong className="font-semibold text-white">
                not matter as much
              </strong>
              , and that is what being open source is actually for. It is not a
              badge. It is the answer to this specific question.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              {
                t: 'The source is public',
                b: 'Backend, app, parser, tests. Nothing about how this works is hidden, and nobody has to reverse-engineer it to keep it alive.',
              },
              {
                t: 'The licence is MIT',
                b: 'Anyone may fork it, build it, publish it, or run it commercially. We cannot revoke that, and we cannot quietly start charging for the version already released.',
              },
              {
                t: 'The deployment is in the repository',
                b: 'The web server config, the production compose file, the deploy script, the machine bootstrap. Standing up your own copy is not a research project.',
              },
              {
                t: 'The data is not ours',
                b: 'It is the department’s published routine. There is no proprietary dataset to lose access to — only a PDF anyone can download and parse.',
              },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="font-semibold text-white">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {c.b}
                </p>
              </div>
            ))}
          </div>

          <Verdict>
            If we disappear tomorrow, the last released version keeps working on
            every phone that has it, because it was already offline-first. And
            anyone who wants to keep it going can —{' '}
            <strong className="font-semibold text-white">
              without our permission, our servers, or our cooperation.
            </strong>
          </Verdict>

          <p className="mt-8 text-lg leading-relaxed text-slate-300">
            That is the difference a licence makes. A closed app is only as
            durable as the person maintaining it. This one is not, and that is
            the whole reason it was built in the open rather than as another
            free app you have to take on trust.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------- limits --- */}
      <section className="border-t border-white/5 px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What we are not claiming
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-slate-400">
            The same rule as last time: an analysis that only argues one
            direction is a sales pitch.
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
            “Nobody thinks at the system level” is a fair thing to say about
            most student apps. It is the only thing we thought about.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Publishing a routine is an upload. The parser fails loudly when the
            document drifts. More users add version checks, not queries. And if
            we stop, the licence and the deploy scripts mean somebody else can
            pick it up. None of that is a promise about our future enthusiasm —
            it is all in the repository, and you can check every line of it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#14B8A6] px-6 py-3.5 font-semibold text-[#06231F] transition hover:bg-[#2DD4BF]"
            >
              Read the source
            </a>
            <Link
              href="/open-routine/cost"
              className="rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-slate-100 transition hover:bg-white/5"
            >
              What it costs to run
            </Link>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- colophon --- */}
      <section className="border-t border-white/5 px-5 py-16">
        <div className="mx-auto max-w-3xl space-y-5 font-mono text-xs leading-relaxed text-slate-500">
          <p>
            <span className="font-semibold text-slate-300">Verifiable.</span>{' '}
            Every figure on this page comes from the repository and can be
            reproduced there: <Mono>pytest</Mono> for the backend suite and its
            coverage, <Mono>flutter test</Mono> for the app, and{' '}
            <Mono>.github/workflows/</Mono> for what runs on each push. The
            parse-rate and lattice assertions live in the integration tests and
            run against the real published document.
          </p>
          <p>
            <span className="font-semibold text-slate-300">Fairly.</span> This
            page answers a criticism, not a person. The comment it responds to
            makes a good point that we agree with — maintenance, not hosting, is
            what these projects cost. We have quoted it as written rather than
            paraphrasing it into something easier to argue with.
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
