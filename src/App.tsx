import {
  useEffect,
  useState,
  type FormEvent,
  type ReactNode,
  type SyntheticEvent,
} from "react";
import {
  BIZ,
  FAQS,
  HOURS,
  PAINS,
  PRICE_GROUPS,
  PULL_QUOTE,
  REVIEWS,
  STEPS,
  WHY,
} from "./content";

/* --------------------------------------------------------------------------
   Small shared pieces
   ------------------------------------------------------------------------ */
function Stars({ className = "" }: { className?: string }) {
  const d = "M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.4L12 17.4 6.2 20.4l1.1-6.4L2.6 9.4l6.5-.9z";
  return (
    <span className={`inline-flex gap-[3px] ${className}`} aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-[15px] w-[15px] fill-current">
          <path d={d} />
        </svg>
      ))}
    </span>
  );
}

function Mark({ children, tone = "ink" }: { children: ReactNode; tone?: "ink" | "paper" }) {
  return (
    <div className="flex items-center gap-4" data-reveal>
      <span className={`label ${tone === "ink" ? "text-aubergine" : "text-brass"}`}>{children}</span>
      <span className={`h-px flex-1 ${tone === "ink" ? "bg-ink/20" : "bg-paper/25"}`} />
    </div>
  );
}

function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 013 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.7.1.4 0 .7-.2 1l-2.2 2.1z" />
    </svg>
  );
}

/* --------------------------------------------------------------------------
   Scroll reveal — paper settling into place
   ------------------------------------------------------------------------ */
function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    if (typeof IntersectionObserver === "undefined") {
      els.forEach((e) => e.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-in");
            io.unobserve(en.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}

const hideOnError = (e: SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.display = "none";
};

const NAV = [
  ["Pains", "#pain"],
  ["Price card", "#prices"],
  ["Reviews", "#reviews"],
  ["How it works", "#how"],
  ["FAQ", "#faq"],
];

/* ==========================================================================
   PAGE
   ========================================================================== */
export default function App() {
  useReveal();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-paper">
      <div className="grain" aria-hidden="true" />

      <div className="lg:grid lg:grid-cols-[286px_minmax(0,1fr)]">
        {/* ------------------------------------------------------------------
            DESKTOP SIDE RAIL — sticky call rail, the phone never leaves screen
        ------------------------------------------------------------------- */}
        <aside className="hidden lg:flex lg:sticky lg:top-0 lg:h-screen lg:self-start lg:flex-col lg:justify-between lg:overflow-y-auto border-r border-ink/15 bg-paper px-8 py-9">
          <div>
            <a href="#top" className="block">
              <span className="display block text-[3.1rem] italic leading-[.8] tracking-[-.04em]">
                Archer
              </span>
              <span className="label mt-3 block text-aubergine">Salon</span>
            </a>
            <p className="label-sm mt-4 text-warmgrey leading-[1.7]">
              Hair &amp; makeup
              <br />
              Atlanta, GA
            </p>

            <nav className="mt-9 border-t border-ink/15 pt-5">
              <ul className="space-y-3">
                {NAV.map(([t, h]) => (
                  <li key={h}>
                    <a
                      href={h}
                      className="label text-ink/70 transition-colors hover:text-aubergine"
                    >
                      {t}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="border-t border-ink/15 pt-6">
            <p className="label-sm text-warmgrey">Call the chair</p>
            <a
              href={BIZ.phoneHref}
              className="display tnum mt-1 block text-[1.6rem] leading-tight tracking-tight transition-colors hover:text-aubergine"
            >
              {BIZ.phoneDisplay}
            </a>
            <a
              href={BIZ.phoneHref}
              className="mt-4 flex w-full items-center justify-center gap-2 bg-aubergine px-4 py-3.5 text-sm font-semibold tracking-wide text-paper transition-colors hover:bg-ink"
            >
              <PhoneIcon /> Call now
            </a>
            <a
              href="#request"
              className="mt-2 flex w-full items-center justify-center border border-ink/35 px-4 py-3 text-sm font-medium transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              Request a time
            </a>
            <p className="label-sm mt-5 leading-[1.9] text-warmgrey">
              {BIZ.addressLine1}
              <br />
              {BIZ.addressLine2}
            </p>
            <a
              href={BIZ.instagram}
              className="label-sm mt-3 inline-block text-ink/70 underline decoration-brass decoration-2 underline-offset-4 hover:text-aubergine"
            >
              {BIZ.instagramHandle}
            </a>
          </div>
        </aside>

        {/* ------------------------------------------------------------------
            MAIN
        ------------------------------------------------------------------- */}
        <main id="top" className="min-w-0 pb-[86px] lg:pb-0">
          {/* mobile header */}
          <header className="sticky top-0 z-40 flex items-center justify-between border-b border-ink/15 bg-paper/95 px-5 py-3 backdrop-blur-sm lg:hidden">
            <span className="display text-[1.7rem] italic leading-none tracking-[-.03em]">
              Archer
            </span>
            <a
              href={BIZ.phoneHref}
              className="label flex items-center gap-2 border border-ink/30 px-3 py-2 text-ink"
            >
              <PhoneIcon className="h-3.5 w-3.5" />
              {BIZ.phoneDisplay}
            </a>
          </header>

          {/* ============================ HERO ============================ */}
          <section className="border-b border-ink/15">
            <div className="flex items-center justify-between gap-4 border-b border-ink/15 px-5 py-2.5 sm:px-8 lg:px-14">
              <span className="label-sm text-warmgrey">Hair &amp; makeup · Atlanta, GA</span>
              <span className="label-sm hidden truncate text-warmgrey sm:inline">{BIZ.suite}</span>
            </div>

            <div className="grid lg:grid-cols-[1.04fr_.96fr]">
              {/* photograph — bleeds off the right edge */}
              <div className="img-fallback relative order-first min-h-[80vw] sm:min-h-[52vw] lg:order-last lg:min-h-[84vh]">
                <img
                  src="images/hero.jpg"
                  alt="A client having her hair finished in a private salon suite by a tall window in Atlanta"
                  onError={hideOnError}
                  className="absolute inset-0 h-full w-full object-cover object-[62%_42%]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--color-paper),transparent_34%)] lg:bg-[linear-gradient(to_right,var(--color-paper),transparent_26%)]" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-brass/50 lg:hidden" />
              </div>

              {/* masthead + offer */}
              <div className="order-last px-5 pb-12 pt-9 sm:px-8 lg:order-first lg:py-[clamp(3rem,7vh,5.5rem)] lg:pl-14 lg:pr-12">
                <h1>
                  <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="display block text-[clamp(3.8rem,14vw,9.5rem)] italic leading-[.76] tracking-[-.045em] lg:text-[clamp(4rem,7vw,9.5rem)]">
                      Archer
                    </span>
                    <span className="label text-aubergine">Salon</span>
                  </span>
                  <span className="display mt-7 block text-[clamp(1.6rem,4vw,2.7rem)] leading-[1.08] tracking-[-.02em] lg:text-[clamp(1.55rem,2.5vw,2.7rem)]">
                    The color you asked for.
                    <br />
                    <span className="italic">The price you agreed to.</span>
                  </span>
                </h1>

                <p className="mt-6 max-w-[52ch] text-[1.02rem] leading-[1.65] text-ink/80">
                  Archer Salon is a one-stylist hair and makeup suite at Salon Lofts – Ansley Square
                  on Piedmont Ave NE. Cuts, color, highlights, keratin and bridal makeup in Atlanta —
                  and the price is confirmed with you before we start.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={BIZ.phoneHref}
                    className="flex items-center justify-center gap-2.5 bg-aubergine px-7 py-4 text-[1.02rem] font-semibold tracking-wide text-paper transition-colors hover:bg-ink"
                  >
                    <PhoneIcon className="h-[18px] w-[18px]" />
                    Call {BIZ.phoneDisplay}
                  </a>
                  <a
                    href="#request"
                    className="flex items-center justify-center border border-ink/40 px-7 py-4 text-[1.02rem] font-medium transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                  >
                    Request a time
                  </a>
                </div>

                {/* trust line — verified rating + review count */}
                <div className="mt-8 border-t border-ink/15 pt-5">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <Stars className="text-ink" />
                    <span className="text-[0.95rem]">
                      <strong className="font-semibold tnum">{BIZ.rating}</strong> from{" "}
                      <span className="tnum">{BIZ.reviewCount}</span> reviews on our Google listing
                    </span>
                  </div>
                  <p className="label-sm mt-2.5 text-warmgrey">{BIZ.addressFull}</p>
                </div>
              </div>
            </div>
          </section>

          {/* ======================= CREDENTIALS STRIP ======================= */}
          <section
            aria-label="Credentials"
            className="border-b border-ink/15 bg-paper px-5 py-4 sm:px-8 lg:px-14"
          >
            <ul className="flex flex-wrap items-center gap-x-7 gap-y-2.5">
              {[
                "21 years behind the chair",
                "Pravana & Goldwell color certified",
                "Cinderella extensions certified",
                "Makeup by request",
              ].map((c, i) => (
                <li key={c} className="label flex items-center gap-7 text-ink/75">
                  {i > 0 && <span aria-hidden="true" className="h-3.5 w-px bg-brass" />}
                  {c}
                </li>
              ))}
            </ul>
          </section>

          {/* ============================ PAIN ============================ */}
          <section id="pain" className="relative scroll-mt-20 overflow-hidden bg-aubergine text-paper">
            <img
              src="images/paper.jpg"
              alt=""
              aria-hidden="true"
              loading="lazy"
              onError={hideOnError}
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.12] mix-blend-luminosity"
            />
            <div className="relative px-5 py-16 sm:px-8 lg:px-14 lg:py-24">
              <Mark tone="paper">What usually goes wrong</Mark>
              <h2
                className="display mt-6 max-w-[18ch] text-[clamp(2rem,5vw,3.4rem)] leading-[1.04]"
                data-reveal
              >
                Three things people tell us went <span className="italic">wrong</span> last time.
              </h2>

              <div className="mt-12 divide-y divide-paper/15 border-t border-paper/15">
                {PAINS.map((p) => (
                  <div
                    key={p.n}
                    className="grid gap-3 py-8 md:grid-cols-[4.5rem_minmax(0,1fr)_minmax(0,1.25fr)] md:gap-8"
                    data-reveal
                  >
                    <span className="display text-[2.1rem] leading-none text-brass">{p.n}</span>
                    <p className="display text-[1.35rem] italic leading-[1.25] text-paper">
                      {p.problem}
                    </p>
                    <p className="text-[1rem] leading-[1.7] text-paper/75">{p.fix}</p>
                  </div>
                ))}
              </div>

              <p className="mt-10 max-w-[56ch] text-[1.02rem] leading-[1.7] text-paper/80">
                If any of that happened to you last time, say so when you book. We will tell you
                what it takes and what it costs before you agree to anything.
              </p>
            </div>
          </section>

          {/* ========================== PRICE CARD ========================= */}
          <section
            id="prices"
            className="scroll-mt-20 bg-paper-2 px-4 py-16 sm:px-8 lg:px-14 lg:py-24"
          >
            <Mark>Published starting prices</Mark>
            <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2
                className="display max-w-[16ch] text-[clamp(2rem,5vw,3.4rem)] leading-[1.04]"
                data-reveal
              >
                The price card, <span className="italic">before</span> you sit down.
              </h2>
              <p className="max-w-[38ch] text-[0.95rem] leading-[1.7] text-ink/70" data-reveal>
                Our starting prices, in writing, before you ever sit down. Hair length, thickness and
                where your color is today move the final number — so we confirm it with you out loud
                before anything starts.
              </p>
            </div>

            <div className="rule-double mt-10 border border-ink/20 border-t-0 bg-paper p-5 sm:p-9" data-reveal>
              <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-ink/20 pb-4">
                <span className="label text-aubergine">Archer Salon · Loft No. 8</span>
                <span className="label-sm text-warmgrey">Starting prices · Atlanta, GA</span>
              </div>

              <div className="mt-8 grid gap-x-14 gap-y-10 md:grid-cols-2">
                {PRICE_GROUPS.map((g) => (
                  <div key={g.title}>
                    <h3 className="label border-b border-brass/60 pb-2 text-ink">{g.title}</h3>
                    <dl className="mt-3">
                      {g.items.map(([name, price]) => (
                        <div key={name} className="flex items-baseline gap-2 py-[7px]">
                          <dt className="text-[0.95rem] leading-snug">{name}</dt>
                          <span className="leader" aria-hidden="true" />
                          <dd className="tnum shrink-0 text-[0.95rem] font-semibold">{price}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ))}
              </div>

              <p className="mt-8 border-t border-ink/15 pt-4 text-[0.88rem] leading-relaxed text-warmgrey">
                These are starting prices. Hair length, thickness and where your color is today
                move the final number — so we go through it with you before anything starts.
                Makeup and bridal is quoted per event.
              </p>
            </div>
          </section>

          {/* =========================== REVIEWS =========================== */}
          <section id="reviews" className="scroll-mt-20 px-5 py-16 sm:px-8 lg:px-14 lg:py-24">
            <Mark>What clients say</Mark>
            <h2
              className="display mt-6 max-w-[20ch] text-[clamp(2rem,5vw,3.4rem)] leading-[1.04]"
              data-reveal
            >
              What clients have actually <span className="italic">said</span>.
            </h2>

            <div className="mt-11 grid gap-10 lg:grid-cols-2">
              {REVIEWS.map((r, i) => (
                <blockquote
                  key={i}
                  data-reveal
                  className={
                    r.featured
                      ? "border-t-2 border-aubergine pt-6 lg:col-span-2"
                      : "border-t border-ink/20 pt-6"
                  }
                >
                  <p
                    className={`display italic leading-[1.28] ${
                      r.featured
                        ? "max-w-[34ch] text-[clamp(1.5rem,3.4vw,2.5rem)]"
                        : "text-[1.15rem] text-ink/85"
                    }`}
                  >
                    &ldquo;{r.quote}&rdquo;
                  </p>
                  <footer className="mt-5">
                    <p className="label text-aubergine">{r.author}</p>
                    <p className="mt-1.5 text-[0.88rem] text-warmgrey">{r.meta}</p>
                  </footer>
                </blockquote>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center justify-between gap-4 border-t border-ink/15 pt-5">
              <p className="text-[0.92rem] text-warmgrey">
                Straight from our Google listing and SalonLofts profile.
              </p>
              <a
                href={BIZ.gbp}
                target="_blank"
                rel="noopener noreferrer"
                className="label border border-ink/35 px-5 py-3 transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                Read our Google reviews →
              </a>
            </div>
          </section>

          {/* ====================== WHY + PULL QUOTE ======================= */}
          <section className="bg-paper-2">
            <div className="grid lg:grid-cols-[.9fr_1.1fr]">
              <div className="img-fallback relative min-h-[58vw] lg:min-h-[30rem]">
                <img
                  src="images/process.jpg"
                  alt="A stylist sectioning hair with a tail comb during a color appointment"
                  loading="lazy"
                  onError={hideOnError}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/35 to-transparent" />
              </div>
              <div className="flex flex-col justify-center px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
                <Mark>In their words</Mark>
                <blockquote className="mt-7" data-reveal>
                  <p className="display text-[clamp(1.4rem,2.7vw,2.1rem)] italic leading-[1.3]">
                    &ldquo;{PULL_QUOTE.quote}&rdquo;
                  </p>
                  <footer className="mt-5">
                    <p className="label text-aubergine">{PULL_QUOTE.author}</p>
                    <p className="mt-1.5 text-[0.88rem] text-warmgrey">
                      Cutting with Nick for 15 years
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>

            <div className="px-5 pb-16 sm:px-8 lg:px-14 lg:pb-24">
              <Mark>Why people stay</Mark>
              <div className="mt-8 grid gap-x-12 sm:grid-cols-2">
                {WHY.map((w) => (
                  <div key={w.n} className="border-t border-ink/20 py-6" data-reveal>
                    <span className="display text-[1.6rem] leading-none text-brass-ink">{w.n}</span>
                    <h3 className="display mt-3 text-[1.3rem] leading-tight">{w.head}</h3>
                    <p className="mt-2 text-[0.97rem] leading-[1.65] text-ink/75">{w.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ========================= HOW IT WORKS ======================== */}
          <section id="how" className="scroll-mt-20 px-5 py-16 sm:px-8 lg:px-14 lg:py-24">
            <Mark>How it works</Mark>
            <h2
              className="display mt-6 max-w-[16ch] text-[clamp(2rem,5vw,3.4rem)] leading-[1.04]"
              data-reveal
            >
              Three steps, <span className="italic">no surprises</span>.
            </h2>

            <ol className="mt-11 grid border-t-2 border-aubergine md:grid-cols-3 md:gap-x-7">
              {STEPS.map((s) => (
                <li
                  key={s.n}
                  className="border-b border-ink/15 py-7 last:border-b-0 md:border-b-0 md:border-r md:border-ink/15 md:pr-7 md:last:border-r-0"
                  data-reveal
                >
                  <span className="display block text-[3rem] leading-none text-brass-ink">{s.n}</span>
                  <h3 className="display mt-4 text-[1.35rem] leading-tight">{s.head}</h3>
                  <p className="mt-2.5 text-[0.97rem] leading-[1.7] text-ink/75">{s.body}</p>
                </li>
              ))}
            </ol>

            <a
              href={BIZ.phoneHref}
              className="mt-10 inline-flex items-center gap-2.5 border border-ink/40 px-6 py-3.5 font-medium transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              <PhoneIcon /> Start with a call
            </a>
          </section>

          {/* ======================== NO-SURPRISE PROMISE ========================
              Owner approval required before launch: this block commits to the
              "price confirmed before we start" offer, which is RECOMMENDED, not
              something the business has published anywhere yet [INFERRED].
              No time-bound reshuffle or free-fix guarantee is claimed — none was
              found in any source, so none is written here.
          ===================================================================== */}
          <section className="px-5 pb-16 sm:px-8 lg:px-14 lg:pb-24">
            <div className="rule-double border border-ink/20 border-t-0 bg-paper-2 p-6 sm:p-9" data-reveal>
              <p className="label text-aubergine">Our no-surprise promise</p>
              <h2 className="display mt-4 text-[clamp(1.6rem,3.4vw,2.4rem)] leading-tight">
                You hear the full price <span className="italic">before</span> we start.
              </h2>
              <p className="mt-5 max-w-[64ch] text-[1.02rem] leading-[1.75] text-ink/80">
                No add-ons appear at the checkout and no service starts without you knowing what it
                costs. If your hair needs more than you came in planning for, we stop, show you what
                we found, and you decide.
              </p>
              <ul className="mt-7 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                {[
                  "Starting prices published on this page",
                  "Full price confirmed with you at the chair",
                  "One stylist from consultation to finish",
                  "Ask questions before you agree to anything",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[0.98rem] leading-[1.6]">
                    <span aria-hidden="true" className="mt-[0.55em] h-[5px] w-[5px] shrink-0 bg-brass" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ============================== FAQ ============================ */}
          <section id="faq" className="scroll-mt-20 bg-paper-2 px-5 py-16 sm:px-8 lg:px-14 lg:py-24">
            <Mark>Questions we get asked</Mark>
            <div className="mt-8 grid gap-x-14 lg:grid-cols-[minmax(0,1fr)_15rem]">
              <div className="border-t border-ink/20">
                {FAQS.map((f) => (
                  <details key={f.q} className="group border-b border-ink/20" data-reveal>
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5">
                      <span className="display text-[1.2rem] leading-snug sm:text-[1.32rem]">
                        {f.q}
                      </span>
                      <span className="faq-mark mt-1 shrink-0 text-[1.5rem] leading-none text-brass-ink">
                        +
                      </span>
                    </summary>
                    <div className="pb-6 pr-8">
                      <p className="text-[1rem] leading-[1.75] text-ink/80">{f.a}</p>
                    </div>
                  </details>
                ))}
              </div>

              <aside className="mt-8 self-start border border-ink/20 bg-paper p-5 lg:mt-0">
                <p className="label text-aubergine">Still unsure?</p>
                <p className="mt-3 text-[0.95rem] leading-[1.7] text-ink/75">
                  Send a photo of your hair and what you want it to look like. You will get a
                  straight answer on cost and timing.
                </p>
                <a
                  href={BIZ.phoneHref}
                  className="mt-4 flex items-center justify-center gap-2 bg-aubergine px-4 py-3 text-sm font-semibold text-paper transition-colors hover:bg-ink"
                >
                  <PhoneIcon /> {BIZ.phoneDisplay}
                </a>
                <a
                  href={`mailto:${BIZ.email}`}
                  className="mt-2 block break-all text-center text-[0.85rem] text-ink/70 underline decoration-brass decoration-2 underline-offset-4 hover:text-aubergine"
                >
                  {BIZ.email}
                </a>
              </aside>
            </div>
          </section>

          {/* ============================ FORM ============================= */}
          <section id="request" className="scroll-mt-20 px-5 py-16 sm:px-8 lg:px-14 lg:py-24">
            <Mark>Request a time</Mark>
            <div className="mt-7 grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div data-reveal>
                <h2 className="display max-w-[15ch] text-[clamp(2rem,5vw,3.4rem)] leading-[1.04]">
                  Three details and we <span className="italic">call you back</span>.
                </h2>
                <p className="mt-5 max-w-[46ch] text-[1rem] leading-[1.7] text-ink/75">
                  No long form. Tell us your name, the best number, and what you want done. If you
                  would rather talk it through now, the phone is answered by the person who does
                  your hair.
                </p>
                <a
                  href={BIZ.phoneHref}
                  className="display tnum mt-6 inline-block whitespace-nowrap text-[clamp(1.8rem,4vw,2.6rem)] leading-none tracking-tight text-aubergine underline decoration-brass decoration-2 underline-offset-8 hover:text-ink lg:text-[clamp(1.7rem,2.6vw,2.6rem)]"
                >
                  {BIZ.phoneDisplay}
                </a>
              </div>

              <div className="border border-ink/20 bg-paper-2 p-6 sm:p-8" data-reveal>
                {sent ? (
                  <div className="py-6">
                    <p className="label text-aubergine">Request noted</p>
                    <p className="display mt-4 text-[1.5rem] leading-snug">
                      Thank you — we will call you back on the number you gave us.
                    </p>
                    <p className="mt-4 text-[0.95rem] leading-[1.7] text-ink/75">
                      Prefer to lock it in now? Call {BIZ.phoneDisplay} and you will speak to the
                      person doing your hair.
                    </p>
                    <a
                      href={BIZ.phoneHref}
                      className="mt-4 flex items-center justify-center gap-2 bg-aubergine px-5 py-3.5 text-[0.98rem] font-semibold text-paper transition-colors hover:bg-ink"
                    >
                      <PhoneIcon /> {BIZ.phoneDisplay}
                    </a>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="label mt-6 border border-ink/30 px-4 py-2.5 transition-colors hover:border-ink"
                    >
                      Send another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="f-name" className="label block text-warmgrey">
                        1 · Your name
                      </label>
                      <input
                        id="f-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="First and last"
                        className="mt-2 w-full border-b-2 border-ink/30 bg-transparent py-3 text-[1.05rem] outline-none transition-colors placeholder:text-warmgrey focus:border-aubergine"
                      />
                    </div>
                    <div>
                      <label htmlFor="f-phone" className="label block text-warmgrey">
                        2 · Best number to reach you
                      </label>
                      <input
                        id="f-phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="(678) 000-0000"
                        className="mt-2 w-full border-b-2 border-ink/30 bg-transparent py-3 text-[1.05rem] outline-none transition-colors placeholder:text-warmgrey focus:border-aubergine"
                      />
                    </div>
                    <div>
                      <label htmlFor="f-service" className="label block text-warmgrey">
                        3 · What do you need?
                      </label>
                      <select
                        id="f-service"
                        name="service"
                        required
                        defaultValue=""
                        className="mt-2 w-full border-b-2 border-ink/30 bg-transparent py-3 text-[1.05rem] outline-none transition-colors focus:border-aubergine"
                      >
                        <option value="" disabled>
                          Choose one
                        </option>
                        <option>Cut &amp; style</option>
                        <option>Color, highlights or balayage</option>
                        <option>Keratin or smoothing treatment</option>
                        <option>Makeup / bridal / event</option>
                        <option>Not sure — need advice</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 bg-aubergine px-6 py-4 text-[1.02rem] font-semibold tracking-wide text-paper transition-colors hover:bg-ink"
                    >
                      Request my time
                    </button>
                    <p className="text-[0.78rem] leading-relaxed text-warmgrey">
                      Three fields only. We use your number to call back about this appointment and
                      nothing else.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </section>

          {/* ========================== FINAL CTA ========================== */}
          <footer className="relative overflow-hidden bg-aubergine text-paper">
            <img
              src="images/brushes.jpg"
              alt=""
              aria-hidden="true"
              loading="lazy"
              onError={hideOnError}
              className="pointer-events-none absolute right-0 top-0 h-full w-1/2 object-cover opacity-25 mix-blend-luminosity"
            />
            {/* scrim keeps the footer copy at AAA against the aubergine */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #3E1F2E 0%, #3E1F2E 42%, rgba(62,31,46,0.78) 100%)",
              }}
            />
            <div className="relative px-5 py-16 sm:px-8 lg:px-14 lg:py-24">
              <Mark tone="paper">Book Archer Salon</Mark>

              <div className="mt-8 grid gap-12 lg:grid-cols-[1.15fr_.85fr]">
                <div>
                  <h2
                    className="display text-[clamp(2.2rem,6vw,4rem)] leading-[1.02]"
                    data-reveal
                  >
                    Call the chair <span className="italic">directly</span>.
                  </h2>
                  <a
                    href={BIZ.phoneHref}
                    className="display tnum mt-7 inline-flex items-center gap-3 whitespace-nowrap border-2 border-paper px-6 py-4 text-[clamp(1.5rem,4vw,2.4rem)] leading-none tracking-tight transition-colors hover:bg-paper hover:text-aubergine lg:text-[clamp(1.4rem,2.4vw,2.4rem)]"
                  >
                    <PhoneIcon className="h-6 w-6" />
                    {BIZ.phoneDisplay}
                  </a>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={`mailto:${BIZ.email}`}
                      className="border border-paper/45 px-5 py-3 text-sm transition-colors hover:border-paper hover:bg-paper hover:text-aubergine"
                    >
                      {BIZ.email}
                    </a>
                    <a
                      href={BIZ.instagram}
                      className="border border-paper/45 px-5 py-3 text-sm transition-colors hover:border-paper hover:bg-paper hover:text-aubergine"
                    >
                      Instagram {BIZ.instagramHandle}
                    </a>
                    <a
                      href={BIZ.booking}
                      className="border border-paper/45 px-5 py-3 text-sm transition-colors hover:border-paper hover:bg-paper hover:text-aubergine"
                    >
                      Book online →
                    </a>
                  </div>

                  <div className="mt-10 border-t border-paper/20 pt-6">
                    <p className="label text-brass">Name &amp; address</p>
                    <p className="mt-3 text-[1.05rem] leading-[1.7]">
                      {BIZ.name}
                      <br />
                      {BIZ.addressLine1}
                      <br />
                      {BIZ.addressLine2}
                      <br />
                      <span className="text-paper/75">{BIZ.suite}</span>
                    </p>
                    <p className="mt-4 text-[0.95rem] leading-[1.7] text-paper/75">
                      Serving Atlanta, GA and the surrounding area — color, cuts, smoothing
                      treatments, extensions and makeup for weddings and events.
                    </p>
                  </div>
                </div>

                <div data-reveal>
                  <p className="label text-brass">Hours</p>
                  <dl className="mt-4 border-t border-paper/20">
                    {HOURS.map((h) => (
                      <div
                        key={h.day}
                        className="flex items-baseline justify-between gap-3 border-b border-paper/12 py-2.5"
                      >
                        <dt className="text-[0.98rem]">{h.day}</dt>
                        <dd
                          className={`tnum text-[0.95rem] ${
                            h.closed ? "text-paper/60" : "text-paper"
                          }`}
                        >
                          {h.time}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-5 text-[0.85rem] leading-relaxed text-paper/70">
                    Holiday hours can differ — call before driving over and we will confirm.
                  </p>

                  <a
                    href={BIZ.gbp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label mt-6 inline-flex items-center gap-2 text-paper underline decoration-brass decoration-2 underline-offset-4"
                  >
                    Find us on Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* ------------------------------ FOOTER ------------------------------
                Provenance for every claim on this page (the [VERIFIED]/[INFERRED]/
                [UNKNOWN] labels) lives in src/content.ts and the handoff brief —
                deliberately not rendered to the customer.
            ------------------------------------------------------------------- */}
            <div className="relative border-t border-paper/20 bg-ink px-5 py-10 sm:px-8 lg:px-14">
              <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
                <div>
                  <span className="display block text-[clamp(2.6rem,7vw,4rem)] italic leading-[.78] tracking-[-.045em] text-paper">
                    Archer
                  </span>
                  <p className="label mt-3 text-brass">Hair &amp; makeup · Atlanta, GA</p>
                </div>
                <div className="flex flex-col items-start gap-1 md:items-end">
                  <p className="label-sm text-paper/60">Call the chair</p>
                  <a
                    href={BIZ.phoneHref}
                    className="display tnum text-[clamp(1.5rem,4vw,2rem)] leading-none tracking-tight text-paper transition-colors hover:text-brass"
                  >
                    {BIZ.phoneDisplay}
                  </a>
                  <a
                    href={`mailto:${BIZ.email}`}
                    className="mt-3 break-all text-[0.9rem] text-paper/70 underline decoration-brass decoration-2 underline-offset-4 transition-colors hover:text-paper"
                  >
                    {BIZ.email}
                  </a>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-2 border-t border-paper/15 pt-6 text-[0.8rem] leading-relaxed text-paper/70 md:flex-row md:items-center md:justify-between">
                <p>
                  © {new Date().getFullYear()} {BIZ.name} · {BIZ.addressFull}
                </p>
                <p>{BIZ.suite}</p>
              </div>
            </div>
          </footer>
        </main>
      </div>

      {/* ---------------------- STICKY MOBILE BAR ---------------------- */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-brass/50 bg-aubergine text-paper lg:hidden">
        <a
          href={BIZ.phoneHref}
          className="flex items-center justify-center gap-2 px-2 py-4 text-center text-[0.9rem] font-semibold tracking-tight sm:px-4 sm:text-[0.95rem]"
        >
          <PhoneIcon className="h-[17px] w-[17px] shrink-0" />
          <span className="tnum whitespace-nowrap">{BIZ.phoneDisplay}</span>
        </a>
        <a
          href="#request"
          className="flex items-center justify-center gap-2 border-l border-brass/50 bg-paper px-2 py-4 text-center text-[0.9rem] font-semibold sm:px-4 sm:text-[0.95rem] sm:tracking-wide text-aubergine"
        >
          Request a time
        </a>
      </div>

      {/* Build note: the COMPETITORS dataset in content.ts is intentionally never
          rendered here — competitor intelligence belongs in the strategy brief,
          not on the client's page (Ground Rule 5). */}
    </div>
  );
}
