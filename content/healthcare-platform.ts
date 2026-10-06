import type { FAQItem } from "@/components/FAQAccordion";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { ProcessStep } from "@/components/ProcessTimeline";
import type { IconName } from "@/components/icons";

/** Healthcare Platform solution page — unified in-house ecosystem. */
export const healthcarePlatformContent = {
  meta: {
    title: "Healthcare Platform",
    description:
      "Torix Solutions Healthcare Platform: EHR, EMR, practice management, patient portal, telehealth, mobile access and specialty workflows connected under one login. Built and maintained in house.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Solutions" },
      { label: "Healthcare Platform" },
    ],
    eyebrow: "Healthcare Technology",
    headline: "One connected healthcare ecosystem.",
    subheadline:
      "Torix Solutions Healthcare Platform brings clinical operations, practice management, patient engagement and telehealth together under one login, so your team is not stitching five vendors into one workday.",
    distinction:
      "A unified platform, built and maintained in house, not a bundle of disconnected apps with a shared logo.",
    primaryCta: { label: "Request a Platform Demo", href: "/contact" },
    secondaryCta: {
      label: "See Medical Billing Software",
      href: "/solutions/medical-billing-software",
    },
    image: {
      src: "/brand/heroes/healthcare-platform.jpg",
      alt: "Stethoscope beside a laptop representing connected healthcare technology",
    },
  },
  overview: {
    kicker: "Platform overview",
    heading: "Shared data. One workflow.",
    description:
      "Every module shares the same patient and operational data, which cuts duplicate entry and keeps clinical, administrative and patient-facing work on one connected path instead of parallel systems that drift apart.",
    highlights: [
      {
        icon: "layers" as IconName,
        label: "Clinical, admin and patient modules on one platform",
      },
      {
        icon: "activity" as IconName,
        label: "Fewer handoffs that require re-keying the same information",
      },
      {
        icon: "users" as IconName,
        label: "A consistent patient record across the care team",
      },
    ],
    cta: { label: "Request a Platform Demo", href: "/contact" },
  },
  capabilities: {
    heading: "Core platform capabilities",
    subheading:
      "The major operational pieces practices need, designed to work together rather than as separate products.",
    items: [
      {
        icon: "monitor" as IconName,
        title: "Electronic Health Records (EHR)",
        description:
          "Clinical documentation and charting in the same ecosystem as scheduling and billing-adjacent workflows.",
      },
      {
        icon: "clipboard" as IconName,
        title: "Electronic Medical Records (EMR)",
        description:
          "Encounter-focused records kept consistent with the rest of the patient history on the platform.",
      },
      {
        icon: "building" as IconName,
        title: "Practice Management System (PMS)",
        description:
          "Scheduling, demographics and front-office operations connected to clinical and patient modules.",
      },
      {
        icon: "users" as IconName,
        title: "Patient Portal",
        description:
          "Patient access for engagement tasks that belong with the same record your staff already uses.",
      },
      {
        icon: "activity" as IconName,
        title: "Telehealth",
        description:
          "Virtual visits that sit inside the platform workflow instead of a separate tool with a separate chart.",
      },
      {
        icon: "layers" as IconName,
        title: "Mobile Access",
        description:
          "Mobile EHR and practice access so the same connected record is available away from the desk.",
      },
      {
        icon: "handshake" as IconName,
        title: "Specialty Solutions",
        description:
          "Specialty and deployment patterns, including chronic care and public-sector needs, under the same login model.",
        href: "/solutions/hipaa-compliant-software",
        ctaLabel: "Learn more →",
      },
    ] satisfies FeatureItem[],
  },
  unified: {
    heading: "Why choose a unified platform",
    subheading:
      "What changes when clinical, admin and patient tools stop living in separate silos.",
    items: [
      {
        icon: "layers" as IconName,
        title: "Eliminate Disconnected Systems",
        description:
          "Replace vendor sprawl with one platform so staff are not logging into a different system for every step.",
      },
      {
        icon: "clipboard" as IconName,
        title: "Reduce Manual Data Entry",
        description:
          "Shared data across modules means demographics and clinical updates are entered once, not three times.",
      },
      {
        icon: "fileText" as IconName,
        title: "Maintain Consistent Patient Records",
        description:
          "One record of truth for the care team, front desk and patient-facing channels.",
      },
      {
        icon: "users" as IconName,
        title: "Improve Team Collaboration",
        description:
          "Clinical and administrative staff work from the same connected workflow instead of emailing screenshots between tools.",
      },
    ] satisfies FeatureItem[],
  },
  process: {
    heading: "How onboarding works",
    subheading:
      "A structured path from assessment through go-live so migration is planned, not improvised.",
    steps: [
      {
        title: "Needs Assessment",
        description:
          "We map specialties, current systems, must-have modules and what a realistic first scope looks like.",
      },
      {
        title: "Platform Demonstration",
        description:
          "A walkthrough of the modules that matter for your practice, not a generic tour of everything at once.",
      },
      {
        title: "Migration & Integration Planning",
        description:
          "Data migration and any required integrations planned before cutover, with clear owners and sequencing.",
      },
      {
        title: "Staff Onboarding & Training",
        description:
          "Training matched to roles so clinicians, front desk and admins know the workflows they will use daily.",
      },
      {
        title: "Go-Live & Ongoing Support",
        description:
          "Live support through go-live, then ongoing US-based support as you expand modules or refine workflows.",
      },
    ] satisfies ProcessStep[],
  },
  whyUs: {
    heading: "Why choose our platform",
    subheading:
      "In-house ownership, specialty fit and compliance standards for a clinical platform.",
    items: [
      {
        icon: "code" as IconName,
        title: "Built & Maintained In-House",
        description:
          "Software written and maintained by Torix, not a white-labelled stack with our name on the login screen.",
      },
      {
        icon: "layers" as IconName,
        title: "Specialty-Focused Healthcare Workflows",
        description:
          "Workflows shaped around how specialties actually chart and operate, not a one-size clinic template.",
      },
      {
        icon: "shield" as IconName,
        title: "HIPAA-Compliant Platform",
        description:
          "Role-based access, audit logging and a signed BAA before PHI moves. Documented controls, not a badge alone.",
        href: "/solutions/hipaa-compliant-software",
        ctaLabel: "Learn more →",
      },
      {
        icon: "mapPin" as IconName,
        title: "US-Based Support Team",
        description:
          "Support staffed in the United States, with people who understand healthcare workflows, not only generic tickets.",
      },
    ] satisfies FeatureItem[],
  },
  faqs: {
    heading: "Frequently asked questions",
    items: [
      {
        question:
          "Is this a single platform or multiple connected applications?",
        answer:
          "It is one platform with shared data and one login model. Modules cover clinical, practice management and patient-facing work, but they are designed as one ecosystem rather than separate products glued together after the fact.",
      },
      {
        question:
          "Can I implement only one module instead of the entire platform?",
        answer:
          "Yes. Many practices start with the modules they need first and expand later. Scope is confirmed during assessment so you are not forced into a full rip-and-replace on day one.",
      },
      {
        question: "Does it integrate with my existing healthcare systems?",
        answer:
          "Where integrations are required, we plan them during migration and integration planning. The goal is a connected workflow, not leaving you with another isolated silo.",
      },
      {
        question: "What does the migration process look like?",
        answer:
          "After assessment and demo, we plan data migration and cutover sequencing, train staff by role, then support go-live. Timelines depend on current systems and how many modules are in the first release.",
      },
      {
        question: "Is patient data secure and HIPAA compliant?",
        answer:
          "Yes. The platform is operated under HIPAA-compliant controls, including access control and audit logging, with a signed Business Associate Agreement before PHI is exchanged. See our HIPAA-Compliant Software page for more detail.",
      },
      {
        question: "Is mobile access included?",
        answer:
          "Yes. Mobile access is part of the platform capability set so the same connected record is available away from the desktop workstation.",
      },
    ] satisfies FAQItem[],
  },
  finalCta: {
    heading: "See the full platform in one demo.",
    subheading:
      "Walk through the modules that match your specialty and how shared data changes the workday. No obligation to replace every system at once.",
    cta: { label: "Request a Platform Demo", href: "/contact" },
  },
};
