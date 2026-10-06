import { Container, Section } from "@/components/Container";
import { Icon, type IconName } from "@/components/icons";

export type ProcessStep = {
  title: string;
  description: string;
  icon?: IconName;
};

type ProcessTimelineProps = {
  heading: string;
  subheading?: string;
  steps: ProcessStep[];
};

const DEFAULT_ICONS: IconName[] = [
  "headphones",
  "shield",
  "monitor",
  "clipboard",
  "handshake",
  "lock",
  "users",
  "fileText",
];

/** Rectangular filmstrip with chevron connectors — Texas's process shape. */
export function ProcessTimeline({
  heading,
  subheading,
  steps,
}: ProcessTimelineProps) {
  return (
    <Section band="paper">
      <Container className="py-[clamp(56px,6.5vw,92px)]">
        <h2 className="mb-3 text-[clamp(14px,1.35vw,16px)] font-semibold uppercase tracking-[0.16em] text-text">
          {heading}
        </h2>
        {subheading ? (
          <p className="mb-12 max-w-[52ch] text-[15px] normal-case text-neutral-600">
            {subheading}
          </p>
        ) : (
          <div className="mb-12" />
        )}

        <ol className="m-0 flex list-none flex-col gap-px overflow-hidden bg-divider border border-divider p-0 lg:flex-row">
          {steps.map((step, index) => {
            const icon = step.icon ?? DEFAULT_ICONS[index % DEFAULT_ICONS.length];
            const isLast = index === steps.length - 1;

            return (
              <li
                key={step.title}
                className="relative flex flex-1 flex-col gap-3 bg-band-paper p-5"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-2 top-2 font-[family-name:var(--font-heading)] text-[34px] font-semibold leading-none text-neutral-200 select-none"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="relative flex size-10 items-center justify-center bg-accent text-white">
                  <Icon name={icon} size={18} className="text-white" />
                </span>

                <h3 className="relative text-[15px] normal-case font-semibold text-text">
                  {step.title}
                </h3>
                <p className="relative text-[13px] normal-case leading-relaxed text-neutral-600">
                  {step.description}
                </p>

                {!isLast ? (
                  <span
                    aria-hidden
                    className="absolute -right-[10px] top-1/2 z-10 hidden -translate-y-1/2 text-accent lg:block"
                  >
                    <Icon name="arrowRight" size={18} />
                  </span>
                ) : null}
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
