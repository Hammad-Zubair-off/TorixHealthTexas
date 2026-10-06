import { Button } from "@/components/Button";
import { Container, Section } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

type NotFoundViewProps = {
  title?: string;
  description?: string;
};

export function NotFoundView({
  title = "Page not found",
  description = "That link doesn’t lead anywhere on this site. Head home, or book a consultation if you were looking for help with billing.",
}: NotFoundViewProps) {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Section band="wash">
          <Container className="flex flex-col items-start py-[clamp(72px,10vw,120px)] md:items-center md:text-center">
            <p
              className="mb-4 font-[family-name:var(--font-heading)] text-[clamp(56px,8vw,88px)] font-semibold leading-none tracking-[-0.04em] text-accent"
              aria-hidden="true"
            >
              404
            </p>
            <h1 className="mb-4 max-w-[16ch] text-[clamp(28px,3.5vw,40px)] leading-[1.1] text-text">
              {title}
            </h1>
            <p className="mb-8 max-w-[44ch] text-[16px] leading-[1.6] text-neutral-700">
              {description}
            </p>
            <div className="flex flex-wrap items-center gap-3.5">
              <Button href="/" variant="primary" size="hero" arrow>
                Back to Home
              </Button>
              <Button href="/contact" variant="outline" size="hero">
                Contact Us
              </Button>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
