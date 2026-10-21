import type { BenefitItem } from "@/components/BenefitCards";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { JobOpening } from "@/components/JobOpenings";
import type { ProcessStep } from "@/components/ProcessTimeline";
import type { IconName } from "@/components/icons";
import { services, siteName } from "@/lib/site";

/** Careers — billing roles and how we work. */
export const careersContent = {
  meta: {
    title: "Medical Billing & Coding Careers",
    description:
      "Medical billing and coding careers at Medical Billers: work on claims, coding, AR follow-up and credentialing for Texas practices on a US-based team.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Careers" },
    ],
    eyebrow: "Careers",
    headline: "Medical billing and coding careers.",
    subheadline:
      "Our team gets Texas practices paid for the care they provide. If you're good with claims, codes and payers, and you care about getting the details right, we'd like to hear from you.",
    distinction:
      "Experienced billers and coders, and people early in their billing career, are both welcome to apply.",
    primaryCta: { label: "See the Roles", href: "#openings" },
    secondaryCta: { label: "Send Your Resume", href: "/contact" },
    image: {
      src: "/brand/heroes/careers.jpg",
      alt: "Medical billing team working together",
    },
  },
  whyJoin: {
    heading: `Why work at ${siteName}?`,
    subheading: "Billing work that matters to the practices we serve.",
    items: [
      {
        icon: "activity" as IconName,
        title: "Work That Gets Practices Paid",
        description:
          "Every claim you fix or appeal you win is money a practice earned and would otherwise lose.",
      },
      {
        icon: "layers" as IconName,
        title: "Grow Across the Revenue Cycle",
        description:
          "Build skills in coding, payment posting, AR follow-up, denials and credentialing, not just one queue.",
      },
      {
        icon: "users" as IconName,
        title: "A Team That Shares Knowledge",
        description:
          "Payer rules change constantly. We share what we learn so nobody figures it out alone.",
      },
      {
        icon: "shield" as IconName,
        title: "Do It Properly",
        description:
          "Clean claims, accurate codes and careful handling of patient data are the standard, not a nice-to-have.",
      },
    ] satisfies FeatureItem[],
  },
  whatWeDo: {
    heading: "What our team works on",
    subheading: "Every role supports one or more of these services.",
    items: [
      { icon: "fileText" as IconName, title: services.medicalBilling.label, href: services.medicalBilling.href, ctaLabel: "Learn more →" },
      { icon: "activity" as IconName, title: services.rcm.label, href: services.rcm.href, ctaLabel: "Learn more →" },
      { icon: "clipboard" as IconName, title: services.medicalCoding.label, href: services.medicalCoding.href, ctaLabel: "Learn more →" },
      { icon: "clock" as IconName, title: services.arFollowUp.label, href: services.arFollowUp.href, ctaLabel: "Learn more →" },
      { icon: "building" as IconName, title: services.credentialing.label, href: services.credentialing.href, ctaLabel: "Learn more →" },
      { icon: "check" as IconName, title: services.medicalAudit.label, href: services.medicalAudit.href, ctaLabel: "Learn more →" },
    ] satisfies FeatureItem[],
  },
  life: {
    heading: `Working at ${siteName}`,
    paragraphs: [
      "Billing is detail work. We give people the time, training and support to do it properly, and we treat questions as part of the job rather than a sign of weakness.",
      "Each practice has a named account representative, so you always know who owns an account and who to ask.",
    ],
  },
  culture: {
    heading: "How we work",
    items: [
      { icon: "check" as IconName, title: "Accuracy", description: "We get claims right the first time." },
      { icon: "handshake" as IconName, title: "Ownership", description: "We follow through for practices and teammates." },
      { icon: "clipboard" as IconName, title: "Continuous Learning", description: "We keep up with payer and coding changes." },
      { icon: "shield" as IconName, title: "Privacy", description: "We handle patient data with care, every time." },
      { icon: "users" as IconName, title: "Teamwork", description: "We share knowledge instead of hoarding it." },
      { icon: "headphones" as IconName, title: "Clear Communication", description: "We tell practices what's happening, good or bad." },
    ] satisfies FeatureItem[],
  },
  benefits: {
    heading: "What we offer",
    subheading: `What teammates get at ${siteName}.`,
    items: [
      { icon: "check" as IconName, title: "Competitive Pay", description: "Pay that reflects the skill and responsibility of the role." },
      { icon: "clipboard" as IconName, title: "Training", description: "Training on payer rules, coding updates and HIPAA." },
      { icon: "activity" as IconName, title: "Career Growth", description: "Room to take on more as your skills grow." },
      { icon: "users" as IconName, title: "Supportive Team", description: "Colleagues who answer questions and share what works." },
    ] satisfies BenefitItem[],
  },
  openings: {
    heading: "Roles we hire for",
    subheading:
      "Openings change as we grow. Send your resume for any of these roles and we'll tell you what's currently open.",
    footerNote: "Don't see your role? We'd still like to hear from you.",
    footerCta: { label: "Send Your Resume", href: "/contact" },
    items: [
      {
        title: "Medical Billing Specialist",
        description:
          "Charge entry, claim submission, payment posting and patient balances for client practices.",
        location: "United States",
        employmentType: "Full-Time",
        href: "/contact",
      },
      {
        title: "Medical Coding Specialist",
        description:
          "ICD-10 and CPT coding from provider documentation, with queries when the note doesn't support the code.",
        location: "United States",
        employmentType: "Full-Time",
        href: "/contact",
      },
      {
        title: "AR Follow-Up Specialist",
        description:
          "Work unpaid and denied claims with payers by phone and portal, and prepare appeals.",
        location: "United States",
        employmentType: "Ask us",
        href: "/contact",
      },
      {
        title: "Credentialing Specialist",
        description:
          "Prepare and track provider enrollments with Medicare, Texas Medicaid and commercial payers, and keep CAQH current.",
        location: "United States",
        employmentType: "Ask us",
        href: "/contact",
      },
    ] satisfies JobOpening[],
  },
  hiring: {
    heading: "Our hiring process",
    subheading: "A clear path from application to your first day.",
    steps: [
      { title: "Apply", description: "Send your resume with a short note about your billing experience." },
      { title: "Review", description: "We review your experience and get back to you." },
      { title: "Interview", description: "Talk with our team about your skills and the role." },
      { title: "Decision", description: "We make a decision and explain the next steps." },
      { title: `Welcome to ${siteName}`, description: "Onboarding, HIPAA training and support from the team." },
    ] satisfies ProcessStep[],
  },
  finalCta: {
    heading: "Ready to join our billing team?",
    subheading:
      "If you like solving claim problems and getting the details right, send us your resume.",
    cta: { label: "Send Your Resume", href: "/contact" },
  },
};
