import Link from "next/link";
import { Button } from "@/components/Button";
import { Container, Section } from "@/components/Container";
import { Icon } from "@/components/icons";

export type JobOpening = {
  title: string;
  description: string;
  location: string;
  employmentType: string;
  href?: string;
};

type JobOpeningsProps = {
  heading: string;
  subheading?: string;
  openings: JobOpening[];
  footerNote?: string;
  footerCta?: { label: string; href: string };
};

/** Careers job list — stacks on mobile, card grid on larger screens. */
export function JobOpenings({
  heading,
  subheading,
  openings,
  footerNote,
  footerCta,
}: JobOpeningsProps) {
  return (
    <Section band="paper" className="border-y border-divider">
      <Container className="py-[clamp(56px,6.5vw,92px)]">
        <h2 className="mb-3 max-w-[20ch] text-[clamp(26px,2.7vw,34px)] text-text">
          {heading}
        </h2>
        {subheading ? (
          <p className="mb-8 max-w-[56ch] text-[15px] text-neutral-600">{subheading}</p>
        ) : (
          <div className="mb-8" />
        )}

        <ul className="m-0 grid list-none gap-4 p-0 [grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr))]">
          {openings.map((job) => {
            const href = job.href ?? "/contact";
            return (
              <li key={job.title}>
                <article className="card-lift card-lift-light flex h-full flex-col rounded-md border border-divider bg-bg p-6">
                  <h3 className="mb-2 text-[18px] text-text">{job.title}</h3>
                  <p className="mb-4 flex-1 text-[14px] leading-[1.55] text-neutral-600">
                    {job.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-neutral-600">
                    <span className="inline-flex items-center gap-1.5">
                      <Icon name="mapPin" size={14} className="text-accent" />
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Icon name="clock" size={14} className="text-accent" />
                      {job.employmentType}
                    </span>
                  </div>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1 text-[13px] font-semibold text-accent-700 no-underline hover:text-accent"
                  >
                    Apply
                    <Icon name="arrowRight" size={14} />
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>

        {footerNote || footerCta ? (
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {footerNote ? (
              <p className="max-w-[48ch] text-[14px] text-neutral-600">{footerNote}</p>
            ) : (
              <span />
            )}
            {footerCta ? (
              <Button href={footerCta.href} variant="outline" arrow>
                {footerCta.label}
              </Button>
            ) : null}
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
