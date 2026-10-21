import type { FAQItem } from "@/components/FAQAccordion";

/**
 * FAQs that appear on more than one page. Each question has exactly one answer —
 * reference these instead of rewriting them per page.
 */
export const sharedFaqs = {
  pricing: {
    question: "How is medical billing pricing structured?",
    answer:
      "We quote each practice after a free review of your claim volume, payer mix and specialty. The price and the exact scope of work are put in writing before anything starts, so there are no surprise fees later.",
  },
  switching: {
    question: "Will switching billing companies interrupt our cash flow?",
    answer:
      "No. We run alongside your current billing during the handover. Your existing claims keep moving while we take over one queue at a time, and old unpaid claims are worked rather than abandoned.",
  },
  billingVsRcm: {
    question: "What's the difference between Medical Billing and Revenue Cycle Management?",
    answer:
      "Medical Billing covers the claim itself: checking eligibility, submitting, posting payments and reworking denials. Revenue Cycle Management covers the whole path around it, from registration and prior authorization through coding, collections and reporting.",
  },
  software: {
    question: "Do we have to use your software?",
    answer:
      "No. We work inside the system you already use. Our Medical Billing Software is free with the billing service if you want it, but it is never a condition of working with us.",
  },
  baa: {
    question: "Do you sign a Business Associate Agreement?",
    answer:
      "Yes. We sign a Business Associate Agreement before day one, before any protected health information is shared with us.",
  },
  texasMedicaid: {
    question: "Do you handle Texas Medicaid billing and enrollment?",
    answer:
      "Yes. Texas Medicaid is run by HHSC, and providers enroll through TMHP's Provider Enrollment and Management System (PEMS) before contracting with Medicaid managed care plans. We manage PEMS enrollment and revalidation, then bill traditional Medicaid and the managed care plans in STAR, STAR+PLUS, STAR Kids, STAR Health and CHIP.",
  },
  medicare: {
    question: "Who processes Medicare claims in Texas, and do you bill them?",
    answer:
      "Novitas Solutions is the Medicare Administrative Contractor for Texas (Jurisdiction H), handling Part A and Part B claims. We submit and follow up on Medicare claims with Novitas and manage your Medicare enrollment in PECOS.",
  },
} satisfies Record<string, FAQItem>;
