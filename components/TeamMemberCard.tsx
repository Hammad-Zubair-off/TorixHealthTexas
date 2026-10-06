import Link from "next/link";
import { cn } from "@/lib/utils";

export type MemberCard = {
  name: string;
  role: string;
  bio?: string;
  photoSrc?: string;
  href?: string;
};

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function TeamMemberCard({ name, role, bio, photoSrc, href }: MemberCard) {
  const inner = (
    <>
      <div className="mb-4 aspect-[4/5] w-full overflow-hidden rounded-md border border-divider bg-neutral-200 transition-[border-color,box-shadow] duration-200 group-hover:border-accent-300 group-hover:shadow-md">
        {photoSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photoSrc}
            alt=""
            className="h-full w-full object-cover transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[linear-gradient(150deg,var(--color-accent-100),var(--band-paper)_70%)]">
            <span className="font-[family-name:var(--font-heading)] text-[28px] font-semibold tracking-wide text-accent-700">
              {initials(name)}
            </span>
          </div>
        )}
      </div>
      <h3 className="mb-1 text-[16px] text-text transition-colors duration-200 group-hover:text-accent-700">
        {name}
      </h3>
      <p className="text-[13px] text-neutral-600">{role}</p>
      {bio ? (
        <p className="mt-2 text-[13px] leading-snug text-neutral-600">{bio}</p>
      ) : null}
    </>
  );

  const className = cn("card-lift group block");

  if (href) {
    return (
      <Link href={href} className={cn(className, "no-underline")}>
        {inner}
      </Link>
    );
  }
  return <article className={className}>{inner}</article>;
}
