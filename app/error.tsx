"use client";

import { useEffect } from "react";
import { Button } from "@/components/Button";
import { Container, Section } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Section band="wash">
          <Container className="flex flex-col items-start py-[clamp(72px,10vw,120px)] md:items-center md:text-center">
            <span className="mb-5 inline-flex rounded-full border border-accent-300 bg-band-paper px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-accent-700 shadow-sm">
              Something went wrong
            </span>
            <h1 className="mb-4 max-w-[16ch] text-[clamp(28px,3.5vw,40px)] leading-[1.1] text-text">
              We hit an unexpected error.
            </h1>
            <p className="mb-8 max-w-[44ch] text-[16px] leading-[1.6] text-neutral-700">
              Try again in a moment. If it keeps happening, head home or get in
              touch and we’ll help from there.
            </p>
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center justify-center gap-1.5 rounded-md border border-transparent bg-accent px-7 py-3.5 text-[15px] font-semibold text-white shadow-[var(--shadow-accent)] transition-[transform,box-shadow,background-color] duration-[160ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-accent-700 hover:shadow-[var(--shadow-accent-lg)] active:translate-y-0 active:scale-[0.98]"
              >
                Try again
              </button>
              <Button href="/" variant="outline" size="hero">
                Back to Home
              </Button>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
