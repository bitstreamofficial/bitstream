'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const GITHUB = 'https://github.com/mr-shakib/open-routine';
const RELEASE = `${GITHUB}/releases/latest`;
const APK_ARM64 = `${GITHUB}/releases/download/v1.0.0/open-routine-v1.0.0-arm64-v8a.apk`;
const APK_ARM32 = `${GITHUB}/releases/download/v1.0.0/open-routine-v1.0.0-armeabi-v7a.apk`;
const API = 'https://routine.bitstreamhq.com';

const features = [
  {
    title: 'Your week, not everyone’s',
    body: 'Type your batch. Your six days appear, grouped by day and sorted by time, with room and teacher on every class. No paywall in front of any of it.',
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    title: 'Works with no signal',
    body: 'The whole routine is stored on your phone the first time it loads. Basements, lifts, no data left — it still opens.',
    icon: 'M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.286 8.286L21 21',
  },
  {
    title: 'Find a free room',
    body: 'Pick a time slot and see which rooms are empty on every day of the week. No more wandering the Knowledge Tower.',
    icon: 'M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9',
  },
  {
    title: 'Any teacher’s week',
    body: 'Enter an initial and get their photo, designation, office, and every class they take — plus which sections and rooms.',
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
  },
  {
    title: 'Who is in that room?',
    body: 'Room, day, time — get the class, the section and the teacher. Useful when you are looking for someone.',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  },
  {
    title: 'A nudge before class',
    body: 'Optional reminders twenty minutes before each of your classes, built from the copy already on your phone.',
    icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
  },
];

const freeItems = [
  'Every feature, for everyone',
  'No subscription or monthly fee',
  'No one-time unlock',
  'No free trial that expires',
  'No account, email or phone number',
  'No ads, ever',
];

const shots = [
  { src: '/images/open-routine/student.jpg', label: 'Your schedule' },
  { src: '/images/open-routine/teacher.jpg', label: 'Teacher profile' },
  { src: '/images/open-routine/free-rooms.jpg', label: 'Free rooms' },
  { src: '/images/open-routine/room-search.jpg', label: 'Room search' },
];

const steps = [
  {
    n: '1',
    title: 'Download and install',
    body: 'Grab the APK below. Android may warn about installing outside Play — that is expected for a direct download, and you can allow it for your browser once.',
  },
  {
    n: '2',
    title: 'Open it once on Wi-Fi',
    body: 'It downloads the current routine — about half a megabyte — and stores it. That is the only time it needs a connection.',
  },
  {
    n: '3',
    title: 'Type your batch',
    body: 'Something like 66_B. It is remembered, so the app opens straight onto your own week from then on.',
  },
];

const faqs = [
  {
    q: 'Is it really free, or free for now?',
    a: 'Really free, permanently. There is no subscription, no unlock, no trial and no ads. It is also open source under the MIT licence, so if it ever did change, anyone could take the last free version and keep running it. That is the part a promise alone cannot give you.',
  },
  {
    q: 'Then how is it paid for?',
    a: 'It costs a few dollars a month to run one small server, covered by BitStream. There is nothing to monetise here — the routine is public information and the app holds no data worth selling.',
  },
  {
    q: 'Where does the routine come from?',
    a: 'The official CSE class routine PDF published by the department. It is parsed into structured data — currently Summer 2026 version 5, 2,002 classes across 72 rooms.',
  },
  {
    q: 'What happens when the department publishes a new version?',
    a: 'The new PDF is loaded and the app picks it up on its next check. Your device updates itself; there is nothing to reinstall.',
  },
  {
    q: 'Does it collect anything about me?',
    a: 'No. There is no account, no analytics and no tracking. Your batch is stored on your own phone and never sent anywhere. The app only ever asks the server for the routine, which is the same for everyone.',
  },
  {
    q: 'Why is it not on the Play Store?',
    a: 'It may be later. For now it is a direct download, which is why the source is public — you can read exactly what you are installing, or build it yourself.',
  },
  {
    q: 'Is the routine here official?',
    a: 'The data comes from the department’s published PDF, but this app is not affiliated with or endorsed by Daffodil International University. If something looks wrong, the official routine is the authority.',
  },
];

export default function OpenRoutinePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1416] text-slate-100">
      {/* ---------------------------------------------------------- nav --- */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
          scrolled
            ? 'border-b border-white/10 bg-[#0B1416]/90 backdrop-blur'
            : 'bg-transparent'
        }`}
      >
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

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm text-slate-300 hover:text-white"
            >
              Features
            </a>
            <a
              href="#screens"
              className="text-sm text-slate-300 hover:text-white"
            >
              Screens
            </a>
            <a href="#faq" className="text-sm text-slate-300 hover:text-white">
              FAQ
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-300 hover:text-white"
            >
              GitHub
            </a>
            <a
              href="#download"
              className="rounded-lg bg-[#14B8A6] px-4 py-2 text-sm font-semibold text-[#06231F] transition hover:bg-[#2DD4BF]"
            >
              Download
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-1 text-slate-200 md:hidden"
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeWidth={2}
                d={
                  menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 7h16M4 12h16M4 17h16'
                }
              />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0B1416] px-5 py-4 md:hidden">
            {[
              ['Features', '#features'],
              ['Screens', '#screens'],
              ['FAQ', '#faq'],
              ['Download', '#download'],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 text-slate-200"
              >
                {label}
              </a>
            ))}
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2.5 text-slate-200"
            >
              GitHub
            </a>
          </div>
        )}
      </nav>

      {/* -------------------------------------------------------- hero --- */}
      <header className="relative overflow-hidden px-5 pb-20 pt-32 sm:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#0E5C60] opacity-30 blur-[120px]"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2DD4BF]" />
              Free forever · No account · Open source
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Checking your routine
              <br />
              <span className="text-[#2DD4BF]">shouldn’t cost money.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              No subscription. No unlock fee. No trial that expires the week
              before finals. Type your batch, get your week — and it keeps
              working when your data runs out.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#download"
                className="rounded-xl bg-[#14B8A6] px-6 py-3.5 font-semibold text-[#06231F] transition hover:bg-[#2DD4BF]"
              >
                Download for Android
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-slate-100 transition hover:bg-white/5"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .5a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2.2c-3.34.72-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.23 0 4.63-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0012 .5z" />
                </svg>
                View source
              </a>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
              {[
                ['৳0', 'forever'],
                ['2,002', 'classes'],
                ['219', 'teachers'],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="text-2xl font-bold text-[#2DD4BF]">{v}</dt>
                  <dd className="text-sm text-slate-400">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-b from-[#14B8A6]/20 to-transparent blur-2xl"
              />
              <div className="relative w-[270px] overflow-hidden rounded-[2rem] border-4 border-slate-800 bg-slate-900 shadow-2xl sm:w-[300px]">
                <Image
                  src="/images/open-routine/student.jpg"
                  alt="A student's weekly schedule in Open Routine"
                  width={1080}
                  height={2178}
                  className="h-auto w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ---------------------------------------------------- features --- */}
      <section
        id="features"
        className="scroll-mt-20 border-t border-white/5 px-5 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything a student actually needs
          </h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            Four ways into the same routine, answered from a copy held on your
            own device.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#14B8A6]/40 hover:bg-white/[0.05]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#14B8A6]/15 text-[#2DD4BF]">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={f.icon}
                    />
                  </svg>
                </div>
                <h3 className="mt-5 font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- screens --- */}
      <section
        id="screens"
        className="scroll-mt-20 border-t border-white/5 px-5 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What it looks like
          </h2>
          <p className="mt-3 text-slate-400">
            Real screens, real routine data. Nothing mocked up.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {shots.map((s) => (
              <figure key={s.src}>
                <div className="overflow-hidden rounded-2xl border-2 border-slate-800 bg-slate-900">
                  <Image
                    src={s.src}
                    alt={s.label}
                    width={1080}
                    height={2178}
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="mt-3 text-center text-sm text-slate-400">
                  {s.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- pricing --- */}
      <section className="border-t border-white/5 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-12 lg:grid-cols-[auto,1fr]">
            <div className="text-center lg:text-left">
              <div className="text-7xl font-bold tracking-tight text-[#2DD4BF] sm:text-8xl">
                ৳0
              </div>
              <p className="mt-2 text-lg font-medium text-white">forever</p>
              <p className="mt-1 text-sm text-slate-400">not a launch price</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                A timetable is not a premium feature
              </h2>
              <p className="mt-4 leading-relaxed text-slate-400">
                Your class routine is public information your department already
                publishes. Knowing where to be at half past eight should not sit
                behind a payment screen, so here it does not — and because the
                whole thing is open source, it cannot quietly start to later.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {freeItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#2DD4BF]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- download --- */}
      <section
        id="download"
        className="scroll-mt-20 border-t border-white/5 px-5 py-20"
      >
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-[#14B8A6]/25 bg-gradient-to-b from-[#0E5C60]/25 to-transparent p-8 sm:p-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Get it on your phone
            </h2>
            <p className="mt-3 text-slate-300">
              Android 6.0 or newer. About 20&nbsp;MB.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={APK_ARM64}
                className="inline-flex items-center gap-2 rounded-xl bg-[#14B8A6] px-6 py-3.5 font-semibold text-[#06231F] transition hover:bg-[#2DD4BF]"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download APK
              </a>
              <a
                href={RELEASE}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-slate-100 transition hover:bg-white/5"
              >
                All releases
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-400">
              That file suits almost every phone made in the last decade. If it
              refuses to install, use the{' '}
              <a
                href={APK_ARM32}
                className="text-[#2DD4BF] underline underline-offset-2"
              >
                32-bit build
              </a>{' '}
              instead.
            </p>

            <ol className="mt-10 space-y-6">
              {steps.map((s) => (
                <li key={s.n} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#14B8A6]/15 text-sm font-bold text-[#2DD4BF]">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- privacy --- */}
      <section className="border-t border-white/5 px-5 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              It asks nothing of you
            </h2>
            <p className="mt-4 leading-relaxed text-slate-400">
              No sign-up, no email, no phone number. No analytics, no tracking,
              no ads. Your batch is saved on your own device and never leaves
              it. The only thing the app ever fetches is the routine itself —
              the same routine everybody else gets.
            </p>
            <p className="mt-4 leading-relaxed text-slate-400">
              You do not have to take that on trust. Every line is public, and
              so is the API it talks to.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/5"
              >
                Read the source
              </a>
              <a
                href={`${API}/docs`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/5"
              >
                Browse the API
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Built with
            </h3>
            <dl className="mt-5 space-y-4 text-sm">
              {[
                ['App', 'Flutter, offline-first with a local SQLite copy'],
                ['Backend', 'FastAPI on AWS, HTTPS throughout'],
                ['Routine data', 'Parsed from the department’s published PDF'],
                ['Licence', 'MIT — fork it, run your own'],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between gap-6 border-b border-white/5 pb-4 last:border-0 last:pb-0"
                >
                  <dt className="shrink-0 text-slate-400">{k}</dt>
                  <dd className="text-right text-slate-200">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- faq --- */}
      <section
        id="faq"
        className="scroll-mt-20 border-t border-white/5 px-5 py-20"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Questions
          </h2>
          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {faqs.map((f, i) => (
              <div key={f.q}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-medium text-white">{f.q}</span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFaq === i && (
                  <p className="pb-5 pr-8 text-sm leading-relaxed text-slate-400">
                    {f.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- footer --- */}
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
                    <a href="#download" className="hover:text-white">
                      Download
                    </a>
                  </li>
                  <li>
                    <a href="#features" className="hover:text-white">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="hover:text-white">
                      FAQ
                    </a>
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
                    <a
                      href={`${GITHUB}/issues`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                    >
                      Report a problem
                    </a>
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
