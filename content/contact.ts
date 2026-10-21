import type { FAQItem } from "@/components/FAQAccordion";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { ContactDetail } from "@/components/ContactPanel";
import type { ContactServiceOption } from "@/components/ContactForm";
import type { IconName } from "@/components/icons";
import { sharedFaqs } from "@/content/shared-faqs";
import { serviceArea, services } from "@/lib/site";
import { siteContact } from "@/lib/site-contact";

/** Contact Us page — form posts to `/api/contact`. No office address is published; the site only states its service area. */
export const contactContent = {
  meta: {
    title: "Contact Us About Medical Billing in Texas",
    description:
      "Contact Medical Billers to book a free billing review for your Texas practice. Call, email or send a message, and a member of our billing team replies.",
  },
  panel: {
    heading: "Contact us about medical billing in Texas",
    subheading:
      "Call, email or send a message. Tell us about your practice and what's going wrong with billing, and we'll set up a free review.",
    details: [
      {
        icon: "mapPin" as IconName,
        label: "Service area",
        value: `Serving ${serviceArea} practices`,
      },
      {
        icon: "headphones" as IconName,
        label: "Phone",
        value: siteContact.phone.label,
        href: siteContact.phone.href,
      },
      {
        icon: "fileText" as IconName,
        label: "Email",
        value: siteContact.email.label,
        href: siteContact.email.href,
      },
    ] satisfies ContactDetail[],
    hours: [
      { label: "Monday – Friday", value: "9:00 AM – 6:00 PM" },
      { label: "Saturday & Sunday", value: "Closed" },
    ],
    formHeading: "Send us a message",
    formIntro:
      "Tell us about your practice and what you need help with. A member of our billing team will get back to you during business hours.",
  },
  serviceOptions: [
    { value: "medical-billing", label: services.medicalBilling.label },
    { value: "rcm", label: services.rcm.label },
    { value: "medical-coding", label: services.medicalCoding.label },
    { value: "ar-follow-up", label: services.arFollowUp.label },
    { value: "credentialing", label: services.credentialing.label },
    { value: "medical-audit", label: services.medicalAudit.label },
    { value: "billing-software", label: services.billingSoftware.label },
    { value: "hipaa", label: services.hipaaSoftware.label },
    { value: "general", label: "General Question" },
  ] satisfies ContactServiceOption[],
  whyContact: {
    heading: "What we can help with",
    subheading:
      "You'll talk to someone who works on billing every day. No sales pressure, just practical answers so you can decide what's right for your practice.",
    items: [
      {
        icon: "activity" as IconName,
        title: "Unpaid & denied claims",
        description: "Talk through denials, AR and where payments are getting stuck.",
      },
      {
        icon: "fileText" as IconName,
        title: "Choosing the right service",
        description: "Work out whether you need billing, coding, AR follow-up or full RCM.",
      },
      {
        icon: "building" as IconName,
        title: "Credentialing problems",
        description: "Get help with Medicare, Texas Medicaid or commercial enrollment.",
      },
      {
        icon: "shield" as IconName,
        title: "HIPAA & BAAs",
        description: "Ask how we protect patient data and when the BAA is signed.",
      },
      {
        icon: "handshake" as IconName,
        title: "Switching billing companies",
        description: "Find out how the handover works without interrupting cash flow.",
      },
    ] satisfies FeatureItem[],
  },
  faqs: {
    heading: "Contact questions",
    items: [
      {
        question: "How quickly will I hear back?",
        answer:
          "We reply to messages during business hours, Monday to Friday. If it's urgent, calling is the fastest way to reach us.",
      },
      {
        question: "Is the billing review really free?",
        answer:
          "Yes. We look at a recent remittance and your unpaid claims and tell you what we'd change. There's no charge and no obligation to hire us.",
      },
      sharedFaqs.pricing,
      sharedFaqs.switching,
      {
        question: "Do you work with practices of different sizes?",
        answer:
          "Yes. We work with solo providers and with growing groups. The scope and price are set for your practice's volume and payer mix.",
      },
      {
        question: "Is the information I send kept confidential?",
        answer:
          "Yes. Please don't include patient information in the contact form; we'll set up a secure way to share it once a BAA is signed.",
      },
    ] satisfies FAQItem[],
  },
};
