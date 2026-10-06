import type { FAQItem } from "@/components/FAQAccordion";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { IconName } from "@/components/icons";

/** Accounts Receivable Operations — aging AR, denials, appeals, and payment recovery. */
export const arFollowUpContent = {
  meta: {
    title: "Accounts Receivable Operations",
    description:
      "Torix Solutions handles AR follow-up, denial resolution, appeals and payment recovery — working inside the system you already use, with a named representative you can call.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Services" },
      { label: "Accounts Receivable Operations" },
    ],
    eyebrow: "Healthcare Service",
    headline: "Aging balances worked — denials fixed, payments recovered.",
    subheadline:
      "We handle AR follow-up, denial resolution, appeals and payment recovery for your practice, working inside the system you already use, with a named representative you can call.",
    primaryCta: { label: "Request an A/R Assessment", href: "/contact" },
    secondaryCta: {
      label: "See Medical Billing",
      href: "/services/medical-billing",
    },
    image: {
      src: "/brand/heroes/ar-follow-up.jpg",
      alt: "Team reviewing insurance and analysis documents around a conference table",
    },
  },
  howItWorks: {
    heading: "How it works",
    subheading:
      "Aging review through appeals, underpayments, patient balances, and reporting — so outstanding revenue doesn't become a write-off.",
    footerNote:
      "This service focuses on recovering outstanding balances and resolving denials. For day-to-day claim submission, see Medical Billing. For the full cash path across registration through collections, see Revenue Cycle Management.",
    items: [
      {
        icon: "clock" as IconName,
        title: "Aging AR Review",
        description:
          "Claims are worked by aging bucket (0-30, 31-60, 61-90, 90+ days), with the oldest and highest-dollar claims prioritized first so nothing crosses the timely-filing deadline.",
      },
      {
        icon: "alert" as IconName,
        title: "Root-Cause Denial Analysis",
        description:
          "Every denial is categorized (eligibility, authorization, coding, medical necessity, duplicate, timely filing, etc.) so we fix the actual problem instead of just resubmitting and getting denied again.",
      },
      {
        icon: "headphones" as IconName,
        title: "Payer Follow-Up Calls",
        description:
          "Outbound calls and portal checks directly with insurance carriers to get real claim status, not just automated EOB codes.",
      },
      {
        icon: "fileText" as IconName,
        title: "Appeals and Reconsiderations",
        description:
          "For wrongful or underpaid denials, we draft and submit appeal letters with supporting documentation (medical records, notes, payer policy citations) to overturn the decision.",
      },
      {
        icon: "activity" as IconName,
        title: "Underpayment Identification",
        description:
          "Claims paid below the contracted rate are flagged and pursued for the difference, not written off.",
      },
      {
        icon: "clipboard" as IconName,
        title: "Resubmission of Corrected Claims",
        description:
          "Coding or data errors get fixed and refiled fast, before the timely-filing window closes.",
      },
      {
        icon: "users" as IconName,
        title: "Patient Responsibility Follow-Up",
        description:
          "Where balances shift to the patient, we handle statements and follow-up communication so that revenue doesn't get lost either.",
      },
      {
        icon: "monitor" as IconName,
        title: "Reporting",
        description:
          "You get visibility into AR aging trends, denial rates by payer, and recovery totals, so you know exactly what's being collected and why claims were denied in the first place.",
      },
    ] satisfies FeatureItem[],
  },
  faqs: {
    heading: "Frequently asked questions",
    items: [
      {
        question:
          "Is Accounts Receivable Operations a one-time cleanup or an ongoing service?",
        answer:
          "It can be either. Some practices need a one-time recovery project, while others choose ongoing A/R management to keep aging balances under control.",
      },
      {
        question:
          "Do you follow up on patient balances as well as insurance claims?",
        answer:
          "Yes. We manage both insurance follow-up and patient balance recovery while maintaining professional communication and compliance.",
      },
      {
        question:
          "Can I use this service without switching my medical billing provider?",
        answer:
          "Yes. Accounts Receivable Operations can often be provided as a standalone service depending on your practice's needs.",
      },
      {
        question:
          "What's the difference between Accounts Receivable Operations and Medical Billing?",
        answer:
          "Medical Billing runs day-to-day eligibility, claim submission, posting and patient billing. Accounts Receivable Operations focuses on aging balances, denial resolution, appeals, underpayments and recovery of outstanding claims.",
      },
      {
        question: "How far back can outstanding claims be recovered?",
        answer:
          "Recovery opportunities vary depending on payer requirements, claim status, filing deadlines, and documentation. During your A/R assessment, we'll identify which balances remain recoverable.",
      },
    ] satisfies FAQItem[],
  },
  finalCta: {
    heading: "Stop letting outstanding revenue slip away.",
    subheading:
      "Every aging claim represents revenue your practice has already earned. Bring your A/R ageing and a recent month of denials — we'll show you what is still recoverable.",
    cta: { label: "Request an A/R Assessment", href: "/contact" },
  },
};
