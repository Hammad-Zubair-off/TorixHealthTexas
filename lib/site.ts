import type { Metadata } from "next";

/** Live production origin — override with NEXT_PUBLIC_SITE_URL for local/staging. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.medicalbillerstexas.com"
).replace(/\/$/, "");

export const siteName = "Medical Billers";

/** Area served — the site describes no physical office, only the state it serves. */
export const serviceArea = "Texas";

export const defaultDescription =
  "Medical billing services for Texas practices: claims, coding, AR follow-up and credentialing, with a signed BAA and a named account representative.";

/** One label per service, used by nav, footer, cards, forms and schema. */
export const services = {
  medicalBilling: { label: "Medical Billing", href: "/services/medical-billing" },
  rcm: { label: "Revenue Cycle Management", href: "/services/revenue-cycle-management" },
  medicalCoding: { label: "Medical Coding", href: "/services/medical-coding" },
  medicalAudit: { label: "Medical Billing Audit", href: "/services/medical-audit" },
  arFollowUp: { label: "AR Follow-Up & Denial Management", href: "/services/ar-follow-up" },
  credentialing: { label: "Credentialing & Contracting", href: "/services/credentialing" },
  billingSoftware: { label: "Medical Billing Software", href: "/solutions/medical-billing-software" },
  hipaaSoftware: { label: "HIPAA-Compliant Software", href: "/solutions/hipaa-compliant-software" },
} as const;

export const ogImagePath = "/brand/medical-billers-og.png";

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalized === "/" ? "" : normalized}` || siteUrl;
}

/** Shared page metadata: canonical, Open Graph, Twitter, optional noindex. */
export function buildPageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: BuildPageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return {
    title,
    description,
    alternates: {
      canonical: url || siteUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: url || siteUrl,
      siteName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: ogImagePath,
          width: 1200,
          height: 630,
          alt: `${siteName} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImagePath],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function absoluteSiteUrl(path = "/") {
  return absoluteUrl(path);
}
