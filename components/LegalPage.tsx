import { Container, Section } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

type LegalPageProps = {
  title: string;
  sections: LegalSection[];
};

/** Legal text shell. Pages using it are drafts until a lawyer approves them — keep the banner until then. */
export function LegalPage({ title, sections }: LegalPageProps) {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Section band="paper">
          <Container className="max-w-[760px] py-[clamp(56px,6.5vw,92px)]">
            <p
              role="note"
              className="mb-8 border-l-4 border-accent bg-accent-100 px-4 py-3 text-[14px] font-medium text-accent-800"
            >
              Draft — pending legal review. This text has not been approved by a
              lawyer and may change.
            </p>
            <h1 className="mb-8 text-[clamp(30px,3.6vw,44px)] leading-[1.1] text-text">
              {title}
            </h1>
            {sections.map((section) => (
              <section key={section.heading} className="mb-8">
                <h2 className="mb-3 text-[20px] text-text">{section.heading}</h2>
                {section.paragraphs.map((p) => (
                  <p key={p} className="mb-3 text-[15px] leading-[1.65] text-neutral-700">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
