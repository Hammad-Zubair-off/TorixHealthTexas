import type { FAQItem } from "@/components/FAQAccordion";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { ContactDetail } from "@/components/ContactPanel";
import type { ContactServiceOption } from "@/components/ContactForm";
import type { IconName } from "@/components/icons";
import { siteContact } from "@/lib/site-contact";

/** Contact Us page — form posts to `/api/contact` (Resend). */
export const contactContent = {
  meta: {
    title: "Contact Us",
    description:
      "Contact Torix Solutions for medical billing, healthcare software, revenue cycle management, and compliance questions. Book a consultation or send a message.",
  },
  panel: {
    heading: "Contact information",
    subheading: "Reach us directly, or send a message with the form.",
    // Office address — West Jordan, UT
    details: [
      {
        icon: "mapPin" as IconName,
        label: "Office Address",
        value: "7533 S Center View Ct Ste N, West Jordan, UT 84084",
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
      "Have a question or want to discuss your healthcare needs? Complete the form below, and a member of our team will get back to you as soon as possible.",
  },
  serviceOptions: [
    { value: "medical-billing", label: "Medical Billing Services" },
    { value: "medical-coding", label: "Medical Coding" },
    { value: "rcm", label: "Revenue Cycle Management (RCM)" },
    { value: "credentialing", label: "Credentialing and Contract" },
    { value: "medical-audit", label: "Medical Billing Audit" },
    { value: "ar-follow-up", label: "Accounts Receivable Operations" },
    { value: "billing-software", label: "Medical Billing Software" },
    { value: "healthcare-platform", label: "Healthcare Platform Solutions" },
    { value: "hipaa", label: "HIPAA-Focused Software & Compliance" },
    { value: "general", label: "General Questions & Support" },
  ] satisfies ContactServiceOption[],
  whyContact: {
    heading: "Why contact Torix Solutions?",
    subheading:
      "When you reach out to us, you'll connect with professionals who understand both healthcare operations and modern technology. We focus on delivering practical guidance, not sales pressure, so you can make informed decisions for your practice.",
    items: [
      {
        icon: "activity" as IconName,
        title: "Improving revenue cycle performance",
        description: "Talk through denials, A/R and where cash gets stuck.",
      },
      {
        icon: "fileText" as IconName,
        title: "Reducing billing inefficiencies",
        description: "Clarify scope between billing, coding, A/R and RCM.",
      },
      {
        icon: "monitor" as IconName,
        title: "Modernizing healthcare technology",
        description: "Discuss billing software, platform modules and integrations.",
      },
      {
        icon: "shield" as IconName,
        title: "Strengthening compliance practices",
        description: "Ask about HIPAA controls, BAAs and secure handling of PHI.",
      },
      {
        icon: "handshake" as IconName,
        title: "Technical and operational questions",
        description: "Get clear answers before you change vendors or systems.",
      },
    ] satisfies FeatureItem[],
  },
  faqs: {
    heading: "Frequently asked questions",
    items: [
      {
        question: "How quickly will I receive a response?",
        answer:
          "We aim to respond to all inquiries as quickly as possible during normal business hours.",
      },
      {
        question: "Do you offer consultations before getting started?",
        answer:
          "Yes. We offer consultations to better understand your needs and recommend the most appropriate solution.",
      },
      {
        question: "Can I request information about multiple services?",
        answer:
          "Absolutely. Whether you're interested in one service or a complete healthcare solution, we're happy to discuss your requirements.",
      },
      {
        question: "Do you work with practices of different sizes?",
        answer:
          "Yes. We support healthcare organizations ranging from independent practices to growing medical groups.",
      },
      {
        question: "Is my information kept confidential?",
        answer:
          "Yes. We treat all inquiries with professionalism and follow secure practices when handling information shared with us.",
      },
    ] satisfies FAQItem[],
  },
};
