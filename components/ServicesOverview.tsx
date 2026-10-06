import Link from "next/link";
import { Button } from "@/components/Button";
import { Container, Kicker, Section } from "@/components/Container";
import { Icon, type IconName } from "@/components/icons";

export type OverviewCard = {
  icon: IconName;
  title: string;
  description: string;
  href: string;
  tag?: string;
  ctaLabel?: string;
};

type ServicesOverviewProps = {
  servicesHeading: string;
  servicesNote?: string;
  solutionsHeading: string;
  services: OverviewCard[];
  solutions: OverviewCard[];
};

/** Editorial numbered rows instead of a card grid — Texas's services shape. */
export function ServicesOverview({
  servicesHeading,
  servicesNote,
  solutionsHeading,
  services,
  solutions,
}: ServicesOverviewProps) {
  return (
    <>
      <Section band="tint" className="border-y border-accent-300">
        <Container className="py-[clamp(56px,6.5vw,92px)]">
          <Kicker className="mb-4">Services</Kicker>
          <h2 className="mb-10 max-w-[20ch] text-[clamp(26px,2.7vw,34px)] text-text">
            {servicesHeading}
          </h2>
          {servicesNote ? (
            <p className="mb-10 max-w-[56ch] text-[15px] normal-case text-neutral-600">
              {servicesNote}
            </p>
          ) : null}
          <ul className="m-0 flex list-none flex-col border-t border-divider p-0">
            {services.map((item, index) => (
              <li key={item.href} className="border-b border-divider">
                <Link
                  href={item.href}
                  className="group flex flex-col gap-4 py-6 no-underline sm:flex-row sm:items-center sm:gap-8"
                >
                  <span className="font-[family-name:var(--font-heading)] text-[32px] font-semibold leading-none text-accent-300 sm:w-[64px] sm:shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex size-10 shrink-0 items-center justify-center bg-accent text-white">
                    <Icon name={item.icon} size={18} />
                  </span>
                  <span className="flex-1">
                    <span className="block text-[18px] normal-case text-text">
                      {item.title}
                    </span>
                    <span className="block text-[13px] normal-case text-neutral-600">
                      {item.description}
                    </span>
                  </span>
                  <span className="inline-flex shrink-0 items-center gap-1 text-[13px] font-semibold uppercase tracking-[0.04em] text-accent-700">
                    {item.ctaLabel ?? item.title}
                    <Icon
                      name="arrowRight"
                      size={14}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section band="deep">
        <Container className="py-[clamp(56px,6.5vw,92px)]">
          <Kicker className="mb-4 text-accent-300">Solutions</Kicker>
          <h2 className="mb-10 max-w-[20ch] text-[clamp(26px,2.7vw,34px)] text-band-deep-text">
            {solutionsHeading}
          </h2>
          <ul className="m-0 flex list-none flex-col border-t border-white/15 p-0">
            {solutions.map((item, index) => (
              <li key={item.href} className="border-b border-white/15">
                <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:gap-8">
                  <span className="font-[family-name:var(--font-heading)] text-[32px] font-semibold leading-none text-white/15 sm:w-[64px] sm:shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex size-10 shrink-0 items-center justify-center bg-white/10 text-accent-300">
                    <Icon name={item.icon} size={18} />
                  </span>
                  <span className="flex-1">
                    {item.tag ? (
                      <span className="mb-1 inline-flex w-fit bg-accent-300/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.06em] text-accent-300">
                        {item.tag}
                      </span>
                    ) : null}
                    <span className="block text-[18px] normal-case text-band-deep-text">
                      {item.title}
                    </span>
                    <span className="block text-[13px] normal-case text-band-deep-muted">
                      {item.description}
                    </span>
                  </span>
                  <Button href={item.href} variant="secondary" className="shrink-0">
                    {item.ctaLabel ?? "Explore"}
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
