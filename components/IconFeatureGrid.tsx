import Link from "next/link";
import { Container, Kicker, Section } from "@/components/Container";
import { Icon, type IconName } from "@/components/icons";
import { cn } from "@/lib/utils";

export type FeatureItem = {
  icon: IconName;
  title: string;
  description?: string;
  href?: string;
  /** Link label when `href` is set. Defaults to “Explore →”. */
  ctaLabel?: string;
};

type IconFeatureGridProps = {
  kicker?: string;
  heading: string;
  subheading?: string;
  footerNote?: string;
  items: FeatureItem[];
  variant?: "light" | "deep" | "open";
  band?: "bg" | "paper" | "tint" | "deep" | "none";
  /** @deprecated Prefer fixed responsive cols (1 / 2 / 3). Kept for call-site compat. */
  minCardWidth?: number;
  className?: string;
};

/** Squared cards with a thick left rule and a square icon badge — Texas's card shape. */
export function IconFeatureGrid({
  kicker,
  heading,
  subheading,
  footerNote,
  items,
  variant = "light",
  band = "bg",
  className,
}: IconFeatureGridProps) {
  const deep = variant === "deep";
  const open = variant === "open";

  return (
    <Section band={band} className={className}>
      <Container className="py-[clamp(56px,6.5vw,92px)]">
        {kicker ? (
          <Kicker className={cn("mb-3", deep && "text-accent-300")}>{kicker}</Kicker>
        ) : null}
        <h2
          className={cn(
            "mb-3 max-w-[22ch] text-[clamp(26px,2.7vw,34px)]",
            deep ? "text-band-deep-text" : "text-text",
          )}
        >
          {heading}
        </h2>
        {subheading ? (
          <p
            className={cn(
              "mb-10 max-w-[56ch] text-[15px] normal-case",
              deep ? "text-band-deep-muted" : "text-neutral-600",
            )}
          >
            {subheading}
          </p>
        ) : (
          <div className="mb-10" />
        )}

        <ul className="m-0 grid list-none grid-cols-1 gap-px bg-divider p-0 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const body = (
              <>
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className={cn(
                      "flex size-10 items-center justify-center",
                      deep ? "bg-white/10 text-accent-300" : "bg-accent text-white",
                    )}
                  >
                    <Icon name={item.icon} size={18} />
                  </span>
                  <span
                    className={cn(
                      "font-[family-name:var(--font-heading)] text-[22px] font-semibold",
                      deep ? "text-white/15" : "text-neutral-300",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3
                  className={cn(
                    "mb-2 text-[16px] normal-case",
                    deep ? "text-band-deep-text" : "text-text",
                    open && "text-[18px]",
                  )}
                >
                  {item.title}
                </h3>
                {item.description ? (
                  <p
                    className={cn(
                      "text-[13px] normal-case leading-[1.5]",
                      deep ? "text-band-deep-muted" : "text-neutral-600",
                    )}
                  >
                    {item.description}
                  </p>
                ) : null}
                {item.href ? (
                  <span
                    className={cn(
                      "mt-3 inline-flex text-[13px] font-semibold uppercase tracking-[0.04em]",
                      deep ? "text-accent-300" : "text-accent-700",
                    )}
                  >
                    {item.ctaLabel ?? "Explore →"}
                  </span>
                ) : null}
              </>
            );

            const cardClass = cn(
              "flex flex-col p-7 border-l-4",
              deep ? "border-accent-300" : "border-accent",
              open
                ? "bg-transparent p-0 sm:p-2 border-l-0"
                : deep
                  ? "bg-band-deep"
                  : "bg-band-paper",
            );

            return (
              <li key={item.title}>
                {item.href ? (
                  <Link href={item.href} className={cn(cardClass, "no-underline block h-full")}>
                    {body}
                  </Link>
                ) : (
                  <div className={cn(cardClass, "h-full")}>{body}</div>
                )}
              </li>
            );
          })}
        </ul>

        {footerNote ? (
          <p
            className={cn(
              "mt-8 max-w-[68ch] text-[14px] normal-case leading-[1.55]",
              deep ? "text-band-deep-muted" : "text-neutral-600",
            )}
          >
            {footerNote}
          </p>
        ) : null}
      </Container>
    </Section>
  );
}
