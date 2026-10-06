import type { FAQItem } from "@/components/FAQAccordion";
import type { OverviewCard } from "@/components/ServicesOverview";
import type { TrustItem } from "@/components/TrustBar";
import type { IconName } from "@/components/icons";

/** Homepage copy from referenceUI Nocturne Light, with em-dash phrasing cleaned up. */
export const homeContent = {
  meta: {
    title: "Medical Billing & Healthcare Technology",
    description:
      "Underpayments and slow follow-up are quietly draining your collections. Torix Solutions fixes that. Our team of billing experts handles your entire revenue cycle — accurate medical coding, credentialing with the insurances you actually bill, timely claims submission, and relentless follow-up on every unpaid claim. The result: faster reimbursements, fewer denials, and more of what you've earned actually landing in your account.",
  },
  hero: {
    eyebrow: "US-based billing operations & healthcare technology",
    headline: "A billing partner you can count on.",
    highlightWord: "count on.",
    subheadline:
      "Underpayments and slow follow-up are quietly draining your collections. Torix Solutions fixes that. Our team of billing experts handles your entire revenue cycle — accurate medical coding, credentialing with the insurances you actually bill, timely claims submission, and relentless follow-up on every unpaid claim. The result: faster reimbursements, fewer denials, and more of what you've earned actually landing in your account.",
    primaryCta: { label: "Book a Consultation", href: "/contact" },
    secondaryCta: {
      label: "See how billing works",
      href: "/services/medical-billing",
    },
    consultationNote:
      "A consultation is a conversation about your current denials and A/R. Not a sales call.",
  },
  trust: [
    {
      icon: "users" as IconName,
      label: "100+ Satisfied Providers",
      description: "Across the USA",
    },
    {
      icon: "shield" as IconName,
      label: "99% Clean Claims Rate",
      description: "Higher first-pass success",
    },
    {
      icon: "clock" as IconName,
      label: "25+ Specialties Supported",
      description: "Broad experience",
    },
    {
      icon: "headphones" as IconName,
      label: "US-Based Support Team",
      description: "Real people. Real support.",
    },
  ] satisfies TrustItem[],
  split: {
    heading: "Two things we do, kept separate on purpose.",
    subheading:
      "Operational services and technology products are different commitments with different buyers. We don't blur them.",
    servicesCard: {
      kicker: "Healthcare Services",
      title: "We run the billing operation",
      description:
        "Claims, coding, credentialing, audits and full revenue cycle management, performed by our team on your behalf.",
      cta: { label: "Explore Services", href: "/services/medical-billing" },
    },
    solutionsCard: {
      kicker: "Healthcare Technology",
      title: "We build the software",
      description:
        "Telehealth, patient portal, EHR and EMR, practice management, and billing automation: one connected system rather than five vendors.",
      cta: { label: "Explore Solutions", href: "/solutions/healthcare-platform" },
    },
  },
  overview: {
    servicesHeading: "Healthcare services",
    servicesNote:
      "Services are work we do on your behalf. Every engagement is assigned a named representative before it starts.",
    solutionsHeading: "Software we wrote, not software we resell.",
    services: [
      {
        icon: "fileText",
        title: "Medical Billing",
        description:
          "Full-cycle billing from scheduling to final insurance and patient payment — eligibility, claims, posting, and patient balances handled end to end.",
        href: "/services/medical-billing",
        ctaLabel: "Medical Billing",
      },
      {
        icon: "activity",
        title: "Revenue Cycle Management",
        description:
          "Everything working together from patient scheduling to final payment — so nothing falls through the cracks between coding, claims, credentialing, and collections.",
        href: "/services/revenue-cycle-management",
        ctaLabel: "Revenue Cycle Management",
      },
      {
        icon: "clipboard",
        title: "Medical Coding",
        description:
          "ICD-10 and CPT assignment at the point of entry, with documentation queries raised when the note doesn't support the code.",
        href: "/services/medical-coding",
        ctaLabel: "Medical Coding",
      },
      {
        icon: "check",
        title: "Medical Billing Audit",
        description:
          "Revenue cycle KPIs, denial patterns, and provider productivity — analyzed against benchmarks with corrective actions you can act on.",
        href: "/services/medical-audit",
        ctaLabel: "Medical Billing Audit",
      },
      {
        icon: "activity",
        title: "Accounts Receivable Operations",
        description:
          "AR follow-up, denial resolution, appeals and payment recovery — worked inside your system, with a named representative you can call.",
        href: "/services/ar-follow-up",
        ctaLabel: "Accounts Receivable Operations",
      },
      {
        icon: "building",
        title: "Credentialing and Contract",
        description:
          "Get enrolled with the insurances that matter, keep CAQH current, and renew credentials before you lose network status.",
        href: "/services/credentialing",
        ctaLabel: "Credentialing and Contract",
      },
    ] satisfies OverviewCard[],
    solutions: [
      {
        icon: "monitor",
        title: "Medical Billing Software",
        description:
          "Bundled at no cost with the Medical Billing service. Less manual entry, shorter billing cycles, and reporting you can actually read. Includes a free EHR and free practice management.",
        href: "/solutions/medical-billing-software",
        tag: "Free",
        ctaLabel: "Request a Demo",
      },
      {
        icon: "layers",
        title: "Healthcare Platform",
        description:
          "EHR, EMR, practice management, specialty and mobile EHR, patient portal, telehealth, chronic care management and public sector deployments, connected under one login.",
        href: "/solutions/healthcare-platform",
        tag: "Flagship",
        ctaLabel: "Request a Platform Demo",
      },
      {
        icon: "lock",
        title: "HIPAA-Compliant Software",
        description:
          "Role-based access control, audit logging, encryption in transit and at rest, and a signed Business Associate Agreement. Documented in detail rather than asserted in a badge.",
        href: "/solutions/hipaa-compliant-software",
        tag: "Compliance",
        ctaLabel: "Read the detail",
      },
    ] satisfies OverviewCard[],
  },
  faqs: {
    heading: "Questions we get asked first",
    items: [
      {
        question:
          "What's the difference between Medical Billing and Revenue Cycle Management?",
        answer:
          "Medical Billing is the claim: coded, scrubbed, submitted, posted, and reworked when it's denied. Revenue Cycle Management starts earlier and ends later: eligibility at registration, charge capture, the claim, then patient statements and collections.",
      },
      {
        question: "Will switching billing partners interrupt our cash flow?",
        answer:
          "We run a parallel period with your current process. Your existing submissions keep going while we take over queue by queue, and legacy A/R is worked rather than abandoned.",
      },
      {
        question: "Do you sign a Business Associate Agreement?",
        answer:
          "Yes, and before any protected health information is exchanged. The HIPAA Compliance page sets out how PHI is stored, logged and transmitted.",
      },
      {
        question: "Do we have to use your software?",
        answer:
          "No. The billing service works with the system you already run. The free Medical Billing Software is offered alongside it, and the Healthcare Platform is a separate decision you can make later or never.",
      },
    ] satisfies FAQItem[],
  },
  virtualAssistantFaqs: {
    heading: "Virtual Assistant FAQs",
    items: [
      {
        question: "What tasks can Torix Solutions Virtual Assistants handle?",
        answer:
          "Our virtual assistants can support administrative and healthcare-related workflows such as scheduling, patient communication, data entry, insurance verification, documentation support, and other routine administrative tasks.",
      },
      {
        question: "Can I hire a Virtual Assistant specifically for my medical practice?",
        answer:
          "Yes. Virtual Assistant support can be tailored to your practice's workflow, specialty, administrative needs, and day-to-day workload.",
      },
      {
        question: "How can a Virtual Assistant help reduce my staff's workload?",
        answer:
          "A dedicated Virtual Assistant can handle time-consuming administrative tasks, allowing your in-house team to focus more on patients, providers, and higher-priority responsibilities.",
      },
    ] satisfies FAQItem[],
  },
  finalCta: {
    heading: "Start with a conversation about your current billing.",
    subheading:
      "Bring a recent remittance and your A/R ageing. We'll tell you what we'd change, whether or not you engage us.",
    cta: { label: "Book a Consultation", href: "/contact" },
  },
};
