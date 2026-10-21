import type { FAQItem } from "@/components/FAQAccordion";
import type { OverviewCard } from "@/components/ServicesOverview";
import type { TrustItem } from "@/components/TrustBar";
import type { IconName } from "@/components/icons";
import { sharedFaqs } from "@/content/shared-faqs";
import { services } from "@/lib/site";

/** Homepage — medical billing for Texas practices. Every claim here is a commitment the site describes elsewhere. */
export const homeContent = {
  meta: {
    title: "Medical Billing Company in Texas",
    description:
      "Medical billing services for Texas practices: claims, coding, AR follow-up and credentialing, with a signed BAA and one named account rep.",
  },
  hero: {
    eyebrow: "US-based billing team · Serving Texas practices",
    headline: "Medical billing services for Texas practices.",
    highlightWord: "Texas practices.",
    subheadline:
      "We handle your insurance billing from start to finish: checking patient coverage, coding visits, sending clean claims to Medicare, Texas Medicaid and commercial payers, and following up on every claim that goes unpaid. You get paid for the work you already did, and your staff get their time back.",
    primaryCta: { label: "Book a Free Billing Review", href: "/contact" },
    secondaryCta: {
      label: "See how billing works",
      href: services.medicalBilling.href,
    },
    consultationNote:
      "The review is a conversation about your current denials and unpaid claims. Not a sales call.",
  },
  trust: [
    {
      icon: "shield" as IconName,
      label: "Signed BAA before day one",
      description: "Before any patient data is shared",
    },
    {
      icon: "check" as IconName,
      label: "Every claim scrubbed",
      description: "Checked for errors before it is sent",
    },
    {
      icon: "handshake" as IconName,
      label: "Named account representative",
      description: "One person who knows your practice",
    },
    {
      icon: "headphones" as IconName,
      label: "US-based billing team",
      description: "Real people you can call",
    },
  ] satisfies TrustItem[],
  split: {
    heading: "Billing services, with the software included.",
    subheading:
      "Our team does the billing work for you. If you want software to see where every claim stands, it comes free with the service.",
    servicesCard: {
      kicker: "What we do",
      title: "We run your billing",
      description:
        "Eligibility checks, coding, claim submission, payment posting, denial follow-up and credentialing, done by our team on your behalf.",
      cta: { label: "Explore Services", href: services.medicalBilling.href },
    },
    solutionsCard: {
      kicker: "Free with billing",
      title: "Software at no extra cost",
      description:
        "Billing clients can use our Medical Billing Software free, or keep the system they already have. Either way the billing service is the same.",
      cta: { label: "See the Software", href: services.billingSoftware.href },
    },
  },
  overview: {
    servicesHeading: "Medical billing services",
    servicesNote:
      "Use one service or all of them. Every practice gets a named account representative before work starts.",
    solutionsHeading: "Software that comes free with billing.",
    services: [
      {
        icon: "fileText",
        title: services.medicalBilling.label,
        description:
          "Claims handled from eligibility check to final payment: coding, submission, payment posting and patient balances.",
        href: services.medicalBilling.href,
        ctaLabel: "Learn more",
      },
      {
        icon: "activity",
        title: services.rcm.label,
        description:
          "Your whole revenue cycle run as one process, from patient registration and prior authorization to collections and reporting.",
        href: services.rcm.href,
        ctaLabel: "Learn more",
      },
      {
        icon: "clipboard",
        title: services.medicalCoding.label,
        description:
          "ICD-10 and CPT codes assigned from your notes, with questions raised when the note doesn't support the code.",
        href: services.medicalCoding.href,
        ctaLabel: "Learn more",
      },
      {
        icon: "clock",
        title: services.arFollowUp.label,
        description:
          "Unpaid and denied claims worked by age and dollar amount, with appeals filed before deadlines pass.",
        href: services.arFollowUp.href,
        ctaLabel: "Learn more",
      },
      {
        icon: "building",
        title: services.credentialing.label,
        description:
          "Enrollment with Medicare, Texas Medicaid and commercial payers, CAQH kept current, and renewals tracked before they lapse.",
        href: services.credentialing.href,
        ctaLabel: "Learn more",
      },
      {
        icon: "check",
        title: services.medicalAudit.label,
        description:
          "A review of your claims, coding and denials that shows where money is being lost and what to fix first.",
        href: services.medicalAudit.href,
        ctaLabel: "Learn more",
      },
    ] satisfies OverviewCard[],
    solutions: [
      {
        icon: "monitor",
        title: services.billingSoftware.label,
        description:
          "Free with the billing service. See what was submitted, what was paid and what is still outstanding, without asking for a report.",
        href: services.billingSoftware.href,
        tag: "Free with billing",
        ctaLabel: "See the Software",
      },
      {
        icon: "lock",
        title: services.hipaaSoftware.label,
        description:
          "How patient data is protected: role-based access, audit logging, encryption, and a signed Business Associate Agreement.",
        href: services.hipaaSoftware.href,
        tag: "Compliance",
        ctaLabel: "Read the detail",
      },
    ] satisfies OverviewCard[],
  },
  faqs: {
    heading: "Questions practices ask first",
    items: [
      sharedFaqs.pricing,
      sharedFaqs.switching,
      sharedFaqs.texasMedicaid,
      sharedFaqs.medicare,
      sharedFaqs.billingVsRcm,
      sharedFaqs.baa,
      sharedFaqs.software,
    ] satisfies FAQItem[],
  },
  finalCta: {
    heading: "Start with a free review of your billing.",
    subheading:
      "Bring a recent remittance and your unpaid claims report. We'll tell you what we would change, whether or not you hire us.",
    cta: { label: "Book a Free Billing Review", href: "/contact" },
  },
};
