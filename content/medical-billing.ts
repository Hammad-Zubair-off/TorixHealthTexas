import type { FAQItem } from "@/components/FAQAccordion";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { IconName } from "@/components/icons";
import { sharedFaqs } from "@/content/shared-faqs";
import { services } from "@/lib/site";

/** Medical Billing — full-cycle billing from eligibility through final payment. */
export const medicalBillingContent = {
  meta: {
    title: "Medical Billing Services in Texas",
    description:
      "Full-cycle medical billing for Texas practices: eligibility checks, scrubbed claims to Novitas, TMHP and commercial payers, payment posting and follow-up.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Services" },
      { label: services.medicalBilling.label },
    ],
    eyebrow: "Medical Billing",
    headline: "Medical billing services, from eligibility to final payment.",
    subheadline:
      "Medical billing is the work of turning each patient visit into a paid insurance claim. We check coverage before the visit, send a clean claim after it, post what the payer pays, and chase anything that comes back denied or short. You see where every claim stands, and your front desk stops spending afternoons on hold with payers.",
    primaryCta: { label: "Book a Free Billing Review", href: "/contact" },
    secondaryCta: {
      label: "Compare with full RCM",
      href: services.rcm.href,
    },
    image: {
      src: "/brand/heroes/medical-billing.jpg",
      alt: "Medical biller reviewing patient insurance information on a tablet",
    },
  },
  howItWorks: {
    heading: "What our medical billing covers",
    subheading:
      "Each step below is done by our team, inside the practice management system you already use.",
    footerNote:
      "Need the wider process, from registration and prior authorization to collections? See Revenue Cycle Management. Want a one-time check of how your billing is performing? See Medical Billing Audit.",
    items: [
      {
        icon: "check" as IconName,
        title: "Eligibility & Benefits Verification",
        description:
          "Coverage, copays, deductibles and authorization rules are checked before the appointment, so claims aren't denied for reasons that could have been caught at the front desk.",
      },
      {
        icon: "clipboard" as IconName,
        title: "Charge Entry & Claim Submission",
        description:
          "Charges are entered and claims are sent to the right payer on a schedule agreed in writing when we start, so you always know when to expect submissions.",
      },
      {
        icon: "fileText" as IconName,
        title: "Claim Scrubbing",
        description:
          "Every claim is checked for coding, demographic and payer-rule errors before it is sent, which cuts avoidable rejections and speeds up payment.",
      },
      {
        icon: "activity" as IconName,
        title: "Payment Posting & Reconciliation",
        description:
          "Insurance payments and adjustments are posted against each claim, and underpayments are flagged, so your books match what was actually paid.",
      },
      {
        icon: "alert" as IconName,
        title: "Denial Follow-Up",
        description:
          "Denied and unpaid claims are corrected, resubmitted or appealed before the payer's filing deadline closes.",
      },
      {
        icon: "headphones" as IconName,
        title: "Patient Balance Billing",
        description:
          "After insurance pays, remaining patient balances are billed and followed up politely, so that revenue isn't left uncollected.",
      },
    ] satisfies FeatureItem[],
  },
  texasPayers: {
    heading: "Texas payers we bill",
    subheading:
      "Texas practices deal with a specific mix of government and commercial payers. These are the ones most practices ask us about.",
    items: [
      {
        icon: "building" as IconName,
        title: "Medicare (Novitas Solutions)",
        description:
          "Novitas Solutions processes Medicare Part A and Part B claims for Texas as the Jurisdiction H contractor. We submit and follow up on Medicare claims with Novitas.",
      },
      {
        icon: "shield" as IconName,
        title: "Texas Medicaid (TMHP)",
        description:
          "Traditional Texas Medicaid claims go through TMHP, which runs claims and provider enrollment for the state's HHSC.",
      },
      {
        icon: "users" as IconName,
        title: "Medicaid managed care & CHIP",
        description:
          "Most Texas Medicaid patients are in managed care plans under STAR, STAR+PLUS, STAR Kids or STAR Health, or in CHIP. Each plan has its own rules, and we bill each one accordingly.",
      },
      {
        icon: "handshake" as IconName,
        title: "Commercial payers",
        description:
          "Blue Cross and Blue Shield of Texas, Aetna, UnitedHealthcare and other commercial plans, plus TRICARE for military families.",
      },
    ] satisfies FeatureItem[],
  },
  faqs: {
    heading: "Medical billing questions",
    items: [
      sharedFaqs.pricing,
      sharedFaqs.switching,
      sharedFaqs.texasMedicaid,
      sharedFaqs.medicare,
      sharedFaqs.billingVsRcm,
      {
        question: "How is Medical Billing different from a Medical Billing Audit?",
        answer:
          "Medical Billing runs your claims every day. A Medical Billing Audit is a review of how your billing is performing, with a list of fixes. Many practices start with an audit and then decide whether to outsource the billing.",
      },
      sharedFaqs.software,
      {
        question: "Why are my medical claims being denied?",
        answer:
          "The most common causes are eligibility problems, coding errors, missing prior authorizations, wrong payer information and missing documentation. We find the cause of each denial, fix it, and change the step that caused it so it doesn't repeat.",
      },
    ] satisfies FAQItem[],
  },
  finalCta: {
    heading: "Start with a free review of your billing.",
    subheading:
      "Bring a recent remittance and your unpaid claims report. We'll tell you what we would change, whether or not you hire us.",
    cta: { label: "Book a Free Billing Review", href: "/contact" },
  },
};
