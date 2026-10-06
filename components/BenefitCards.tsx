import { Container, Section } from "@/components/Container";
import { Icon, type IconName } from "@/components/icons";

export type BenefitItem = {
  icon: IconName;
  title: string;
  description: string;
};

type BenefitCardsProps = {
  heading: string;
  subheading?: string;
  footerNote?: string;
  items: BenefitItem[];
};

/** Flat spec-sheet grid with ruled dividers — Texas's benefit-card shape. */
export function BenefitCards({
  heading,
  subheading,
  footerNote,
  items,
}: BenefitCardsProps) {
  return (
    <Section band="paper">
      <Container className="py-[clamp(56px,6.5vw,92px)]">
        <h2 className="mb-3 max-w-[20ch] text-[clamp(26px,2.7vw,34px)] text-text">
          {heading}
        </h2>
        {subheading ? (
          <p className="mb-8 max-w-[56ch] text-[15px] normal-case text-neutral-600">
            {subheading}
          </p>
        ) : (
          <div className="mb-8" />
        )}
        <ul className="m-0 grid list-none grid-cols-1 gap-px bg-divider border border-divider p-0 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <li key={item.title} className="bg-band-paper">
              <div className="flex h-full flex-col p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center bg-accent text-white">
                    <Icon name={item.icon} size={18} />
                  </span>
                  <span className="font-[family-name:var(--font-heading)] text-[13px] font-semibold uppercase tracking-[0.08em] text-neutral-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mb-2 text-[17px] normal-case text-text">{item.title}</h3>
                <p className="text-[14px] normal-case leading-[1.55] text-neutral-600">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
        {footerNote ? (
          <p className="mt-8 max-w-[68ch] text-[14px] normal-case leading-[1.55] text-neutral-600">
            {footerNote}
          </p>
        ) : null}
      </Container>
    </Section>
  );
}
