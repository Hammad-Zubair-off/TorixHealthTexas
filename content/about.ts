import type { BenefitItem } from "@/components/BenefitCards";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { IconName } from "@/components/icons";
import { services, siteName } from "@/lib/site";

/** About Us — who we are and how we work, limited to commitments the site already makes. */
export const aboutContent = {
  meta: {
    title: "About Our Medical Billing Team",
    description:
      "Medical Billers is a US-based medical billing team serving Texas practices: claims, coding, AR follow-up and credentialing, with one named representative.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "About Us" },
    ],
    eyebrow: "About us",
    headline: "About Medical Billers, a medical billing team for Texas practices.",
    subheadline:
      "We do one thing: medical billing. Our US-based team handles claims, coding, AR follow-up and credentialing for Texas practices, so providers can focus on patients instead of payers.",
    distinction:
      "Every practice we work with gets a named account representative, a signed BAA before day one, and the scope and price in writing before work starts.",
    primaryCta: { label: "Book a Free Billing Review", href: "/contact" },
    secondaryCta: {
      label: "Explore Services",
      href: services.medicalBilling.href,
    },
    image: {
      src: "/brand/heroes/about.jpg",
      alt: "Medical billing specialist ready to help a practice with its claims",
    },
  },
  story: {
    heading: "What we do",
    paragraphs: [
      "Most practices didn't open to spend their days on hold with insurance companies. Yet billing decides whether the work they've already done gets paid: a missed eligibility check, a wrong code or an expired enrollment can hold up payment for months.",
      `${siteName} takes that work off your plate. We verify coverage, code visits, submit clean claims to Medicare, Texas Medicaid and commercial payers, post payments, chase denials and keep your provider enrollments current.`,
      "We keep it simple and honest: clear scope, clear pricing, regular reporting, and a person you can call who knows your practice.",
    ],
  },
  missionVision: {
    heading: "Mission & vision",
    subheading: "What we work toward with every practice.",
    items: [
      {
        icon: "activity" as IconName,
        title: "Our mission",
        description:
          "To get practices paid fully and on time for the care they provide, with billing that is accurate, transparent and easy to understand.",
      },
      {
        icon: "layers" as IconName,
        title: "Our vision",
        description:
          "To be the billing partner Texas practices recommend to each other, because we answer the phone and our numbers add up.",
      },
    ] satisfies BenefitItem[],
  },
  whatWeDo: {
    heading: "Our medical billing services",
    subheading:
      "Use one service or several. They are designed to work together, and the same representative coordinates all of them.",
    footerNote:
      "Our Medical Billing Software is free for billing clients, and optional. We can work inside the system you already have.",
    items: [
      {
        icon: "fileText" as IconName,
        title: services.medicalBilling.label,
        description: "Eligibility, claims, payment posting and patient balances.",
        href: services.medicalBilling.href,
        ctaLabel: "Learn more →",
      },
      {
        icon: "activity" as IconName,
        title: services.rcm.label,
        description: "The whole cycle, from registration to collections, run as one process.",
        href: services.rcm.href,
        ctaLabel: "Learn more →",
      },
      {
        icon: "clipboard" as IconName,
        title: services.medicalCoding.label,
        description: "ICD-10 and CPT codes assigned from your documentation.",
        href: services.medicalCoding.href,
        ctaLabel: "Learn more →",
      },
      {
        icon: "clock" as IconName,
        title: services.arFollowUp.label,
        description: "Unpaid and denied claims worked until they're resolved.",
        href: services.arFollowUp.href,
        ctaLabel: "Learn more →",
      },
      {
        icon: "building" as IconName,
        title: services.credentialing.label,
        description: "Enrollment, CAQH and renewals so every provider can bill.",
        href: services.credentialing.href,
        ctaLabel: "Learn more →",
      },
      {
        icon: "check" as IconName,
        title: services.medicalAudit.label,
        description: "A review of your billing with a ranked list of fixes.",
        href: services.medicalAudit.href,
        ctaLabel: "Learn more →",
      },
    ] satisfies FeatureItem[],
  },
  values: {
    heading: "Our values",
    subheading: "How we work with practices and with each other.",
    items: [
      {
        icon: "clipboard" as IconName,
        title: "Transparency",
        description:
          "Scope and pricing in writing before we start, and reports that show what was billed, paid and still outstanding.",
      },
      {
        icon: "check" as IconName,
        title: "Accuracy",
        description:
          "Every claim is scrubbed before it is sent, because getting it right the first time is cheaper than fixing a denial.",
      },
      {
        icon: "shield" as IconName,
        title: "Privacy",
        description:
          "We sign a BAA before day one and treat every patient record as if it were our own.",
      },
      {
        icon: "handshake" as IconName,
        title: "Accountability",
        description:
          "A named representative owns your account, so there is always one person responsible for the result.",
      },
    ] satisfies BenefitItem[],
  },
  whyUs: {
    heading: `Why practices choose ${siteName}`,
    subheading: "Commitments we make to every practice, in writing.",
    items: [
      {
        icon: "shield" as IconName,
        title: "Signed BAA before day one",
        description: "No patient data is shared until the Business Associate Agreement is signed.",
      },
      {
        icon: "check" as IconName,
        title: "Every claim scrubbed",
        description: "Each claim is checked for errors before it reaches the payer.",
      },
      {
        icon: "handshake" as IconName,
        title: "Named account representative",
        description: "One person who knows your practice, instead of a ticket queue.",
      },
      {
        icon: "headphones" as IconName,
        title: "US-based billing team",
        description: "Billing done by a team based in the United States.",
      },
      {
        icon: "clipboard" as IconName,
        title: "Scope and price in writing",
        description: "You know exactly what is included and what it costs before we start.",
      },
      {
        icon: "monitor" as IconName,
        title: "Software included, never required",
        description: "Free billing software if you want it; your current system if you don't.",
      },
    ] satisfies FeatureItem[],
  },
  finalCta: {
    heading: "Let's talk about your billing.",
    subheading:
      "Tell us about your practice, your payers and what's frustrating you about billing today. We'll tell you honestly whether we can help.",
    cta: { label: "Book a Free Billing Review", href: "/contact" },
  },
};
