import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { buildPageMetadata, siteName } from "@/lib/site";
import { siteContact } from "@/lib/site-contact";

// DRAFT — not reviewed by a lawyer. noindex until approved text replaces it.
export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Use (Draft)",
  description: `Draft terms of use for the ${siteName} website, pending legal review: how the site may be used, what its content is and isn't, and how to contact us.`,
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      sections={[
        {
          heading: "Using this website",
          paragraphs: [
            `By using this website you agree to these terms. If you do not agree, please do not use the site.`,
          ],
        },
        {
          heading: "Information only",
          paragraphs: [
            "Content on this site is general information about medical billing and our services. It is not legal, tax or compliance advice for your practice.",
            "Payer rules, including Medicare and Texas Medicaid requirements, change over time. Confirm current requirements with the payer before relying on them.",
          ],
        },
        {
          heading: "Services",
          paragraphs: [
            `Billing services are provided only under a separate written agreement between ${siteName} and your practice. Nothing on this website creates a service agreement.`,
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            `The text, logo and design of this website belong to ${siteName}. Please don't copy them without permission.`,
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            `Questions about these terms: ${siteContact.email.label} or ${siteContact.phone.label}.`,
          ],
        },
      ]}
    />
  );
}
