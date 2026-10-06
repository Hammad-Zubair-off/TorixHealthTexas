import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Container, Section } from "@/components/Container";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type HeroImage = {
  src: string;
  alt: string;
};

type HeroProps = {
  breadcrumb?: BreadcrumbItem[];
  eyebrow?: string;
  headline: string;
  /** Word/phrase within headline to render in accent color (case-sensitive match). */
  highlightWord?: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  consultationNote?: string;
  /** Page hero photo — preferred over the Claim workflow placeholder. */
  image?: HeroImage;
  visual?: React.ReactNode;
  /** When true, CTAs sit side-by-side without bordered wrapper (brand mockup). */
  brandLayout?: boolean;
};

function HeadlineWithHighlight({
  headline,
  highlightWord,
}: {
  headline: string;
  highlightWord?: string;
}) {
  if (!highlightWord || !headline.includes(highlightWord)) {
    return <>{headline}</>;
  }
  const parts = headline.split(highlightWord);
  return (
    <>
      {parts[0]}
      <span className="text-accent">{highlightWord}</span>
      {parts.slice(1).join(highlightWord)}
    </>
  );
}

/** Square-framed photo with corner brackets — Texas's signature shape. */
export function HeroPhoto({ src, alt }: HeroImage) {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <span
        aria-hidden
        className="absolute -right-4 -bottom-4 h-full w-full bg-accent-2"
      />
      <div className="relative border-4 border-accent bg-band-paper">
        <div className="relative aspect-[5/4] min-h-[280px] w-full sm:aspect-[4/5] sm:min-h-[320px] lg:min-h-[360px]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 440px, 520px"
            priority
          />
        </div>
        {/* corner ticks */}
        <span aria-hidden className="absolute -left-2 -top-2 h-5 w-5 border-l-4 border-t-4 border-text" />
        <span aria-hidden className="absolute -right-2 -top-2 h-5 w-5 border-r-4 border-t-4 border-text" />
        <span aria-hidden className="absolute -left-2 -bottom-2 h-5 w-5 border-l-4 border-b-4 border-text" />
        <span aria-hidden className="absolute -right-2 -bottom-2 h-5 w-5 border-r-4 border-b-4 border-text" />
      </div>
    </div>
  );
}

export function Hero({
  breadcrumb,
  eyebrow,
  headline,
  highlightWord,
  subheadline,
  primaryCta,
  secondaryCta,
  consultationNote,
  image,
  visual,
  brandLayout = false,
}: HeroProps) {
  return (
    <Section band="wash" className={cn(brandLayout && "pb-0")}>
      <Container
        className={cn(
          "grid items-center gap-[clamp(36px,5vw,72px)] py-[clamp(56px,6.5vw,96px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]",
          brandLayout && "pb-[clamp(72px,8vw,112px)]",
        )}
      >
        <div className="border-l-4 border-accent pl-6">
          {breadcrumb && breadcrumb.length > 0 ? (
            <nav
              aria-label="Breadcrumb"
              className="mb-5 flex flex-wrap items-center gap-2 text-[12px] uppercase tracking-[0.06em] text-neutral-600"
            >
              {breadcrumb.map((item, index) => {
                const isLast = index === breadcrumb.length - 1;
                return (
                  <span key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
                    {index > 0 ? (
                      <span aria-hidden="true" className="text-neutral-400">
                        /
                      </span>
                    ) : null}
                    {item.href && !isLast ? (
                      <Link
                        href={item.href}
                        className="no-underline transition-colors duration-150 hover:text-accent-700"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span
                        className={cn(isLast && "font-medium text-text")}
                        aria-current={isLast ? "page" : undefined}
                      >
                        {item.label}
                      </span>
                    )}
                  </span>
                );
              })}
            </nav>
          ) : null}

          {eyebrow ? (
            <span
              className={cn(
                "mb-5 inline-flex items-center gap-2 bg-accent px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white",
              )}
            >
              {brandLayout ? (
                <Icon name="shield" size={14} className="text-white shrink-0" />
              ) : null}
              {eyebrow}
            </span>
          ) : null}
          <h1 className="mb-6 max-w-[16ch] text-[clamp(34px,4.4vw,58px)] leading-[1.02] text-text">
            <HeadlineWithHighlight headline={headline} highlightWord={highlightWord} />
          </h1>
          <p className="mb-8 max-w-[48ch] text-[17px] normal-case leading-[1.6] text-neutral-800">
            {subheadline}
          </p>
          <div className="flex flex-wrap items-center gap-3.5">
            <Button href={primaryCta.href} variant="primary" size="hero" arrow={brandLayout}>
              {primaryCta.label}
            </Button>
            {secondaryCta ? (
              <Button
                href={secondaryCta.href}
                variant="outline"
                size={brandLayout ? "hero" : "default"}
              >
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
          {consultationNote ? (
            <p className="mt-5 flex max-w-[44ch] items-start gap-2 text-[13px] normal-case text-neutral-600">
              {brandLayout ? (
                <Icon name="shield" size={14} className="mt-0.5 shrink-0 text-accent" />
              ) : null}
              <span>{consultationNote}</span>
            </p>
          ) : null}
        </div>

        <div className={cn("min-h-[280px]")}>
          {visual ?? (image ? <HeroPhoto src={image.src} alt={image.alt} /> : null)}
        </div>
      </Container>
    </Section>
  );
}

export function HeroBrandVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px]">
      <span
        aria-hidden
        className="absolute -right-5 -bottom-5 h-[88%] w-[88%] bg-accent-2"
      />

      <div className="relative z-[1] w-full border-4 border-accent bg-band-paper p-2">
        <Image
          src="/brand/hero-doctor1.png"
          alt="Healthcare professional representing Torix Solutions billing partnership"
          width={1114}
          height={1412}
          className="relative mx-auto h-auto w-full select-none"
          priority
          sizes="(max-width: 640px) 88vw, (max-width: 1024px) 440px, 480px"
        />
        <span aria-hidden className="absolute -left-2 -top-2 h-6 w-6 border-l-4 border-t-4 border-text" />
        <span aria-hidden className="absolute -right-2 -top-2 h-6 w-6 border-r-4 border-t-4 border-text" />
        <span aria-hidden className="absolute -left-2 -bottom-2 h-6 w-6 border-l-4 border-b-4 border-text" />
        <span aria-hidden className="absolute -right-2 -bottom-2 h-6 w-6 border-r-4 border-b-4 border-text" />
      </div>

      {/* Stat tags — solid rectangular blocks pinned at the corners */}
      <div className="pointer-events-none absolute inset-0 z-[2]">
        <div className="absolute left-[-6%] top-[6%] hidden w-[150px] bg-accent px-3.5 py-3 text-white shadow-lg sm:block">
          <div className="mb-1 flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.06em] text-white/85">
            Claims
            <Icon name="fileText" size={14} className="opacity-80" />
          </div>
          <p className="font-[family-name:var(--font-heading)] text-[22px] font-semibold leading-none">
            1,243
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.05em] text-white/70">
            Processed this month
          </p>
        </div>

        <div className="absolute bottom-[-4%] right-[-6%] w-[min(168px,44%)] border-4 border-text bg-band-paper p-3 shadow-lg sm:w-[172px] sm:p-3.5">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.05em] text-neutral-700">
            A/R Follow Up
          </p>
          <p className="font-[family-name:var(--font-heading)] text-[28px] font-semibold leading-none text-accent">
            92%
          </p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.05em] text-neutral-500">
            Resolution Rate
          </p>
        </div>

        <div className="absolute bottom-[4%] left-[-4%] bg-accent-2 px-2.5 py-2 text-white shadow-md sm:hidden">
          <p className="text-[10px] font-medium uppercase text-white/85">Claims</p>
          <p className="text-[13px] font-semibold">1,243</p>
        </div>
      </div>
    </div>
  );
}
