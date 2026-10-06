import { Container, Section } from "@/components/Container";
import { Icon, type IconName } from "@/components/icons";
import { cn } from "@/lib/utils";

export type TrustItem = {
  icon: IconName;
  label: string;
  description?: string;
};

type TrustBarProps = {
  items: TrustItem[];
  /** Flat scoreboard strip matching Texas's brand mockup (Home). */
  variant?: "default" | "brand";
};

/** Flat scoreboard strip with vertical dividers — Texas's trust bar shape. */
export function TrustBar({ items, variant = "default" }: TrustBarProps) {
  if (variant === "brand") {
    return (
      <Section band="none" className="relative z-10 pb-6 md:pb-8">
        <Container>
          <ul className="m-0 grid list-none grid-cols-2 divide-x divide-y divide-white/15 border border-band-deep bg-band-deep text-band-deep-text sm:divide-y-0 md:grid-cols-4">
            {items.map((item) => (
              <li key={item.label} className="flex items-start gap-3 px-5 py-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-white/10 text-white">
                  <Icon name={item.icon} size={16} />
                </span>
                <div>
                  <span className="block text-[13px] font-semibold uppercase tracking-[0.04em] leading-snug text-white sm:text-[14px]">
                    {item.label}
                  </span>
                  {item.description ? (
                    <span className="mt-1 block text-[12px] normal-case leading-snug text-band-deep-muted">
                      {item.description}
                    </span>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    );
  }

  return (
    <Section band="paper" className="border-y border-divider">
      <Container className="p-0">
        <ul className="m-0 grid list-none grid-cols-1 divide-x divide-y divide-divider sm:grid-cols-2 md:grid-cols-4 md:divide-y-0">
          {items.map((item) => (
            <li key={item.label} className="flex items-start gap-3 px-5 py-6">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-accent text-white">
                <Icon name={item.icon} size={16} />
              </span>
              <div>
                <span className="block text-[13px] font-semibold uppercase tracking-[0.04em] text-text sm:text-[14px]">
                  {item.label}
                </span>
                {item.description ? (
                  <span className="mt-0.5 block text-[12px] normal-case leading-snug text-neutral-600">
                    {item.description}
                  </span>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
