import { Container, Kicker, Section } from "@/components/Container";

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  heading: string;
  items: FAQItem[];
};

export function FAQAccordion({ heading, items }: FAQAccordionProps) {
  return (
    <Section band="tint">
      <Container className="py-[clamp(56px,6.5vw,92px)]">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.35fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <Kicker className="mb-4 text-accent">FAQ</Kicker>
            <h2 className="max-w-[14ch] text-[clamp(28px,3.2vw,40px)] leading-[1.15] text-text">
              {heading}
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {items.map((item) => (
              <details
                key={item.question}
                className="group border border-divider border-l-4 border-l-accent bg-band-paper px-5 transition-[box-shadow,border-color] duration-200 open:shadow-sm hover:border-l-accent-2"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[15px] font-medium text-text marker:content-none">
                  <span className="pr-2">{item.question}</span>
                  <span
                    aria-hidden
                    className="relative size-5 shrink-0 text-accent transition-transform duration-200 group-open:rotate-45"
                  >
                    <span className="absolute inset-x-[3px] top-1/2 h-[1.5px] -translate-y-1/2 rounded-full bg-current" />
                    <span className="absolute inset-y-[3px] left-1/2 w-[1.5px] -translate-x-1/2 rounded-full bg-current" />
                  </span>
                </summary>
                <p className="animate-[faqIn_220ms_ease-out] pb-5 pr-10 text-[14px] leading-[1.65] text-neutral-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
