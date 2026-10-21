import type { FAQItem } from "@/components/FAQAccordion";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { ProcessStep } from "@/components/ProcessTimeline";
import type { IconName } from "@/components/icons";
import { sharedFaqs } from "@/content/shared-faqs";
import { services } from "@/lib/site";

/** Revenue Cycle Management — full-cycle oversight from intake to final payment. */
export const rcmContent = {
  meta: {
    title: "Revenue Cycle Management Services",
    description:
      "Revenue cycle management for Texas practices: eligibility, prior auth, coding, claims, denials and collections run as one process with monthly reporting.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Services" },
      { label: services.rcm.label },
    ],
    eyebrow: "Revenue Cycle Management",
    headline: "Revenue cycle management, run as one process.",
    subheadline:
      "Your revenue cycle is every step between booking a patient and having the money in your account. When registration, prior authorization, coding, billing and collections are handled by different people, claims fall through the gaps. We run all of those steps as one process, with one team and one named representative accountable for the result.",
    primaryCta: { label: "Book a Free Billing Review", href: "/contact" },
    secondaryCta: {
      label: "See Medical Billing",
      href: services.medicalBilling.href,
    },
    image: {
      src: "/brand/heroes/rcm.jpg",
      alt: "Billing team reviewing revenue cycle results together",
    },
  },
  howItWorks: {
    heading: "What revenue cycle management includes",
    subheading:
      "Everything in Medical Billing, plus the steps before and after the claim that decide whether it gets paid.",
    footerNote:
      "If you only need claims submitted and followed up, Medical Billing may be enough.",
    items: [
      {
        icon: "layers" as IconName,
        title: "One Team for the Whole Cycle",
        description:
          "Every stage from patient intake to final payment is handled by one team, so nothing is lost when work passes from one person to the next.",
      },
      {
        icon: "activity" as IconName,
        title: "Performance Tracking",
        description:
          "Days in AR, denial rate and net collection rate are tracked every month, not reviewed once a year.",
      },
      {
        icon: "check" as IconName,
        title: "Fixing the Cause",
        description:
          "When the same denial keeps coming back, we fix the step that causes it, not just the claim in front of us.",
      },
      {
        icon: "shield" as IconName,
        title: "Payer Rule Updates",
        description:
          "Coding and payer rule changes are applied as they happen, which lowers audit and compliance risk.",
      },
      {
        icon: "users" as IconName,
        title: "Billing & Credentialing Together",
        description:
          "Billing, credentialing and AR work from the same information, so a payer enrollment change doesn't quietly cause denials.",
      },
      {
        icon: "monitor" as IconName,
        title: "Monthly Reporting",
        description:
          "A plain-language report on what was billed, what was paid and what is still outstanding, with the reasons behind the numbers.",
      },
    ] satisfies FeatureItem[],
  },
  workflow: {
    heading: "The revenue cycle steps we run",
    subheading:
      "Each step has an owner on our team, from the first eligibility check to the monthly report.",
    steps: [
      {
        icon: "check" as IconName,
        title: "Eligibility Verification",
        description:
          "Patient coverage is checked before the visit, so you know what the plan covers and what the patient owes.",
      },
      {
        icon: "clipboard" as IconName,
        title: "Prior Authorization",
        description:
          "Authorizations are requested and tracked for services that need them, so treatment isn't denied after the fact.",
      },
      {
        icon: "fileText" as IconName,
        title: "Charge Capture",
        description:
          "Every visit, procedure and modifier is captured, so services you performed aren't left unbilled.",
      },
      {
        icon: "layers" as IconName,
        title: "Claim Submission",
        description:
          "Every claim is scrubbed for errors before it is sent, and coding is checked by a coder, to cut first-pass rejections.",
      },
      {
        icon: "monitor" as IconName,
        title: "Payment Posting",
        description:
          "Payments from EOBs and ERAs are posted against each claim, and underpayments are flagged for follow-up.",
      },
      {
        icon: "clock" as IconName,
        title: "AR Follow-Up",
        description:
          "Unpaid claims are worked with the payer by phone and portal until they are paid or resolved.",
      },
      {
        icon: "alert" as IconName,
        title: "Denial Management",
        description:
          "Each denial is investigated, corrected and resubmitted or appealed before the filing deadline.",
      },
      {
        icon: "headphones" as IconName,
        title: "Patient Collections",
        description:
          "Clear statements and polite reminders, so patients understand what they owe and how to pay.",
      },
      {
        icon: "activity" as IconName,
        title: "Reporting",
        description:
          "Monthly reports show what is working, where money is being lost and what we are doing about it.",
      },
    ] satisfies ProcessStep[],
  },
  faqs: {
    heading: "Revenue cycle management questions",
    items: [
      sharedFaqs.billingVsRcm,
      {
        question: "What parts of the revenue cycle are included?",
        answer:
          "Eligibility, prior authorization, charge capture, coding, claim submission, payment posting, AR follow-up, denial management, patient collections and reporting. The exact scope is confirmed in writing before we start.",
      },
      sharedFaqs.software,
      sharedFaqs.switching,
      sharedFaqs.pricing,
      {
        question: "Can I start with Medical Billing and move to full RCM later?",
        answer:
          "Yes. Many practices start with Medical Billing and add the rest of the revenue cycle once claims are stable. The same named representative stays with your account as the scope grows.",
      },
    ] satisfies FAQItem[],
  },
  finalCta: {
    heading: "Let's map your revenue cycle.",
    subheading:
      "Bring your AR aging report and a recent month of denials. We'll show you where payments are getting stuck, whether or not you hire us.",
    cta: { label: "Book a Free Billing Review", href: "/contact" },
  },
};
