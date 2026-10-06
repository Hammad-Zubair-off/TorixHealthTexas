import { Button } from "@/components/Button";
import { Container, Section } from "@/components/Container";

type CTABannerProps = {
  heading: string;
  subheading?: string;
  cta: { label: string; href: string };
};

/** Full-bleed banner with a diagonal clipped top edge — Texas's CTA shape. */
export function CTABanner({ heading, subheading, cta }: CTABannerProps) {
  return (
    <Section
      band="deep"
      style={{ clipPath: "polygon(0 3.5%, 100% 0, 100% 100%, 0 100%)" }}
    >
      <Container className="flex flex-col items-start gap-6 py-[clamp(64px,7vw,100px)]">
        <h2 className="max-w-[18ch] text-[clamp(28px,3.2vw,40px)] text-band-deep-text">
          {heading}
        </h2>
        {subheading ? (
          <p className="max-w-[48ch] text-[15px] normal-case text-band-deep-muted">
            {subheading}
          </p>
        ) : null}
        <Button href={cta.href} variant="primary" size="hero" arrow className="w-full sm:w-auto">
          {cta.label}
        </Button>
      </Container>
    </Section>
  );
}
