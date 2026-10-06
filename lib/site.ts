import type { Metadata } from "next";

/** Live production origin — override with NEXT_PUBLIC_SITE_URL for local/staging. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.torixhealth.com"
).replace(/\/$/, "");

export const siteName = "Torix Solutions";

export const defaultDescription =
  "Torix Solutions handles medical billing, coding, credentialing, and revenue cycle management so practices get paid faster with fewer denials.";

export const ogImagePath = "/brand/torix-logo-mark.png";

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
          width: 365,
          height: 431,
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
