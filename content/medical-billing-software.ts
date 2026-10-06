import type { BenefitItem } from "@/components/BenefitCards";
import type { FAQItem } from "@/components/FAQAccordion";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { ProcessStep } from "@/components/ProcessTimeline";
import type { IconName } from "@/components/icons";

/** Medical Billing Software solution page — in-house billing automation platform. */
export const medicalBillingSoftwareContent = {
  meta: {
    title: "Medical Billing Software",
    description:
      "Torix Solutions Medical Billing Software: in-house billing automation with EHR and practice management integration, workflow automation and reporting you can read. Bundled at no cost with the Medical Billing service.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Solutions" },
      { label: "Medical Billing Software" },
    ],
    eyebrow: "Healthcare Technology",
    headline: "Billing automation built in house, not resold.",
    subheadline:
      "Torix Solutions Medical Billing Software streamlines billing workflows, connects to the systems you already run, and gives you reporting you can actually read. Less manual entry, shorter billing cycles, and visibility into what moved and what didn't.",
    distinction:
      "Available as part of the Medical Billing service, bundled at no cost. Adopting the software is optional if you prefer to keep your current stack.",
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: {
      label: "See Medical Billing",
      href: "/services/medical-billing",
    },
    image: {
      src: "/brand/heroes/billing-software.jpg",
      alt: "Team reviewing healthcare billing software together on a laptop",
    },
  },
  features: {
    heading: "What the software does",
    subheading:
      "Four capabilities that reduce manual work and keep billing connected to the rest of the practice.",
    items: [
      {
        icon: "activity" as IconName,
        title: "Automated Billing Workflows",
        description:
          "Repeatable billing steps handled in software so staff spend less time on re-keying and chasing the same handoffs.",
      },
      {
        icon: "monitor" as IconName,
        title: "EHR & Practice Management Integration",
        description:
          "Connects with the EHR and practice management tools you already use, so billing isn't trapped in a separate island.",
      },
      {
        icon: "fileText" as IconName,
        title: "Billing Reports & Analytics",
        description:
          "Reporting on submissions, payments and outstanding work written to be readable, not a dump of unusable exports.",
      },
      {
        icon: "layers" as IconName,
        title: "Workflow Automation",
        description:
          "Status and next steps surfaced in the workflow so fewer claims stall because someone lost track of ownership.",
      },
    ] satisfies FeatureItem[],
  },
  problems: {
    heading: "Problems it solves",
    subheading:
      "The operational friction billing software is meant to remove.",
    items: [
      {
        icon: "clipboard" as IconName,
        title: "Manual Billing Processes",
        description:
          "Re-keying, spreadsheet tracking and portal hopping that slow every claim and invite avoidable errors.",
      },
      {
        icon: "layers" as IconName,
        title: "Disconnected Healthcare Systems",
        description:
          "Clinical, scheduling and billing tools that don't share a clean path, so staff become the integration layer.",
      },
      {
        icon: "eyeOff" as IconName,
        title: "Limited Billing Visibility",
        description:
          "No clear view of what was submitted, what paid and what is still sitting, until someone builds a report by hand.",
      },
    ] satisfies FeatureItem[],
  },
  process: {
    heading: "How it works",
    subheading:
      "Five steps from assessing your current stack through go-live and ongoing support.",
    steps: [
      {
        title: "Current System Assessment",
        description:
          "We review how you bill today, which systems you run and where automation would remove the most manual work.",
      },
      {
        title: "Integration Setup",
        description:
          "Connections configured to your EHR and practice management environment without forcing a rip-and-replace.",
      },
      {
        title: "Platform Configuration",
        description:
          "Workflows, users and reporting set up for your specialty, volume and how your team actually works.",
      },
      {
        title: "Training & Go-Live",
        description:
          "Your staff trained on the workflows they'll use daily, then cut over with support during the first live cycles.",
      },
      {
        title: "Ongoing Support",
        description:
          "Product support continues after go-live so issues in the workflow can be fixed by the same company that built the software.",
      },
    ] satisfies ProcessStep[],
  },
  benefits: {
    heading: "Benefits",
    subheading:
      "What changes when billing runs on automation instead of manual handoffs.",
    items: [
      {
        icon: "check" as IconName,
        title: "Reduced Manual Work",
        description:
          "Fewer repetitive entry and tracking tasks so billing time goes to exceptions that actually need a person.",
      },
      {
        icon: "activity" as IconName,
        title: "Faster Billing Operations",
        description:
          "Shorter cycles from charge-ready to submitted, with less waiting on spreadsheet status.",
      },
      {
        icon: "monitor" as IconName,
        title: "Clear Reporting & Insights",
        description:
          "Dashboards and reports that show what moved, what paid and what is outstanding without a side project to interpret them.",
      },
      {
        icon: "layers" as IconName,
        title: "Connected Healthcare Workflows",
        description:
          "Billing stays linked to the clinical and practice systems you already rely on.",
      },
    ] satisfies BenefitItem[],
  },
  whyUs: {
    heading: "Why choose our software",
    subheading:
      "In-house ownership, compliance and support that matter for billing systems.",
    items: [
      {
        icon: "code" as IconName,
        title: "Built & Maintained In-House",
        description:
          "Software written and maintained by Torix, not a white-labelled third-party product with a logo swap.",
      },
      {
        icon: "shield" as IconName,
        title: "HIPAA-Compliant Platform",
        description:
          "Access control, audit logging and a signed BAA before PHI moves through the platform.",
      },
      {
        icon: "monitor" as IconName,
        title: "Flexible EHR & PM System Integration",
        description:
          "Designed to work with the systems you already run. The billing service is not conditioned on replacing your stack.",
      },
      {
        icon: "handshake" as IconName,
        title: "Continuous Product Support",
        description:
          "Ongoing support from the team that builds the product, so workflow issues and product fixes stay in one place.",
      },
    ] satisfies FeatureItem[],
  },
  faqs: {
    heading: "Frequently asked questions",
    items: [
      {
        question:
          "Is the Medical Billing Software included with your billing services?",
        answer:
          "Yes. It is bundled at no cost with the Medical Billing service. Adopting it is optional: the billing service can also work inside the system you already run.",
      },
      {
        question:
          "Does it integrate with my current EHR or Practice Management system?",
        answer:
          "Yes. Integration is part of onboarding. We assess your current stack and configure connections rather than requiring you to rip and replace everything on day one.",
      },
      {
        question: "What reporting and analytics are available?",
        answer:
          "Billing reports and analytics cover submissions, payments and outstanding work, written to be readable for practice leadership and the billing team. Exact views are configured during platform setup.",
      },
      {
        question: "Is patient and billing data secure?",
        answer:
          "Yes. The platform is operated under HIPAA-compliant controls, including role-based access and audit logging, with a signed Business Associate Agreement before PHI is exchanged.",
      },
      {
        question: "How long does implementation take?",
        answer:
          "Timelines depend on your current systems, integrations and how much configuration your specialty needs. During assessment we set a realistic path through setup, training and go-live.",
      },
      {
        question: "Do you provide ongoing technical support?",
        answer:
          "Yes. Continuous product support is part of the offering. Because we build the software in house, support and product changes stay with the same company.",
      },
    ] satisfies FAQItem[],
  },
  finalCta: {
    heading: "See the billing software in a demo.",
    subheading:
      "Walk through workflows, reporting and how it sits beside Medical Billing. No obligation to change systems you already like.",
    cta: { label: "Request a Demo", href: "/contact" },
  },
};
