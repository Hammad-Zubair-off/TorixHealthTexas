import type { BenefitItem } from "@/components/BenefitCards";
import type { FAQItem } from "@/components/FAQAccordion";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { ProcessStep } from "@/components/ProcessTimeline";
import type { IconName } from "@/components/icons";

/** Medical Coding service page — same component pattern as Medical Billing / RCM. */
export const medicalCodingContent = {
  meta: {
    title: "Medical Coding",
    description:
      "Torix Solutions provides ICD-10 and CPT medical coding for independent practices, with specialty-aware assignment, documentation queries when the note doesn't support the code, and handoff ready for claim submission.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Services" },
      { label: "Medical Coding" },
    ],
    eyebrow: "Healthcare Service",
    headline: "ICD-10 and CPT coding that holds up under scrutiny.",
    subheadline:
      "Torix Solutions assigns ICD-10 diagnosis and CPT procedure codes from your documentation, raises queries when the note doesn't support the code, and hands off submission-ready work so coding-related denials are caught before the claim goes out.",
    distinction:
      "Available on its own, or bundled with Medical Billing or full Revenue Cycle Management.",
    primaryCta: { label: "Book a Consultation", href: "/contact" },
    secondaryCta: {
      label: "See Medical Billing",
      href: "/services/medical-billing",
    },
    image: {
      src: "/brand/heroes/medical-coding.jpg",
      alt: "Clinician reviewing documentation with a patient using a digital tablet",
    },
  },
  overview: {
    heading: "What's included",
    subheading:
      "Four ways we cover coding accuracy, specialty context and how the service fits your engagement.",
    items: [
      {
        icon: "clipboard" as IconName,
        title: "ICD-10 Diagnosis Coding",
        description:
          "Diagnosis codes assigned from the clinical documentation, with queries raised when the note doesn't support the code you need on the claim.",
      },
      {
        icon: "fileText" as IconName,
        title: "CPT Procedure Coding",
        description:
          "Procedure and service codes selected to match what was performed, including modifiers and place of service where the documentation supports them.",
      },
      {
        icon: "layers" as IconName,
        title: "Specialty-Specific Coding",
        description:
          "Coding informed by the specialty you practice in, not a one-size-fits-all shortcut that ignores how your documentation actually reads.",
      },
      {
        icon: "handshake" as IconName,
        title: "Standalone or Bundled Service",
        description:
          "Engage coding on its own, or combine it with Medical Billing or Revenue Cycle Management when you want one team owning code assignment through claim follow-up.",
      },
    ] satisfies FeatureItem[],
  },
  problems: {
    heading: "Problems we solve",
    subheading:
      "Coding-specific risks that show up as denials, audit exposure or outdated code use.",
    items: [
      {
        icon: "alert" as IconName,
        title: "Coding-Related Claim Denials",
        description:
          "Denials driven by diagnosis–procedure mismatch, unsupported codes or missing modifiers that should have been caught before submission.",
      },
      {
        icon: "shield" as IconName,
        title: "Audit & Compliance Risk",
        description:
          "Codes that don't match the note create exposure when a payer or auditor asks you to prove medical necessity.",
      },
      {
        icon: "clock" as IconName,
        title: "Keeping Up with ICD-10 & CPT Updates",
        description:
          "Annual and mid-year code changes that leave practices coding against retired or incomplete sets.",
      },
    ] satisfies FeatureItem[],
  },
  process: {
    heading: "How accuracy is maintained",
    subheading:
      "Four steps from the note to a coding package ready for claim submission.",
    steps: [
      {
        title: "Documentation Review",
        description:
          "We read the note for what was assessed and performed, and flag gaps that would leave a code unsupported.",
      },
      {
        title: "Code Assignment (ICD-10 & CPT)",
        description:
          "Diagnosis and procedure codes assigned from the documentation, with specialty context and modifiers where supported.",
      },
      {
        title: "Internal Accuracy Review",
        description:
          "A second pass checks diagnosis–procedure alignment and whether the documentation actually backs each code.",
      },
      {
        title: "Submission-Ready Handoff",
        description:
          "Coded work handed to your billing team or to Torix billing/RCM so the claim can move without rework at the front of the queue.",
      },
    ] satisfies ProcessStep[],
  },
  benefits: {
    heading: "Benefits",
    subheading:
      "What accurate, compliance-focused coding changes for your claims and audit posture.",
    items: [
      {
        icon: "check" as IconName,
        title: "Fewer Coding-Related Denials",
        description:
          "Codes that match the note reduce the denials that come from mismatch, unsupported diagnoses or missing procedure detail.",
      },
      {
        icon: "shield" as IconName,
        title: "Reduced Audit Exposure",
        description:
          "Documentation-backed assignment makes it easier to defend medical necessity when a payer or auditor asks.",
      },
      {
        icon: "lock" as IconName,
        title: "Greater Compliance Confidence",
        description:
          "A consistent process for review, assignment and handoff so coding isn't improvised claim by claim.",
      },
    ] satisfies BenefitItem[],
  },
  whyUs: {
    heading: "Why choose us",
    subheading:
      "Expertise and handling standards that matter when coding accuracy is the product.",
    items: [
      {
        icon: "layers" as IconName,
        title: "Specialty-Aware Coding",
        description:
          "Assignment informed by how your specialty documents, not a generic checklist applied the same way to every practice.",
      },
      {
        icon: "shield" as IconName,
        title: "HIPAA-Compliant Documentation Handling",
        description:
          "A signed BAA before any PHI moves, with access control and audit logging for the documentation we code from.",
      },
      {
        icon: "mapPin" as IconName,
        title: "US-Based & In-Person Support",
        description:
          "Staffed in the United States, with a representative who can work through documentation questions with your clinicians when needed.",
      },
    ] satisfies FeatureItem[],
  },
  faqs: {
    heading: "Frequently asked questions",
    items: [
      {
        question: "Is coding available separately from full billing services?",
        answer:
          "Yes. Medical Coding can stand alone, or it can be bundled with Medical Billing or full Revenue Cycle Management. Scope is confirmed in writing before work starts.",
      },
      {
        question: "How do you stay current with ICD-10 and CPT code updates?",
        answer:
          "We track annual and mid-year ICD-10 and CPT updates and apply them in assignment and review so claims aren't built on retired or incomplete code sets.",
      },
      {
        question: "How does Medical Coding reduce audit risk?",
        answer:
          "We assign codes from the documentation and raise queries when the note doesn't support the code. That reduces unsupported coding, which is a common driver of payer and compliance scrutiny.",
      },
      {
        question:
          "What's the difference between Medical Coding and Medical Billing Audit?",
        answer:
          "Medical Coding assigns ICD-10 and CPT codes for claims, with documentation queries when needed. Medical Billing Audit is an independent review of documentation, coding and compliance, written to be useful whether or not you hire us for ongoing work afterwards.",
      },
      {
        question: "Do you code for all specialties or only specific ones?",
        answer:
          "We code across a wide range of specialties. During consultation we confirm specialty fit, documentation patterns and volume so the engagement matches how your practice actually works.",
      },
    ] satisfies FAQItem[],
  },
  finalCta: {
    heading: "Let's review how your notes support your codes.",
    subheading:
      "Bring a sample of recent documentation and denials. We'll show you where coding is costing you, whether or not you engage us.",
    cta: { label: "Book a Consultation", href: "/contact" },
  },
};
