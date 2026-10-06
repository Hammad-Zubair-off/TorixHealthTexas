import type { FAQItem } from "@/components/FAQAccordion";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { ProcessStep } from "@/components/ProcessTimeline";
import type { IconName } from "@/components/icons";

/** Revenue Cycle Management — full-cycle oversight from intake to final payment. */
export const rcmContent = {
  meta: {
    title: "Revenue Cycle Management",
    description:
      "Torix Solutions manages your entire revenue cycle from patient scheduling to final payment — so nothing falls through the cracks between coding, claims, credentialing, and collections.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Services" },
      { label: "Revenue Cycle Management" },
    ],
    eyebrow: "Healthcare Service",
    headline: "The full revenue cycle, managed as one process.",
    subheadline:
      "Revenue cycle management is everything working together — not just billing in isolation. We manage your entire cycle from patient scheduling to final payment, so nothing falls through the cracks between coding, claims, credentialing, and collections.",
    primaryCta: { label: "Book a Consultation", href: "/contact" },
    secondaryCta: {
      label: "See Medical Billing",
      href: "/services/medical-billing",
    },
    image: {
      src: "/brand/heroes/rcm.jpg",
      alt: "Operations teammates collaborating on revenue and workflow results in a bright office",
    },
  },
  howItWorks: {
    heading: "How it works",
    subheading:
      "End-to-end oversight, continuous monitoring, and coordination across billing, credentialing, and collections.",
    footerNote:
      "If you only need claims submitted and followed up on, see our Medical Billing service.",
    items: [
      {
        icon: "layers" as IconName,
        title: "End-to-End Cycle Oversight",
        description:
          "Every stage from patient intake to final payment is managed under one system, so nothing gets lost in handoffs between departments.",
      },
      {
        icon: "activity" as IconName,
        title: "Performance Monitoring",
        description:
          "Key metrics like days in AR, denial rate, and net collection rate are tracked continuously, not just reviewed once a year.",
      },
      {
        icon: "check" as IconName,
        title: "Process Optimization",
        description:
          "Recurring bottlenecks and inefficiencies in your billing workflow are identified and fixed before they cost you more revenue.",
      },
      {
        icon: "shield" as IconName,
        title: "Compliance Oversight",
        description:
          "Coding, billing, and payer requirements are kept current with evolving regulations, reducing audit and compliance risk.",
      },
      {
        icon: "users" as IconName,
        title: "Cross-Functional Coordination",
        description:
          "Billing, credentialing, and AR teams work off the same data, so a change in one area (like a payer contract) doesn't create problems in another.",
      },
      {
        icon: "monitor" as IconName,
        title: "Ongoing Reporting",
        description:
          "You get regular visibility into practice financial health — not just numbers, but what's driving them.",
      },
    ] satisfies FeatureItem[],
  },
  workflow: {
    heading: "The revenue cycle workflow we run",
    subheading:
      "From the first eligibility check to the final report — each stage is owned, not just touched.",
    steps: [
      {
        icon: "check" as IconName,
        title: "Eligibility Verification",
        description:
          "Insurance surprises? Not on our watch. We verify patient coverage before they even step into your clinic, as your time is too valuable to waste on verification pitfalls.",
      },
      {
        icon: "clipboard" as IconName,
        title: "Prior Authorization",
        description:
          "We deal with the red tape, so no more hindered claims. From charge capturing to chasing approvals, we get your treatments paid fast — think of us as your front desk officer handling the \"please hold\" music.",
      },
      {
        icon: "fileText" as IconName,
        title: "Charge Capture",
        description:
          "Every service is counted, coded, and claimed beforehand. We make sure every visit, procedure, and modifier is captured correctly. We really don't like redoing stuff that can be corrected the first time.",
      },
      {
        icon: "layers" as IconName,
        title: "Claim Submission",
        description:
          "Clean claims aren't optional. They're our baseline. We scrub, file, and submit your claims with surgical precision, reducing rejections and speeding up your cash flow. Every code is checked by an experienced coder.",
      },
      {
        icon: "monitor" as IconName,
        title: "Payment Processing",
        description:
          "We make sure claim approval means you are getting paid. From EOBs to ERA tracking, we keep everything organized and flowing, so your income isn't stuck in a never-ending cycle.",
      },
      {
        icon: "clock" as IconName,
        title: "AR Follow-ups",
        description:
          "Old claims don't scare us — we know how to pull them back. We follow up with payers, sort out delays, and keep your revenue cycle moving even when payers stall.",
      },
      {
        icon: "alert" as IconName,
        title: "Denial Management",
        description:
          "Denials happen. But we don't just let it be. Our team investigates every denial, corrects the issue, and gets it resubmitted fast. We chase down every single penny for you tirelessly.",
      },
      {
        icon: "headphones" as IconName,
        title: "Patient Collection",
        description:
          "We make it easy for patients to pay, and painless for you to ask. From soft reminders to secure online portals, we keep collections friendly, transparent, and on spot.",
      },
      {
        icon: "activity" as IconName,
        title: "Reporting and Analysis",
        description:
          "What's working? What's leaking? Torix Solutions shows you a holistic picture. With real-time dashboards and actionable insights, you can make smarter decisions and hit revenue goals without delays.",
      },
    ] satisfies ProcessStep[],
  },
  faqs: {
    heading: "Frequently asked questions",
    items: [
      {
        question:
          "What's the difference between Revenue Cycle Management and Medical Billing?",
        answer:
          "Medical Billing focuses on the claim path and performance insight around billing outcomes. Revenue Cycle Management is everything working together: from patient scheduling to final payment, coordinating coding, claims, credentialing, and collections so nothing falls between stages.",
      },
      {
        question: "What parts of the revenue cycle are included?",
        answer:
          "Intake through final payment under one system — including coordination across coding, claims, credentialing, AR, and collections. Exact scope is confirmed in writing before onboarding starts.",
      },
      {
        question:
          "Do I need to replace my current EHR or Practice Management system?",
        answer:
          "No. We work inside the system you already run. Our own software is available where it helps, but adopting it is optional and never a condition of the engagement.",
      },
      {
        question: "How is onboarding handled without disrupting operations?",
        answer:
          "Onboarding is phased. We review your current process, configure access alongside your staff, and run in parallel where needed so cash flow continues while ownership transfers stage by stage.",
      },
      {
        question: "How is pricing structured?",
        answer:
          "Pricing is quoted per practice after the assessment, based on volume, payer mix, specialty and which stages are in scope. The number and the scope go in writing before anything starts.",
      },
      {
        question:
          "Can I start with Medical Billing and later move to full RCM?",
        answer:
          "Yes. Many practices begin with Medical Billing and expand into full Revenue Cycle Management once claims are stable. The same named representative stays with the account as the scope grows.",
      },
    ] satisfies FAQItem[],
  },
  finalCta: {
    heading: "Let's map your complete revenue cycle.",
    subheading:
      "Bring your A/R ageing and a recent month of denials. We'll show you where the cash path breaks, whether or not you engage us.",
    cta: { label: "Book a Consultation", href: "/contact" },
  },
};
