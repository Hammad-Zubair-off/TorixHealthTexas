import type { BenefitItem } from "@/components/BenefitCards";
import type { FAQItem } from "@/components/FAQAccordion";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { ProcessStep } from "@/components/ProcessTimeline";
import type { IconName } from "@/components/icons";
import { sharedFaqs } from "@/content/shared-faqs";

/** Medical Billing Audit — KPI, denial, and productivity analysis with corrective actions. */
export const medicalAuditContent = {
  meta: {
    title: "Medical Billing Audit Services",
    description:
      "A medical billing audit for Texas practices: we review claims, coding, denials and payer payments, then rank the fixes by how much revenue each one affects.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Services" },
      { label: "Medical Billing Audit" },
    ],
    eyebrow: "Medical Billing Audit",
    headline: "Medical billing audit: find where revenue is leaking.",
    subheadline:
      "Your monthly collections number tells you what came in. It doesn't tell you which payer is underpaying, which codes keep getting denied, or how many claims are about to miss their filing deadline. A medical billing audit answers those questions with your own data, and tells you what to fix first.",
    distinction:
      "You get a written report with specific fixes, ranked by how much revenue each one affects. It's yours to use whether or not you hire us.",
    primaryCta: { label: "Request an Audit", href: "/contact" },
    secondaryCta: {
      label: "See Medical Billing",
      href: "/services/medical-billing",
    },
    image: {
      src: "/brand/heroes/medical-audit.jpg",
      alt: "Laptop showing analytics dashboards used for practice performance review",
    },
  },
  analyze: {
    heading: "What we analyze",
    subheading:
      "Operational and financial performance against defined benchmarks — so you get answers, not another unused dashboard.",
    items: [
      {
        icon: "activity" as IconName,
        title: "Revenue Cycle KPIs",
        description:
          "Clean claims ratio, days in AR, net collection rate, denial rate by payer and cause, AR aging, and cost to collect: the numbers that show whether billing is healthy.",
      },
      {
        icon: "clipboard" as IconName,
        title: "Coding & Documentation Patterns",
        description:
          "ICD-10 and CPT assignment reviewed for accuracy and distribution. We flag E/M level patterns that fall outside specialty norms — misused evaluation and management codes are among the most common and expensive coding failures.",
      },
      {
        icon: "fileText" as IconName,
        title: "Payer Performance & Contract Compliance",
        description:
          "Reimbursement rates compared across payers and against your contracted fee schedules. We surface which payers are underpaying, which contracts are due for renewal, and where your payer mix is working against you.",
      },
      {
        icon: "layers" as IconName,
        title: "Accounts Receivable Analysis",
        description:
          "Where cash flow is obstructed, quantified by cause: unworked denials, stalled follow-up, unbilled secondaries, uncollected patient balances, and claims approaching timely filing limits.",
      },
      {
        icon: "users" as IconName,
        title: "Provider Productivity",
        description:
          "Each provider's volume, coding accuracy and documentation completeness, compared against targets set for your specialty. The point isn't ranking providers; it's finding habits that affect the whole practice.",
      },
      {
        icon: "building" as IconName,
        title: "Front-Office & Workflow Efficiency",
        description:
          "Registration accuracy, eligibility verification completion, and authorization capture — the front-end steps that determine whether a claim was ever going to be paid.",
      },
    ] satisfies FeatureItem[],
  },
  deliverables: {
    heading: "What you receive",
    subheading:
      "Findings and next steps you can use to plan, budget, and verify improvement.",
    items: [
      {
        icon: "monitor" as IconName,
        title: "Performance Report",
        description:
          "Current-state metrics with benchmark comparison and variance flagged.",
      },
      {
        icon: "alert" as IconName,
        title: "Gap Analysis",
        description:
          "Where performance is deviating and what's causing it.",
      },
      {
        icon: "check" as IconName,
        title: "Prioritized Recommendations",
        description:
          "Ranked by revenue impact and implementation effort.",
      },
      {
        icon: "activity" as IconName,
        title: "Financial Forecast Inputs",
        description:
          "Data you can actually plan and budget against.",
      },
      {
        icon: "shield" as IconName,
        title: "Compliance Findings",
        description:
          "Coding, documentation, and payer requirement gaps.",
      },
      {
        icon: "clock" as IconName,
        title: "Follow-Up Reporting",
        description:
          "Verification that implemented changes moved the metric.",
      },
    ] satisfies BenefitItem[],
  },
  process: {
    heading: "Our process",
    subheading:
      "From data collection through ongoing tracking — so performance is monitored, not sampled once.",
    steps: [
      {
        icon: "clipboard" as IconName,
        title: "Data Collection",
        description:
          "Front-office records, billing and coding data, remittance data, payer contracts, and fee schedules.",
      },
      {
        icon: "layers" as IconName,
        title: "Benchmark Selection",
        description:
          "Targets set against your specialty, practice size, and payer mix — not generic industry averages.",
      },
      {
        icon: "activity" as IconName,
        title: "Analysis",
        description:
          "Statistical review of KPIs, denial patterns, coding distribution, and AR composition.",
      },
      {
        icon: "eyeOff" as IconName,
        title: "Root Cause Identification",
        description:
          "Distinguishing symptoms from causes; a rising denial rate is a symptom.",
      },
      {
        icon: "check" as IconName,
        title: "Recommendations",
        description:
          "Specific, sequenced, and assigned — tied to estimated revenue impact where possible.",
      },
      {
        icon: "clock" as IconName,
        title: "Ongoing Tracking",
        description:
          "Recurring reporting so performance is monitored, not sampled.",
      },
    ] satisfies ProcessStep[],
  },
  specialties: {
    heading: "Specialties we support",
    subheading:
      "Analysis scoped to how your specialty actually bills and collects.",
    items: [
      {
        icon: "users" as IconName,
        title: "Internal Medicine",
        description:
          "Performance review tailored to outpatient volume, E/M distribution, and multi-payer primary care cycles.",
      },
      {
        icon: "activity" as IconName,
        title: "Urgent Care",
        description:
          "High-throughput claim patterns, same-day documentation, and AR targets that fit urgent care workflows.",
      },
      {
        icon: "clipboard" as IconName,
        title: "Pain Management",
        description:
          "Procedure-heavy coding, authorization-sensitive services, and specialty-specific denial and productivity patterns.",
      },
    ] satisfies FeatureItem[],
  },
  whyUs: {
    heading: "Why audit with Medical Billers",
    subheading:
      "Targets, root causes and fixes tied to dollars, with a way to put the fixes in place.",
    items: [
      {
        icon: "handshake" as IconName,
        title: "Done by Billing People",
        description:
          "The review is done by people who work claims every day, so findings come with practical fixes, not just charts.",
      },
      {
        icon: "layers" as IconName,
        title: "Benchmarks, Not Just Numbers",
        description:
          "A metric without a comparison point isn't information. Every KPI is reported against a defined target.",
      },
      {
        icon: "eyeOff" as IconName,
        title: "Root Cause Over Reporting",
        description:
          "Identifying that denials rose is the easy part. We identify which payer, which code family, and which upstream step.",
      },
      {
        icon: "activity" as IconName,
        title: "Recommendations Tied to Dollars",
        description:
          "Each finding carries an estimated revenue impact so you can sequence by return.",
      },
      {
        icon: "shield" as IconName,
        title: "Signed BAA Before Day One",
        description:
          "A Business Associate Agreement is signed before any patient or financial data is shared with us.",
      },
      {
        icon: "check" as IconName,
        title: "Fixes You Can Act On",
        description:
          "Because we also run billing, AR follow-up and credentialing, we can put the fixes in place for you if you want, or hand them to your team.",
      },
    ] satisfies FeatureItem[],
  },
  faqs: {
    heading: "Medical billing audit questions",
    items: [
      {
        question: "What is included in a medical billing audit?",
        answer:
          "We test a sample of claims for coding and billing accuracy, and we measure your whole revenue cycle: denial rates and causes, days in AR, payer payments against your contracts, and front-desk steps like eligibility and authorization. You get a report with specific fixes ranked by revenue impact.",
      },
      {
        question: "What data do you need from us?",
        answer:
          "Front-office and registration records, billing and coding data, remittance and payment data, payer contracts, and fee schedules. We'll provide a specific list scoped to your systems.",
      },
      {
        question: "How often should a practice audit its billing?",
        answer:
          "We suggest checking core numbers like denial rate and days in AR monthly, with a deeper audit every quarter. A yearly review is usually too late to catch a problem while it's still cheap to fix.",
      },
      {
        question: "What benchmarks do you compare against?",
        answer:
          "Specialty-specific and practice-size-adjusted benchmarks rather than blanket industry averages. A 40-day AR figure means something different in a surgical practice than in urgent care.",
      },
      {
        question:
          "Can you analyze performance if our billing is handled in-house or by another vendor?",
        answer:
          "Yes. Analysis is independent of who runs the billing. The findings are yours regardless.",
      },
      {
        question:
          "Do you provide reporting on an ongoing basis or as a one-time engagement?",
        answer:
          "Both. Some practices need a one-time assessment; others prefer recurring KPI and follow-up reporting. We'll confirm scope and cadence during the assessment conversation.",
      },
      {
        question: "How quickly do we see results?",
        answer:
          "Front-end fixes — eligibility verification, registration accuracy, authorization capture — typically show up within a billing cycle. Coding and contract changes take longer to flow through.",
      },
      sharedFaqs.pricing,
    ] satisfies FAQItem[],
  },
  finalCta: {
    heading: "Get started with a performance assessment.",
    subheading:
      "If you don't know your clean claims ratio, your denial rate by cause and your days in AR, you're managing the practice's finances in the dark. Send us your specialty, practice size and payer mix and we'll scope an audit.",
    cta: { label: "Request an Audit", href: "/contact" },
  },
};
