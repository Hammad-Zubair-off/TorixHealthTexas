import { Button } from "@/components/Button";
import { Container, Section } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Icon } from "@/components/icons";

type ComingSoonProps = {
  /** Feature or page name shown in the headline. */
  feature: string;
  description?: string;
  /** Optional eyebrow above the headline. */
  eyebrow?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

/**
 * Full-page shell for routes that are linked but not built yet.
 * Swap the page body for real content when the feature ships.
 */
export function ComingSoon({
  feature,
  description = "This page is in progress. In the meantime, you can book a consultation or return home.",
  eyebrow = "Coming soon",
  primaryCta = { label: "Book a Consultation", href: "/contact" },
  secondaryCta = { label: "Back to Home", href: "/" },
}: ComingSoonProps) {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Section band="wash">
          <Container className="flex flex-col items-start py-[clamp(72px,10vw,120px)] md:items-center md:text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent-300 bg-band-paper px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-accent-700 shadow-sm">
              <Icon name="clock" size={14} className="text-accent" />
              {eyebrow}
            </span>
            <h1 className="mb-4 max-w-[18ch] text-[clamp(32px,4vw,48px)] leading-[1.08] text-text">
              {feature} is on the way.
            </h1>
            <p className="mb-8 max-w-[46ch] text-[17px] leading-[1.6] text-neutral-700">
              {description}
            </p>
            <div className="flex flex-wrap items-center gap-3.5">
              <Button href={primaryCta.href} variant="primary" size="hero" arrow>
                {primaryCta.label}
              </Button>
              <Button href={secondaryCta.href} variant="outline" size="hero">
                {secondaryCta.label}
              </Button>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
