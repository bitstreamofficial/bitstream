/**
 * Shared long-form pieces for the Open Routine analysis pages.
 *
 * `_components` is a private folder: Next.js does not route it.
 */

/* Chart and diagram marks. Validated for contrast and colour-vision separation
   against the #0B1416 page ground; deliberately a half-step darker than the
   brand #14B8A6, which sits above the lightness band for data marks. UI accents
   keep the brand colours. */
export const TEAL = '#14A896';
export const AMBER = '#DB6E33';

export const INK_DIM = '#94a3b8';
export const INK = '#cbd5e1';

/** Numbered heading. The numbers are a real derivation chain, not decoration —
 *  each step consumes the one before it. */
export function StepHeading({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-mono text-sm font-semibold tracking-[0.1em] text-[#2DD4BF]">
        {n}
      </span>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}

/** A conclusion that follows from a measurement. */
export function Verdict({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8 rounded-r-xl border-l-[3px] border-[#14B8A6] bg-[#14B8A6]/10 px-6 py-5 text-lg leading-relaxed text-slate-200">
      {children}
    </div>
  );
}

/** A claim being examined, or a concession to one. */
export function Claim({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-r-xl border-l-[3px] border-[#DB6E33] bg-[#DB6E33]/10 px-6 py-5">
      <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#E8935F]">
        {label}
      </div>
      <div className="mt-2 text-lg leading-relaxed text-slate-200">
        {children}
      </div>
    </div>
  );
}

/** Anything measured, or computed from a measurement. Kept visually distinct
 *  from argument on purpose. */
export function Mono({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[0.88em] font-semibold tabular-nums text-[#2DD4BF]">
      {children}
    </span>
  );
}

export function LegendSwatch({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs text-slate-300">
      <i
        className="h-3 w-3 shrink-0 rounded-sm"
        style={{ background: color }}
        aria-hidden
      />
      {children}
    </span>
  );
}

export function Figure({
  title,
  sub,
  note,
  children,
}: {
  title: string;
  sub: string;
  note?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <figure className="mx-auto mt-10 max-w-4xl rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <figcaption>
        <div className="font-semibold text-white">{title}</div>
        <div className="mt-1 text-sm text-slate-400">{sub}</div>
      </figcaption>
      {children}
      {note ? (
        <p className="mt-5 border-t border-white/10 pt-4 text-sm leading-relaxed text-slate-400">
          {note}
        </p>
      ) : null}
    </figure>
  );
}
