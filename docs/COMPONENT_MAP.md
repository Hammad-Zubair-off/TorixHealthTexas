# Component Map

Structure source of truth for the Torix site. Update this file when adding, renaming, or moving components, content modules, or routes.

## Architecture notes

- **Modular:** Pages compose prop-driven section components; copy lives in `content/*`; nav in `lib/nav.ts`; tokens in `app/globals.css`.
- **Maintainable:** Shared primitives (`Button`, `Container`/`Section`/`Kicker`, `Icon`, `card-lift` utilities) — change once, reuse everywhere.
- **Responsive (mobile-first):** Card grids use `1 / 2 / 3` cols (`sm` / `lg`); Navbar collapses to menu; ProcessTimeline stacks on mobile, connected icon row on `lg+`; side padding `clamp(24px, 4vw, 44px)`; container max `1280px`.
- **Scalable:** New pages reuse the same sections + content modules; do not fork page-specific markup for shared patterns.

## Design tokens

| Concern | Path |
|---------|------|
| CSS tokens / Tailwind theme / motion utilities | [`app/globals.css`](../app/globals.css) |
| Design system reference | [`docs/DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md) |
| Homepage visual plan | [`docs/HOMEPAGE_DESIGN_PLAN.md`](HOMEPAGE_DESIGN_PLAN.md) |
| Fonts | Sora (headings) + Plus Jakarta Sans (body) via [`app/layout.tsx`](../app/layout.tsx) |

## Shared chrome & primitives

| Component | Path | Notes |
|-----------|------|-------|
| Navbar | [`components/Navbar.tsx`](../components/Navbar.tsx) | Top contact strip (phone/email); brand logo + TORIX SOLUTIONS; active Home underline; solid CTA with arrow; animated hamburger → X |
| Footer | [`components/Footer.tsx`](../components/Footer.tsx) | Brand column + Contact column include phone/email |
| Button | [`components/Button.tsx`](../components/Button.tsx) | primary filled accent (~`#0A50D0`); optional `arrow`; secondary / outline / ghost + lift hover |
| Container / Section / Kicker | [`components/Container.tsx`](../components/Container.tsx) | `wash` band uses cool blue radial wash |
| Icons | [`components/icons.tsx`](../components/icons.tsx) | includes `headphones` for brand trust bar |
| Nav config | [`lib/nav.ts`](../lib/nav.ts) |
| Site phone / email | [`lib/site-contact.ts`](../lib/site-contact.ts) |
| Contact form schema | [`lib/contact-schema.ts`](../lib/contact-schema.ts) | Zod payload for `/api/contact` |
| Contact API | [`app/api/contact/route.ts`](../app/api/contact/route.ts) | Resend or Gmail SMTP; see `.env.example` (`RESEND_API_KEY` or `GMAIL_USER` + `GMAIL_APP_PASSWORD`) |
| `cn` util | [`lib/utils.ts`](../lib/utils.ts) |
| Card motion | `.card-lift` / `.card-lift-light` / `.card-lift-deep` in globals |
| Brand assets | [`public/brand/`](../public/brand/) | `logo-mark.png`, `hero-doctor.png`; page heroes in [`public/brand/heroes/`](../public/brand/heroes/); favicons from logo → [`app/favicon.ico`](../app/favicon.ico), [`app/icon.png`](../app/icon.png), [`app/apple-icon.png`](../app/apple-icon.png) |

## Section components

| Component | Path | Notes |
|-----------|------|-------|
| Hero | [`components/Hero.tsx`](../components/Hero.tsx) | Soft wash; optional `highlightWord`, `brandLayout`; CTA group unboxed (primary + outline secondary); `image` → `HeroPhoto` (themed stock under `public/brand/heroes/`); Home uses `HeroBrandVisual` (doctor + Claims/A/R floating cards). Claim workflow placeholder removed. |
| TrustBar | [`components/TrustBar.tsx`](../components/TrustBar.tsx) | `default` quiet strip; `variant="brand"` deep-blue rounded stats bar (Home uses sample metrics pending final review) |
| IconFeatureGrid | [`components/IconFeatureGrid.tsx`](../components/IconFeatureGrid.tsx) | light/deep/open; optional `footerNote`; grid `1→2→3` cols |
| SplitOfferings | [`components/SplitOfferings.tsx`](../components/SplitOfferings.tsx) | Services vs Solutions framing; filled primary CTA |
| ServicesOverview | [`components/ServicesOverview.tsx`](../components/ServicesOverview.tsx) | Services (light) + Solutions (deep); grid `1→2→3` cols |
| AccountTeam | [`components/AccountTeam.tsx`](../components/AccountTeam.tsx) | Named-contact / pending photos |
| BenefitCards | [`components/BenefitCards.tsx`](../components/BenefitCards.tsx) | Differentiator / mission blocks as bordered cards; stacks on mobile |
| PlatformSpotlight | [`components/PlatformSpotlight.tsx`](../components/PlatformSpotlight.tsx) | Deep split overview; optional `description`; abstract module visual |
| ProcessTimeline | [`components/ProcessTimeline.tsx`](../components/ProcessTimeline.tsx) | Centered kicker heading; blue icon nodes + connector line/dots; stacks on mobile |
| FAQAccordion | [`components/FAQAccordion.tsx`](../components/FAQAccordion.tsx) | Two-col FAQ + accordion cards; native details/summary |
| CTABanner | [`components/CTABanner.tsx`](../components/CTABanner.tsx) | Closing deep band; primary CTA with arrow |
| ComingSoon | [`components/ComingSoon.tsx`](../components/ComingSoon.tsx) | Full-page stub for unfinished routes; swap for real content when ready |
| NotFoundView | [`components/NotFoundView.tsx`](../components/NotFoundView.tsx) | Branded 404 body used by `app/not-found.tsx` |
| ProseSection | [`components/ProseSection.tsx`](../components/ProseSection.tsx) | Multi-paragraph story / about copy; mobile-first |
| JobOpenings | [`components/JobOpenings.tsx`](../components/JobOpenings.tsx) | Careers openings grid; location + employment type; Apply links |
| ContactPanel | [`components/ContactPanel.tsx`](../components/ContactPanel.tsx) | Contact info + hours + form layout; stacks on mobile |
| ContactForm | [`components/ContactForm.tsx`](../components/ContactForm.tsx) | Client form; Zod validation + per-field errors; posts to `/api/contact`; mailto fallback on send failures |
| TeamMemberCard | [`components/TeamMemberCard.tsx`](../components/TeamMemberCard.tsx) | About Us / AccountTeam; optional `bio` |

## Status & error routes

| File | Path | Notes |
|------|------|-------|
| Not found | [`app/not-found.tsx`](../app/not-found.tsx) | Unknown URLs; branded [`NotFoundView`](../components/NotFoundView.tsx); `noindex, follow` metadata |
| Error boundary | [`app/error.tsx`](../app/error.tsx) | Runtime exceptions in a route segment; Try again + home |
| Global error | [`app/global-error.tsx`](../app/global-error.tsx) | Root-layout failures; own `html`/`body`; Try again + home + contact |
| Coming-soon metadata | [`lib/coming-soon.ts`](../lib/coming-soon.ts) | Shared title/description for stubs |

Contact form ([`ContactForm`](../components/ContactForm.tsx)): client Zod validation, per-field errors, maps API `issues`, banners with mailto fallback for network / 502 / 503.

## Content modules

| Module | Path |
|--------|------|
| Homepage copy | [`content/home.ts`](../content/home.ts) |
| Medical Billing copy | [`content/medical-billing.ts`](../content/medical-billing.ts) |
| Revenue Cycle Management copy | [`content/revenue-cycle-management.ts`](../content/revenue-cycle-management.ts) |
| Medical Coding copy | [`content/medical-coding.ts`](../content/medical-coding.ts) |
| Credentialing and Contract copy | [`content/credentialing.ts`](../content/credentialing.ts) |
| Medical Billing Audit copy | [`content/medical-audit.ts`](../content/medical-audit.ts) |
| Accounts Receivable Operations copy | [`content/ar-follow-up.ts`](../content/ar-follow-up.ts) |
| Medical Billing Software copy | [`content/medical-billing-software.ts`](../content/medical-billing-software.ts) |
| Healthcare Platform copy | [`content/healthcare-platform.ts`](../content/healthcare-platform.ts) |
| HIPAA-Compliant Software copy | [`content/hipaa-compliant-software.ts`](../content/hipaa-compliant-software.ts) |
| About Us copy | [`content/about.ts`](../content/about.ts) |
| Careers copy | [`content/careers.ts`](../content/careers.ts) |
| Contact copy | [`content/contact.ts`](../content/contact.ts) |

## Homepage section order

1. Navbar  
2. Hero  
3. TrustBar  
4. SplitOfferings  
5. ServicesOverview  
6. FAQAccordion  
7. CTABanner  
8. Footer  

## Medical Billing section order (`/services/medical-billing`)

1. Navbar  
2. Hero (breadcrumb + full-cycle billing paragraph)  
3. IconFeatureGrid — How it works (paper + footerNote → RCM / Medical Billing Audit)  
4. FAQAccordion  
5. CTABanner  
6. Footer  

## Revenue Cycle Management section order (`/services/revenue-cycle-management`)

1. Navbar  
2. Hero (breadcrumb + full-cycle paragraph)  
3. IconFeatureGrid — How it works (paper + footerNote → Medical Billing)  
4. FAQAccordion  
5. CTABanner  
6. Footer  

## Medical Coding section order (`/services/medical-coding`)

1. Navbar  
2. Hero (breadcrumb + standalone/bundled note)  
3. IconFeatureGrid — What's included (paper)  
4. IconFeatureGrid — Problems we solve (deep)  
5. ProcessTimeline — How accuracy is maintained  
6. BenefitCards — Benefits  
7. IconFeatureGrid — Why choose us (tint trust grid)  
8. FAQAccordion  
9. CTABanner  
10. Footer  

## Credentialing and Contract section order (`/services/credentialing`)

1. Navbar  
2. Hero (breadcrumb + enrollment lag paragraph)  
3. IconFeatureGrid — How it works (paper)  
4. FAQAccordion  
5. CTABanner  
6. Footer  

## Medical Billing Audit section order (`/services/medical-audit`)

1. Navbar  
2. Hero (breadcrumb; CTA “Request an Audit”)  
3. IconFeatureGrid — What we analyze (paper)  
4. BenefitCards — What you receive  
5. ProcessTimeline — Our process (6 steps)  
6. IconFeatureGrid — Specialties we support (deep)  
7. IconFeatureGrid — Why Torix (tint)  
8. FAQAccordion  
9. CTABanner (“Request an Audit”)  
10. Footer  

## Accounts Receivable Operations section order (`/services/ar-follow-up`)

1. Navbar  
2. Hero (breadcrumb + AR / denials / appeals paragraph)  
3. IconFeatureGrid — How it works (paper + footerNote → Medical Billing / RCM)  
4. FAQAccordion  
5. CTABanner (“Request an A/R Assessment”)  
6. Footer  

## Medical Billing Software section order (`/solutions/medical-billing-software`)

1. Navbar  
2. Hero (Solutions breadcrumb; Healthcare Technology; Request a Demo)  
3. IconFeatureGrid — What the software does (paper)  
4. IconFeatureGrid — Problems it solves (deep)  
5. ProcessTimeline — How it works  
6. BenefitCards — Benefits  
7. IconFeatureGrid — Why choose our software (tint)  
8. FAQAccordion  
9. CTABanner (Request a Demo)  
10. Footer  

## Healthcare Platform section order (`/solutions/healthcare-platform`)

1. Navbar  
2. Hero (Solutions breadcrumb; Request a Platform Demo)  
3. PlatformSpotlight — Platform overview (deep split)  
4. IconFeatureGrid — Core capabilities (paper, 7 cards)  
5. IconFeatureGrid — Why choose a unified platform (deep)  
6. ProcessTimeline — How onboarding works  
7. IconFeatureGrid — Why choose our platform (tint)  
8. FAQAccordion  
9. CTABanner (Request a Platform Demo)  
10. Footer  

## HIPAA-Compliant Software section order (`/solutions/hipaa-compliant-software`)

1. Navbar  
2. Hero (Solutions breadcrumb; Learn About Our Compliance Practices)  
3. IconFeatureGrid — What HIPAA compliance means (paper)  
4. IconFeatureGrid — Why HIPAA compliance matters (deep)  
5. ProcessTimeline — How we maintain compliance  
6. IconFeatureGrid — Why choose our HIPAA-compliant platform (tint)  
7. FAQAccordion  
8. CTABanner  
9. Footer  

## About Us section order (`/about`)

1. Navbar  
2. Hero — Who we are  
3. ProseSection — Our story  
4. BenefitCards — Mission & vision  
5. IconFeatureGrid — Why healthcare & technology (deep; links to live services/solutions)  
6. BenefitCards — Our values  
7. IconFeatureGrid — Why choose Torix Solutions (tint)  
8. CTABanner  
9. Footer  

## Careers section order (`/careers`)

1. Navbar  
2. Hero — Build the future… (CTA jumps to `#openings`)  
3. IconFeatureGrid — Why join (paper)  
4. IconFeatureGrid — What we do (deep)  
5. ProseSection — Life at Torix  
6. IconFeatureGrid — Culture pillars (tint)  
7. BenefitCards — Benefits  
8. JobOpenings — Current openings (`#openings`)  
9. ProcessTimeline — Hiring process  
10. IconFeatureGrid — Values (tint)  
11. CTABanner — Apply Now  
12. Footer  

## Contact Us section order (`/contact`)

1. Navbar  
2. ContactPanel — Info, hours & message form (`#get-in-touch`)  
3. IconFeatureGrid — Why contact Torix (tint)  
4. FAQAccordion  
5. Footer  

**Copy source:** Nocturne Light reference (em-dash phrasing cleaned); service/solution/about/careers/contact pages from design briefs. Contact phone, email, and office address are live (`lib/site-contact.ts` + Contact panel).

**Intentionally omitted:** Testimonials; Healthcare SEO in nav/footer; Resources/Blog in nav/footer for now (route stub remains). Sample stats/names on Home are dummy data for layout — revise before launch.

## Brand mockup notes (Home)

- Accent token ~`#0A50D0` (Primary Blue); Deep `#0546C1`; Bright `#207DFF`; deep bands use navy-blue (`--band-deep`).
- Nav + Hero + TrustBar `brand` aim for pixel-close fidelity to the approved mockup; lower sections keep structure with aligned buttons/surfaces.
- Floating hero cards and trust metrics use sample numbers from the mockup until final figures are confirmed.

## Routes (live)

| Route | Status |
|-------|--------|
| `/` | Homepage built |
| `/services/medical-billing` | Live |
| `/services/revenue-cycle-management` | Live |
| `/services/medical-coding` | Live |
| `/services/credentialing` | Live |
| `/services/medical-audit` | Live |
| `/services/ar-follow-up` | Live |
| `/solutions/medical-billing-software` | Live |
| `/solutions/healthcare-platform` | Live |
| `/solutions/hipaa-compliant-software` | Live |
| `/about` | Live |
| `/careers` | Live |
| `/contact` | Live |
| `/resources/blog` | Coming-soon stub; not in nav/footer |
| `/services/healthcare-seo` | Stub (“Under review”); not in nav; `noindex` |
| Unknown paths | [`app/not-found.tsx`](../app/not-found.tsx) |
