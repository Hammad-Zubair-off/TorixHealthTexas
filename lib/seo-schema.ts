import type { BreadcrumbItem } from "@/components/Hero";
import type { FAQItem } from "@/components/FAQAccordion";
import { siteContact } from "@/lib/site-contact";
import {
  absoluteSiteUrl,
  serviceArea,
  services,
  siteName,
  siteUrl,
} from "@/lib/site";

export const logoPath = "/brand/medical-billers-logo.png";

const areaServed = { "@type": "State", name: serviceArea };

const organizationRef = { "@type": "Organization", name: siteName, url: siteUrl };

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: absoluteSiteUrl(logoPath),
    email: siteContact.email.label,
    telephone: siteContact.phone.label,
    areaServed,
    knowsAbout: [
      ...Object.values(services).map((s) => s.label),
      "Texas Medicaid",
      "Medicare Part B",
      "Insurance eligibility verification",
      "Claim denial management",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteContact.phone.label,
      contactType: "customer service",
      email: siteContact.email.label,
      areaServed,
      availableLanguage: "English",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    publisher: organizationRef,
  };
}

export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: name,
    description,
    url: absoluteSiteUrl(path),
    provider: organizationRef,
    areaServed,
  };
}

export function faqPageSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/** Crumbs without a link (e.g. "Services") are display-only and left out of the schema. */
export function breadcrumbSchema(
  items: BreadcrumbItem[],
  currentPath: string,
) {
  const linked = items.filter(
    (item, index) => item.href || index === items.length - 1,
  );
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: linked.map((item, index) => {
      const isLast = index === linked.length - 1;
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        item: absoluteSiteUrl(isLast ? currentPath : item.href!),
      };
    }),
  };
}
