import type { BenefitItem } from "@/components/BenefitCards";
import type { FAQItem } from "@/components/FAQAccordion";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { ProcessStep } from "@/components/ProcessTimeline";
import type { IconName } from "@/components/icons";

/** Medical Billing Audit — KPI, denial, and productivity analysis with corrective actions. */
export const medicalAuditContent = {
  meta: {
    title: "Medical Billing Audit",
    description:
      "Torix Solutions analyzes your practice's revenue cycle KPIs, denial patterns, and provider productivity — turning billing data into decisions you can act on.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Services" },
      { label: "Medical Billing Audit" },
    ],
    eyebrow: "Healthcare Service",
    headline: "Know which numbers are moving, and why.",
    subheadline:
      "Most practices have data. Very few have answers. A monthly collections figure tells you what happened; it doesn't tell you whether your clean claims ratio slipped, which payer is underpaying, or which provider's E/M distribution is quietly costing you revenue.",
    distinction:
      "Torix Solutions analyzes your practice's operational and financial data against defined benchmarks, identifies where performance is deviating, and returns specific corrective actions — not a dashboard you'll stop opening after two weeks.",
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
          "Clean claims ratio, days in AR (tracked against a 30–35 day claim payment target), net collection rate, denial rate by payer and root cause, AR aging distribution, and cost to collect — the metrics that actually predict financial health.",
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
          "Individual provider performance on volume, coding accuracy, documentation completeness, and revenue contribution — compared against benchmarks from comparable practices. The point isn't ranking providers; it's identifying behaviors that affect practice-level results.",
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
    heading: "Why Torix Solutions",
    subheading:
      "Benchmarks, root cause, and recommendations tied to dollars — with a path to implement findings.",
    items: [
      {
        icon: "handshake" as IconName,
        title: "Operating Experience",
        description:
          "Analysts and consultants with direct revenue cycle operating experience, not general-purpose data staff.",
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
        title: "HIPAA Compliant Throughout",
        description:
          "All PHI and financial data handled under documented safeguards.",
      },
      {
        icon: "check" as IconName,
        title: "Connected to Execution",
        description:
          "Because Torix also runs revenue cycle management, billing audits, and credentialing, findings can be implemented rather than just delivered.",
      },
    ] satisfies FeatureItem[],
  },
  faqs: {
    heading: "Frequently asked questions",
    items: [
      {
        question:
          "How is performance analysis different from a billing audit?",
        answer:
          "An audit tests a sample of claims for accuracy and compliance — it answers \"were these coded and billed correctly?\" Performance analysis is broader and forward-looking: it measures the whole revenue cycle against benchmarks to answer \"where is this practice losing money, and what should change?\" Audits often feed into it.",
      },
      {
        question: "What data do you need from us?",
        answer:
          "Front-office and registration records, billing and coding data, remittance and payment data, payer contracts, and fee schedules. We'll provide a specific list scoped to your systems.",
      },
      {
        question: "How often should performance be reviewed?",
        answer:
          "Monthly for core KPIs, quarterly for deeper analysis. Annual review is too infrequent to catch a trend while it's still cheap to correct.",
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
      {
        question: "What is included in a medical billing audit?",
        answer:
          "A billing audit can review claims, coding, documentation, payments, denials, payer reimbursements, and other revenue cycle processes to identify errors, compliance concerns, and missed revenue opportunities.",
      },
      {
        question: "How can a billing audit help my practice?",
        answer:
          "An audit can help identify recurring billing errors, underpayments, missed charges, incorrect coding, avoidable denials, and process inefficiencies that may be affecting your revenue.",
      },
      {
        question: "How often should a medical practice conduct a billing audit?",
        answer:
          "The ideal frequency depends on the size and complexity of the practice. Regular audits can help identify problems early and ensure billing processes remain accurate, efficient, and compliant.",
      },
    ] satisfies FAQItem[],
  },
  finalCta: {
    heading: "Get started with a performance assessment.",
    subheading:
      "If you can't currently state your clean claims ratio, your denial rate by root cause, and your days in AR, you're managing the practice's finances on a lagging indicator. Send us your specialty, practice size, and payer mix and we'll scope an analysis.",
    cta: { label: "Request an Audit", href: "/contact" },
  },
};
