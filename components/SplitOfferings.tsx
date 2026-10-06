import { Button } from "@/components/Button";
import { Container, Kicker, Section } from "@/components/Container";

type SplitCard = {
  kicker: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
};

type SplitOfferingsProps = {
  heading: string;
  subheading: string;
  servicesCard: SplitCard;
  solutionsCard: SplitCard;
};

/** Full-bleed angular blocks with a clipped corner — Texas's split-offerings shape. */
export function SplitOfferings({
  heading,
  subheading,
  servicesCard,
  solutionsCard,
}: SplitOfferingsProps) {
  return (
    <Section band="paper" className="border-b border-divider">
      <Container className="py-[clamp(56px,6.5vw,92px)]">
        <h2 className="mb-3.5 max-w-[18ch] text-[clamp(28px,3vw,38px)] text-text">
          {heading}
        </h2>
        <p className="mb-10 max-w-[56ch] text-[15px] normal-case text-neutral-600">
          {subheading}
        </p>

        <div className="grid sm:grid-cols-2">
          <article
            className="flex flex-col bg-bg p-[32px] pt-[44px]"
            style={{ clipPath: "polygon(0 0, 92% 0, 100% 10%, 100% 100%, 0 100%)" }}
          >
            <Kicker className="mb-2">{servicesCard.kicker}</Kicker>
            <h3 className="mb-3 mt-2 text-[26px] text-text">{servicesCard.title}</h3>
            <p className="mb-6 flex-1 text-[14px] normal-case leading-[1.55] text-neutral-600">
              {servicesCard.description}
            </p>
            <Button href={servicesCard.cta.href} variant="primary" arrow className="self-start">
              {servicesCard.cta.label}
            </Button>
          </article>

          <article className="flex flex-col bg-band-deep p-[32px] pt-[44px]">
            <Kicker className="mb-2 text-white">{solutionsCard.kicker}</Kicker>
            <h3 className="mb-3 mt-2 text-[26px] text-band-deep-text">
              {solutionsCard.title}
            </h3>
            <p className="mb-6 flex-1 text-[14px] normal-case leading-[1.55] text-band-deep-muted">
              {solutionsCard.description}
            </p>
            <Button href={solutionsCard.cta.href} variant="secondary" className="self-start">
              {solutionsCard.cta.label}
            </Button>
          </article>
        </div>
      </Container>
    </Section>
  );
}
