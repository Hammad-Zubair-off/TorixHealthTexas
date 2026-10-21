import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { buildPageMetadata, siteName } from "@/lib/site";
import { siteContact } from "@/lib/site-contact";

// DRAFT — not reviewed by a lawyer. noindex until approved text replaces it.
export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy (Draft)",
  description: `Draft privacy policy for ${siteName}, pending legal review: what we collect through this website, how we use it, and how to contact us about it.`,
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      sections={[
        {
          heading: "Scope",
          paragraphs: [
            `This policy describes how ${siteName} handles information submitted through this website. Protected health information we receive as a billing vendor is governed by HIPAA and by the Business Associate Agreement signed with each practice, not by this policy.`,
          ],
        },
        {
          heading: "Information we collect",
          paragraphs: [
            "When you use our contact or quote forms, we collect the details you enter, such as your name, practice name and address, email, phone number, specialty, NPI and the EHR you use.",
            "Please do not send patient information through this website.",
          ],
        },
        {
          heading: "How we use it",
          paragraphs: [
            "We use form information to respond to your inquiry, to prepare a billing review or quote, and, where you have agreed, to send you information about our services by email or text message.",
          ],
        },
        {
          heading: "Sharing",
          paragraphs: [
            "We do not sell your information. We share it only with service providers that help us operate this website and deliver email, and where required by law.",
          ],
        },
        {
          heading: "Your choices",
          paragraphs: [
            "You can ask us to update or delete the information you submitted, or to stop sending marketing messages, at any time.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            `Questions about this policy: ${siteContact.email.label} or ${siteContact.phone.label}.`,
          ],
        },
      ]}
    />
  );
}
