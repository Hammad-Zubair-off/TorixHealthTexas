import { Container, Kicker, Section } from "@/components/Container";
import { cn } from "@/lib/utils";

type ProseSectionProps = {
  kicker?: string;
  heading: string;
  paragraphs: string[];
  band?: "bg" | "paper" | "tint" | "wash" | "none";
  className?: string;
};

/** Multi-paragraph story / mission-style copy block. */
export function ProseSection({
  kicker,
  heading,
  paragraphs,
  band = "paper",
  className,
}: ProseSectionProps) {
  return (
    <Section band={band} className={className}>
      <Container className="py-[clamp(56px,6.5vw,92px)]">
        {kicker ? <Kicker className="mb-3">{kicker}</Kicker> : null}
        <h2 className="mb-6 max-w-[20ch] text-[clamp(26px,2.7vw,34px)] text-text">
          {heading}
        </h2>
        <div className="flex max-w-[68ch] flex-col gap-4">
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 48)}
              className={cn("text-[16px] leading-[1.65] text-neutral-700")}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </Section>
  );
}
