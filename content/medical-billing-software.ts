import type { BenefitItem } from "@/components/BenefitCards";
import type { FAQItem } from "@/components/FAQAccordion";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { ProcessStep } from "@/components/ProcessTimeline";
import type { IconName } from "@/components/icons";
import { sharedFaqs } from "@/content/shared-faqs";
import { services } from "@/lib/site";

/** Medical Billing Software — offered only as a free part of the billing service. */
export const medicalBillingSoftwareContent = {
  meta: {
    title: "Free Medical Billing Software for Clients",
    description:
      "Medical billing software free with our billing service: see every claim, payment and denial in one place. Optional — we can also work in your current system.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Software" },
      { label: services.billingSoftware.label },
    ],
    eyebrow: "Free with billing",
    headline: "Free medical billing software for our billing clients.",
    subheadline:
      "When we run your billing, you can use our medical billing software at no extra cost. It shows what was submitted, what was paid and what is still outstanding, so you don't have to wait for a report or call us to find out where a claim stands.",
    distinction:
      "The software is not sold separately. It is free with the Medical Billing service, and using it is optional: we can also work inside the system you already have.",
    primaryCta: { label: "Book a Free Billing Review", href: "/contact" },
    secondaryCta: {
      label: "See Medical Billing",
      href: services.medicalBilling.href,
    },
    image: {
      src: "/brand/heroes/billing-software.jpg",
      alt: "Practice staff reviewing billing reports together on a laptop",
    },
  },
  features: {
    heading: "What the software does",
    subheading:
      "Four things that cut manual work and keep you informed about your billing.",
    items: [
      {
        icon: "activity" as IconName,
        title: "Claim Status at a Glance",
        description:
          "See which claims were submitted, paid, denied or are still waiting, without asking anyone for an update.",
      },
      {
        icon: "monitor" as IconName,
        title: "Works Alongside Your EHR",
        description:
          "Your clinical system stays as it is. During onboarding we confirm how billing information moves between your EHR and the software.",
      },
      {
        icon: "fileText" as IconName,
        title: "Readable Reports",
        description:
          "Reports on submissions, payments and outstanding balances written for practice owners, not raw data exports.",
      },
      {
        icon: "layers" as IconName,
        title: "Clear Next Steps",
        description:
          "Each open item shows what happens next and who owns it, so fewer claims stall because nobody picked them up.",
      },
    ] satisfies FeatureItem[],
  },
  problems: {
    heading: "Problems it solves",
    subheading: "The everyday billing friction the software is meant to remove.",
    items: [
      {
        icon: "clipboard" as IconName,
        title: "Manual Tracking",
        description:
          "Spreadsheets, sticky notes and payer portals used to track claims, which slows every claim down and invites mistakes.",
      },
      {
        icon: "layers" as IconName,
        title: "Disconnected Systems",
        description:
          "Scheduling, clinical and billing tools that don't talk to each other, leaving staff to re-type information.",
      },
      {
        icon: "eyeOff" as IconName,
        title: "No Visibility",
        description:
          "No clear view of what was submitted, what was paid and what is still sitting, until someone builds a report by hand.",
      },
    ] satisfies FeatureItem[],
  },
  process: {
    heading: "How setup works",
    subheading: "Five steps from looking at your current setup to going live.",
    steps: [
      {
        title: "Review Your Current Setup",
        description:
          "We look at how you bill today, which systems you use and whether the software would save your team time.",
      },
      {
        title: "Connect Your Systems",
        description:
          "We set up how billing information moves from your EHR or practice management system, without forcing you to replace it.",
      },
      {
        title: "Configure",
        description:
          "Users, reports and workflows set up for your specialty, volume and how your team works.",
      },
      {
        title: "Training & Go-Live",
        description:
          "Your staff are trained on the screens they'll use, then we go live with support during the first billing cycles.",
      },
      {
        title: "Ongoing Support",
        description:
          "Your named account representative remains your contact for questions about the software, just as for the billing.",
      },
    ] satisfies ProcessStep[],
  },
  benefits: {
    heading: "Benefits",
    subheading: "What changes when you can see your billing for yourself.",
    items: [
      {
        icon: "check" as IconName,
        title: "Less Manual Work",
        description:
          "Fewer repetitive entry and tracking tasks, so staff time goes to the exceptions that need a person.",
      },
      {
        icon: "activity" as IconName,
        title: "Faster Answers",
        description: "Check a claim's status yourself instead of waiting for a callback.",
      },
      {
        icon: "monitor" as IconName,
        title: "Clear Reporting",
        description:
          "See what moved, what paid and what is outstanding without a side project to interpret it.",
      },
      {
        icon: "layers" as IconName,
        title: "No Extra Cost",
        description:
          "Included free with the Medical Billing service. There is no separate license fee.",
      },
    ] satisfies BenefitItem[],
  },
  whyUs: {
    heading: "Why use our software",
    subheading: "Included with billing, protected, and supported by the same team.",
    items: [
      {
        icon: "check" as IconName,
        title: "Free With Billing",
        description:
          "The software comes at no extra cost with the Medical Billing service, and is not sold on its own.",
      },
      {
        icon: "shield" as IconName,
        title: "HIPAA-Compliant Handling",
        description:
          "Role-based access, audit logging and a signed BAA before any patient data moves through it.",
      },
      {
        icon: "monitor" as IconName,
        title: "Keep Your Current System",
        description:
          "Using the software is optional. The billing service works the same inside the system you already run.",
      },
      {
        icon: "handshake" as IconName,
        title: "One Point of Contact",
        description:
          "Your named account representative handles billing and software questions alike.",
      },
    ] satisfies FeatureItem[],
  },
  faqs: {
    heading: "Billing software questions",
    items: [
      {
        question: "Is the medical billing software really free?",
        answer:
          "Yes, for practices that use our Medical Billing service. It is included at no extra cost and is not sold as a standalone product.",
      },
      sharedFaqs.software,
      {
        question: "Does it work with my current EHR or practice management system?",
        answer:
          "Your EHR stays in place. During onboarding we review your systems and set up how billing information moves between them, rather than asking you to replace anything.",
      },
      {
        question: "Is patient and billing data secure?",
        answer:
          "Yes. Access is limited by role and logged, data is encrypted, and we sign a Business Associate Agreement before any patient data is shared.",
      },
      sharedFaqs.pricing,
    ] satisfies FAQItem[],
  },
  finalCta: {
    heading: "See the software during your billing review.",
    subheading:
      "We'll show you the software during your free billing review. You're under no obligation to change a system you already like.",
    cta: { label: "Book a Free Billing Review", href: "/contact" },
  },
};
