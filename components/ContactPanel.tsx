import { ContactForm, type ContactServiceOption } from "@/components/ContactForm";
import { Container, Section } from "@/components/Container";
import { Icon, type IconName } from "@/components/icons";

export type ContactDetail = {
  icon: IconName;
  label: string;
  value: string;
  href?: string;
};

type ContactPanelProps = {
  heading: string;
  subheading?: string;
  details: ContactDetail[];
  hours: { label: string; value: string }[];
  formHeading: string;
  formIntro?: string;
  serviceOptions: ContactServiceOption[];
};

/** Two-column contact info + form; stacks on mobile. */
export function ContactPanel({
  heading,
  subheading,
  details,
  hours,
  formHeading,
  formIntro,
  serviceOptions,
}: ContactPanelProps) {
  return (
    <Section band="paper" className="border-y border-divider" id="get-in-touch">
      <Container className="grid gap-10 py-[clamp(56px,6.5vw,92px)] lg:grid-cols-2 lg:gap-14">
        <div>
          <h2 className="mb-3 max-w-[16ch] text-[clamp(26px,2.7vw,34px)] text-text">
            {heading}
          </h2>
          {subheading ? (
            <p className="mb-8 max-w-[42ch] text-[15px] text-neutral-600">
              {subheading}
            </p>
          ) : null}

          <ul className="m-0 mb-8 flex list-none flex-col gap-5 p-0">
            {details.map((item) => (
              <li key={item.label} className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-100 text-accent">
                  <Icon name={item.icon} size={18} />
                </span>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-neutral-500">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-[15px] font-medium text-text no-underline hover:text-accent-700"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[15px] font-medium text-text">{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div>
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.06em] text-neutral-500">
              Business Hours
            </p>
            <ul className="m-0 flex list-none flex-col gap-2 p-0">
              {hours.map((row) => (
                <li
                  key={row.label}
                  className="flex flex-wrap items-baseline justify-between gap-2 border-b border-divider py-2 text-[14px] last:border-b-0"
                >
                  <span className="text-neutral-600">{row.label}</span>
                  <span className="font-medium text-text">{row.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-lg border border-divider bg-bg p-5 shadow-sm sm:p-7">
          <h3 className="mb-2 text-[22px] text-text">{formHeading}</h3>
          {formIntro ? (
            <p className="mb-6 text-[14px] leading-[1.55] text-neutral-600">
              {formIntro}
            </p>
          ) : (
            <div className="mb-6" />
          )}
          <ContactForm serviceOptions={serviceOptions} />
        </div>
      </Container>
    </Section>
  );
}
