import type { FAQItem } from "@/components/FAQAccordion";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { IconName } from "@/components/icons";
import { sharedFaqs } from "@/content/shared-faqs";
import { services } from "@/lib/site";

/** AR Follow-Up & Denial Management — aging AR, denials, appeals, and payment recovery. */
export const arFollowUpContent = {
  meta: {
    title: "AR Follow-Up & Denial Management",
    description:
      "AR follow-up and denial management for Texas practices: aging claims worked by dollar and deadline, denials fixed at the cause, appeals filed on time.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Services" },
      { label: services.arFollowUp.label },
    ],
    eyebrow: "AR Follow-Up",
    headline: "AR follow-up and denial management for unpaid claims.",
    subheadline:
      "Accounts receivable (AR) is the money payers and patients still owe you. The older a claim gets, the harder it is to collect, and once a payer's filing deadline passes it's gone. We work your unpaid and denied claims oldest and largest first, fix why they were denied, and file appeals before the deadline, inside the system you already use.",
    primaryCta: { label: "Request a Free AR Review", href: "/contact" },
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
    heading: "What AR follow-up includes",
    subheading:
      "From aging review through appeals, underpayments, patient balances and reporting, so money you're owed doesn't become a write-off.",
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
    heading: "AR follow-up questions",
    items: [
      {
        question: "Is AR follow-up a one-time cleanup or an ongoing service?",
        answer:
          "It can be either. Some practices need a one-time project to recover old claims, while others choose ongoing AR follow-up to keep aging balances under control.",
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
          "Yes. AR Follow-Up & Denial Management can run on its own while your current billing company or in-house team keeps submitting new claims.",
      },
      {
        question: "What's the difference between AR follow-up and Medical Billing?",
        answer:
          "Medical Billing runs day-to-day eligibility, claim submission, posting and patient billing. AR follow-up focuses on claims that are already unpaid or denied: working aging balances, fixing denials, filing appeals and recovering underpayments.",
      },
      {
        question: "How far back can outstanding claims be recovered?",
        answer:
          "It depends on each payer's filing and appeal deadlines, the claim's status and the documentation available. During your free AR review we'll tell you which balances can still be recovered.",
      },
      sharedFaqs.pricing,
    ] satisfies FAQItem[],
  },
  finalCta: {
    heading: "Stop letting unpaid claims slip away.",
    subheading:
      "Every aging claim is money your practice already earned. Bring your AR aging report and a recent month of denials, and we'll show you what can still be recovered.",
    cta: { label: "Request a Free AR Review", href: "/contact" },
  },
};
