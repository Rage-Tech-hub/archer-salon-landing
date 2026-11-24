/* ============================================================================
   ARCHER SALON — CONTENT + PROVENANCE
   Every value below carries a label:
     [VERIFIED: url]   found in a public source during research
     [INFERRED: why]   reasoned, not stated anywhere — needs owner sign-off
     [UNKNOWN]         not found; placeholder must be replaced
   Research date: this build session.
   ========================================================================== */

export const BIZ = {
  name: "Archer Salon",
  // [VERIFIED: https://reviews.birdeye.com/archer-salon-170256897119510 — mirrors the Google Business Profile address string, reproduced exactly]
  addressLine1: "1512 suite 8, Piedmont Ave NE",
  addressLine2: "Atlanta, GA, 30324",
  addressFull: "1512 suite 8, Piedmont Ave NE, Atlanta, GA, 30324",
  // [VERIFIED: GBP schema on Birdeye] and [VERIFIED: https://salonlofts.com/nicholas_archer]
  phoneDisplay: "(678) 333-5534",
  phoneHref: "tel:+16783335534",
  // [supplied by the owner in the brief]
  email: "archersalons@gmail.com",
  // [supplied by the owner in the brief]
  instagram: "https://www.instagram.com/nick_archer78",
  instagramHandle: "@nick_archer78",
  // [VERIFIED: https://salonlofts.com/nicholas_archer — the only public booking link found]
  booking: "https://salonlofts.com/nicholas_archer",
  bookingLabel: "SalonLofts profile",
  // [supplied by the owner in the brief]
  gbp: "https://www.google.com/maps/place/Archer+Salon/data=!4m2!3m1!1s0x0:0x5bf1dcb93c5fa2fc?sa=X&ved=1t:2428&ictx=111",
  suite: "Salon Lofts – Ansley Square, Loft No. 8",
  // [VERIFIED: https://reviews.birdeye.com/archer-salon-170256897119510 — aggregateRating 5 / 4 reviews]
  rating: "5.0",
  reviewCount: "4",
};

export const HOURS: { day: string; time: string; closed?: boolean }[] = [
  // [VERIFIED: https://reviews.birdeye.com/archer-salon-170256897119510 openingHoursSpecification]
  { day: "Monday", time: "Closed", closed: true },
  { day: "Tuesday", time: "10:00 a.m. – 7:00 p.m." },
  { day: "Wednesday", time: "9:00 a.m. – 7:00 p.m." },
  { day: "Thursday", time: "10:00 a.m. – 7:00 p.m." },
  { day: "Friday", time: "9:00 a.m. – 7:00 p.m." },
  { day: "Saturday", time: "9:00 a.m. – 5:00 p.m." },
  { day: "Sunday", time: "10:00 a.m. – 6:00 p.m." },
];

/* ---------------------------------------------------------------------------
   SERVICES — every price copied from the stylist's public SalonLofts price list.
   [VERIFIED: https://salonlofts.com/nicholas_archer]
   Nothing rounded, nothing invented. Ranges are shown as published.
   -------------------------------------------------------------------------- */
export const PRICE_GROUPS: { title: string; note?: string; items: [string, string][] }[] = [
  {
    title: "Cuts & styling",
    items: [
      ["Women's cut & style", "$55–$65"],
      ["Men's cut & style", "$25–$39"],
      ["Teen / young adult cut & style", "$30"],
      ["Children's cut & style", "$15 and up"],
      ["Natural hair cut & style", "$65–$85"],
      ["Shampoo & style", "$45 and up"],
    ],
  },
  {
    title: "Color",
    items: [
      ["Color retouch & style", "$70 and up"],
      ["All over color & style", "$80 and up"],
      ["All over color + cut & style", "$135 and up"],
      ["Face-framing highlight & style", "$90"],
      ["Partial highlights + cut & style", "$165 and up"],
      ["Full highlights + cut & style", "$205–$350"],
      ["Balayage & style", "$200 and up"],
      ["Ombre & style", "$200 and up"],
      ["Men's color", "$45 and up"],
      ["Glaze / toner", "$30"],
    ],
  },
  {
    title: "Treatments & extensions",
    items: [
      ["Express keratin smoothing", "$150 and up"],
      ["Full keratin + cut & style", "$300 and up"],
      ["Perm + cut & style", "$95 and up"],
      ["Cinderella extension refresh", "$20 and up"],
      ["Cinderella extension removal", "$60 and up"],
      ["Tinsel", "$3 and up"],
      ["Makeup (bridal / event)", "by request"],
    ],
  },
];

/* ---------------------------------------------------------------------------
   PAIN → SOLUTION — themes pulled from real Atlanta salon review language.
   [VERIFIED: https://www.reddit.com/r/Hair/... , https://www.reddit.com/r/Ulta/...
    and https://www.yelp.com/search?find_desc=Hair+Salons&find_near=aillea-atlanta-atlanta
    — recurring complaints: price not quoted up front, charged more than the posted
    price, upsold a "color correction" the client didn't ask for, long waits.]
   -------------------------------------------------------------------------- */
export const PAINS = [
  {
    n: "01",
    problem: "The bill ends up bigger than the number you were quoted.",
    fix: "We go through the price with you before anything starts. The starting prices are printed on this page, not hidden behind the chair.",
  },
  {
    n: "02",
    problem: "You bring in a photo and leave with a different color.",
    fix: "Nick is certified in Pravana and Goldwell color and has cut and colored hair for 21 years. He looks at your hair first and tells you what will actually take.",
  },
  {
    n: "03",
    problem: "Your stylist is running late or splitting time between chairs.",
    fix: "Loft 8 is a private suite with one stylist. Your appointment is the only one in that room.",
  },
];

/* [INFERRED: SalonLofts suites are individually operated and Nick is the only
   stylist listed on the Loft 8 profile — but "one stylist only" is not stated
   anywhere. OWNER TO CONFIRM.] */

export const WHY = [
  {
    n: "01",
    head: "21 years behind the chair",
    body: "Nick Archer is a master cosmetologist of 21 years, specializing in cuts and color.",
    tag: "[VERIFIED: salonlofts.com/nicholas_archer]",
  },
  {
    n: "02",
    head: "Certified in the color lines clients ask for",
    body: "Pravana and Goldwell color certified. Trained in the Cezanne smoothing line and Cinderella hair extensions.",
    tag: "[VERIFIED: salonlofts.com/nicholas_archer]",
  },
  {
    n: "03",
    head: "Hair and makeup in one appointment",
    body: "Makeup is offered by special request — bridal, wedding day and events — so you are not booking two people.",
    tag: "[VERIFIED: salonlofts.com/nicholas_archer]",
  },
  {
    n: "04",
    head: "Clients who stay decades, not weeks",
    body: "Reviews describe clients of 6, 15 and 20 years, some driving 45+ minutes each way to keep the same stylist.",
    tag: "[VERIFIED: reviews below]",
  },
];

export const STEPS = [
  {
    n: "01",
    head: "Call or send a photo",
    body: "Tell us what you want and what your hair has been through. We will say what is realistic before you book.",
  },
  {
    n: "02",
    head: "Price confirmed before we start",
    body: "You hear the full price out loud before the first cut or the first brush of color. Nothing new appears at the end.",
  },
  {
    n: "03",
    head: "One stylist, start to finish",
    body: "The person who consulted on your hair is the person who does it. You leave with it finished.",
  },
];

/* ---------------------------------------------------------------------------
   REVIEWS — real, public, verbatim. Nothing written by us.
   -------------------------------------------------------------------------- */
/* All three quotes are verbatim public reviews. Where the source page did not
   display a reviewer name, attribution reads as the listing it came from —
   no name was invented. [VERIFIED: reviews.birdeye.com/archer-salon-170256897119510
   and salonlofts.com/nicholas_archer] */
export const REVIEWS = [
  {
    quote:
      "Nick is absolutely BRILLIANT. He's a phenomenal colorist and an architect when it comes to pairing a cut to flatter your face & features. I've been coming to Nick for 20 years now & drive 45+ minutes to see him, because he's worth it!",
    author: "Kristin Routman",
    meta: "Google review · client for 20 years",
    src: "[VERIFIED: https://reviews.birdeye.com/archer-salon-170256897119510]",
    featured: true,
  },
  {
    quote:
      "I cannot tell you how much better my wedding day went because of how immensely satisfied I was with my hair and makeup that Nick did. I was so pleased with the result, it allowed me to relax and enjoy the wedding day prep I had been anxious about for months.",
    author: "Google review",
    meta: "Hair and makeup for her wedding day",
    src: "[VERIFIED: https://reviews.birdeye.com/archer-salon-170256897119510]",
    featured: false,
  },
  {
    quote:
      "I have been Nick's client for almost six years, but my haircuts are perfect every time. He's given suggestions on how to part my hair and products for my hair type. I would trust no one else with my hair.",
    author: "SalonLofts client review",
    meta: "Cut and style · client for six years",
    src: "[VERIFIED: https://salonlofts.com/nicholas_archer]",
    featured: false,
  },
];

export const PULL_QUOTE = {
  quote:
    "A friend referred me to Nick almost 15 years ago and he has been cutting my hair ever since. He doesn't hurry through the cut, spending the time to get my hair looking right.",
  author: "SalonLofts client review",
  src: "[VERIFIED: https://salonlofts.com/nicholas_archer]",
};

/* ---------------------------------------------------------------------------
   FAQ — objections taken directly from the review themes in Stage 2.
   -------------------------------------------------------------------------- */
export const FAQS = [
  {
    q: "How much will my appointment cost?",
    a: "Starting prices are listed on this page. Your final price depends on your hair length and what you want done, and we confirm it with you before we start. If the price changes, you hear it from us first — not on the bill.",
    tag: "[INFERRED: offer — owner must confirm the practice before launch]",
  },
  {
    q: "Do you do makeup as well as hair?",
    a: "Yes. Makeup is offered by special request, including wedding day and event makeup. Because it is booked by request, call or email first to check your date.",
    tag: "[VERIFIED: salonlofts.com/nicholas_archer]",
  },
  {
    q: "Where exactly are you?",
    a: "Archer Salon is inside Salon Lofts – Ansley Square, Loft No. 8 — 1512 suite 8, Piedmont Ave NE, Atlanta, GA, 30324. It is the same address listed on our Google profile.",
    tag: "[VERIFIED: GBP address via reviews.birdeye.com listing]",
  },
  {
    q: "My color went wrong somewhere else. Can you look at it?",
    a: "Call and send a photo. Nick will tell you what is realistic, how long it will take and what it costs before you book anything.",
    tag: "[INFERRED: corrective color is not itemized on the published price list — owner to confirm]",
  },
  {
    q: "How far ahead should I book?",
    a: "Clients on our Google profile describe the calendar staying full. Call (678) 333-5534 and we will find the next open time.",
    tag: "[VERIFIED: review text; no booking-lead-time data published]",
  },
  {
    q: "What products do you use?",
    a: "Pravana and Goldwell for color, the Cezanne line for keratin smoothing, and Cinderella for hair extensions. Ask which one suits your hair before you commit.",
    tag: "[VERIFIED: salonlofts.com/nicholas_archer]",
  },
];

/* ---------------------------------------------------------------------------
   COMPETITOR SET — Stage 2. Chosen from Yelp map results for
   "hair colorist Midtown Atlanta" and "colorist Ansley Park Atlanta",
   plus one same-building loft. Ratings are Yelp, captured this session.
   -------------------------------------------------------------------------- */
export const COMPETITORS = [
  {
    name: "Ron Massey Balayage Studio",
    where: "Salon Lofts – Ansley Square, Loft 18 (same building)",
    rating: "4.9 · 34–36 Yelp reviews",
    cta: "Phone + SalonLofts booking",
    price: "Publishes prices on SalonLofts (balayage $200+, color correction $300+)",
    strength: "Signature balayage, deep review praise for fixing prior color damage",
    src: "[VERIFIED: https://salonlofts.com/ron_massey , https://www.yelp.com/search?find_desc=Hair+Colorist&find_loc=Midtown,+Atlanta,+GA]",
  },
  {
    name: "Eleven Hair Salon",
    where: "Midtown",
    rating: "4.5 · 149 Yelp reviews",
    cta: "Online booking",
    price: "$$ shown, itemized prices not surfaced in results",
    volume: true,
    priceNote: true,
    strength: "High review volume, salon with multiple stylists",
    src: "[VERIFIED: https://www.yelp.com/search?find_desc=Hair+Colorist&find_loc=Midtown,+Atlanta,+GA]",
  },
  {
    name: "Van Michael Salon",
    where: "Midtown (+ Virginia-Highland)",
    rating: "4.1 · 112 Yelp reviews",
    cta: "Online booking",
    price: "$$ , no published price list in results",
    strength: "40+ years in market, formal artist training program, multi-location",
    src: "[VERIFIED: https://vanmichael.com/ , https://www.yelp.com/search?find_desc=Hair+Colorist&find_loc=Midtown,+Atlanta,+GA]",
  },
  {
    name: "Adore Hair Studio",
    where: "Old Fourth Ward",
    rating: "4.3 · 193–195 Yelp reviews",
    cta: "Online booking",
    price: "$$ , no published price list in results",
    strength: "Large review base, strong stylist-level followings",
    src: "[VERIFIED: https://www.yelp.com/search?find_desc=Hair+Colorist&find_loc=Midtown,+Atlanta,+GA]",
  },
  {
    name: "Level 7 Salon",
    where: "Midtown",
    rating: "[UNKNOWN — rating not shown in source]",
    cta: "Online booking + phone",
    price: "Publishes prices on its own site (partial highlights $170+, balayage $200+)",
    strength: "Owns a proper website with services, prices and local-area copy",
    src: "[VERIFIED: https://level7salonatl.com/]",
  },
];
