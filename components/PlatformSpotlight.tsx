import Link from "next/link";
import { Container, Kicker, Section } from "@/components/Container";
import { Icon, type IconName } from "@/components/icons";

type PlatformSpotlightProps = {
  kicker?: string;
  heading: string;
  description?: string;
  highlights: Array<{ icon: IconName; label: string }>;
  cta: { label: string; href: string };
};

export function PlatformSpotlight({
  kicker = "Healthcare Platform",
  heading,
  description,
  highlights,
  cta,
}: PlatformSpotlightProps) {
  return (
    <Section band="deep">
      <Container className="grid items-center gap-10 py-[clamp(56px,6.5vw,92px)] [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
        <div>
          <Kicker className="mb-3 text-accent-300">{kicker}</Kicker>
          <h2 className="mb-4 max-w-[18ch] text-[clamp(26px,2.7vw,34px)] text-band-deep-text">
            {heading}
          </h2>
          {description ? (
            <p className="mb-6 max-w-[46ch] text-[15px] leading-[1.6] text-band-deep-muted">
              {description}
            </p>
          ) : null}
          <ul className="m-0 flex list-none flex-col gap-4 p-0">
            {highlights.map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <Icon name={item.icon} size={20} className="mt-0.5 text-accent-300" />
                <span className="text-[15px] text-band-deep-text">{item.label}</span>
              </li>
            ))}
          </ul>
          <Link
            href={cta.href}
            className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-accent-300 no-underline hover:text-band-deep-text"
          >
            {cta.label}
            <Icon name="arrowRight" size={16} />
          </Link>
        </div>
        <div
          className="min-h-[200px] rounded-lg border border-white/10 bg-white/5 p-6"
          aria-hidden="true"
        >
          <div className="mb-4 h-3 w-1/3 rounded-sm bg-accent-300/40" />
          <div className="mb-2 h-2.5 w-4/5 rounded-sm bg-white/15" />
          <div className="mb-2 h-2.5 w-3/5 rounded-sm bg-white/10" />
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="aspect-square rounded-md border border-white/10 bg-white/5" />
            <div className="aspect-square rounded-md border border-white/10 bg-white/5" />
            <div className="aspect-square rounded-md border border-white/10 bg-white/5" />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="h-10 rounded-md border border-white/10 bg-white/5" />
            <div className="h-10 rounded-md border border-white/10 bg-white/5" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
