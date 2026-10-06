import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "nav" | "footer" | "header";
} & React.HTMLAttributes<HTMLElement>;

export function Container({
  children,
  className,
  as: Tag = "div",
  ...rest
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[1280px] px-[clamp(24px,4vw,44px)]",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  band?: "bg" | "paper" | "tint" | "deep" | "wash" | "none";
  style?: React.CSSProperties;
};

const bands: Record<NonNullable<SectionProps["band"]>, string> = {
  none: "",
  bg: "bg-bg",
  paper: "bg-band-paper",
  tint: "bg-band-tint",
  deep: "bg-band-deep text-band-deep-text",
  wash: "bg-[linear-gradient(115deg,var(--color-bg)_58%,color-mix(in_srgb,var(--color-accent)_9%,var(--color-bg))_58.4%,color-mix(in_srgb,var(--color-accent)_9%,var(--color-bg))_100%)]",
};

export function Section({
  children,
  className,
  id,
  band = "bg",
  style,
}: SectionProps) {
  return (
    <section id={id} className={cn(bands[band], className)} style={style}>
      {children}
    </section>
  );
}

export function Kicker({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[11px] font-medium uppercase tracking-[0.08em] text-accent-700",
        className,
      )}
    >
      {children}
    </p>
  );
}
