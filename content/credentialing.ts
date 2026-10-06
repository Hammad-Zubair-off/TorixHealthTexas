import type { FAQItem } from "@/components/FAQAccordion";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { EnrollmentColumn } from "@/components/EnrollmentColumns";
import type { IconName } from "@/components/icons";

/** Credentialing and Contract — payer enrollment, CAQH, recredentialing, and related support. */
export const credentialingContent = {
  meta: {
    title: "Credentialing and Contract",
    description:
      "Torix Solutions credentialing gets you enrolled with the insurances that matter and keeps you compliant — so enrollment lag and expired credentials don't quietly cut off your ability to bill.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Services" },
      { label: "Credentialing and Contract" },
    ],
    eyebrow: "Healthcare Service",
    headline: "Enrolled with the payers that matter — and kept that way.",
    subheadline:
      "Credentialing delays cost you real money — every day you're not enrolled with a payer is a day you can't bill them. Our credentialing service gets you set up and approved with the insurances that matter, and keeps you compliant so you don't lose network status without knowing it.",
    primaryCta: { label: "Book a Consultation", href: "/contact" },
    secondaryCta: {
      label: "See Medical Billing",
      href: "/services/medical-billing",
    },
    image: {
      src: "/brand/heroes/credentialing.jpg",
      alt: "Professional handshake representing provider enrollment and network partnership",
    },
  },
  howItWorks: {
    heading: "How it works",
    subheading:
      "Enrollment, CAQH, follow-up, contracts, recredentialing, NPI/PECOS, and privileging support — managed so nothing sits in limbo.",
    items: [
      {
        icon: "fileText" as IconName,
        title: "Provider Enrollment",
        description:
          "We prepare and submit applications to get you enrolled with commercial payers, Medicare, and Medicaid, so you can start billing as soon as possible.",
      },
      {
        icon: "clipboard" as IconName,
        title: "CAQH Profile Setup & Maintenance",
        description:
          "Your CAQH profile is created, kept current, and re-attested on schedule, since an outdated profile is one of the most common causes of enrollment delays.",
      },
      {
        icon: "clock" as IconName,
        title: "Application Tracking & Follow-Up",
        description:
          "We don't just submit and wait — applications are actively followed up on with payers until approval, so nothing sits in limbo.",
      },
      {
        icon: "handshake" as IconName,
        title: "Contract Negotiation Support",
        description:
          "We review payer contract terms and reimbursement rates so you're not signing into unfavorable agreements without knowing it.",
      },
      {
        icon: "check" as IconName,
        title: "Re-credentialing & Revalidation",
        description:
          "Credentials are tracked and renewed before expiration, so you never lose network status or get quietly dropped from a payer panel.",
      },
      {
        icon: "building" as IconName,
        title: "NPI & PECOS Management",
        description:
          "Individual and group NPI records and PECOS enrollments are kept accurate and up to date.",
      },
      {
        icon: "users" as IconName,
        title: "Privileging Support",
        description:
          "Where applicable, we assist with hospital or facility privileging alongside payer credentialing.",
      },
    ] satisfies FeatureItem[],
  },
  specialties: {
    heading: "Comprehensive Credentialing & Billing Solutions Across 20+ Medical Specialties",
    subheading:
      "We provide specialized medical credentialing, insurance enrollment, and medical billing solutions tailored to the unique needs of healthcare providers across a wide range of specialties.",
    items: [
      { icon: "users" as IconName, title: "Family Medicine" },
      { icon: "activity" as IconName, title: "Internal Medicine" },
      { icon: "monitor" as IconName, title: "Cardiology" },
      { icon: "eyeOff" as IconName, title: "Dermatology" },
      { icon: "layers" as IconName, title: "Neurology" },
      { icon: "building" as IconName, title: "Orthopedics" },
      { icon: "users" as IconName, title: "Pediatrics" },
      { icon: "headphones" as IconName, title: "Psychiatry" },
      { icon: "handshake" as IconName, title: "Behavioral Health" },
      { icon: "shield" as IconName, title: "Obstetrics & Gynecology (OB/GYN)" },
      { icon: "clipboard" as IconName, title: "Gastroenterology" },
      { icon: "activity" as IconName, title: "Pulmonology" },
      { icon: "mapPin" as IconName, title: "Urology" },
      { icon: "eyeOff" as IconName, title: "Ophthalmology" },
      { icon: "check" as IconName, title: "Dentistry" },
      { icon: "users" as IconName, title: "Physical Therapy" },
      { icon: "clock" as IconName, title: "Pain Management" },
      { icon: "layers" as IconName, title: "Nephrology" },
      { icon: "activity" as IconName, title: "Endocrinology" },
      { icon: "building" as IconName, title: "Durable Medical Equipment (DME)" },
    ] satisfies FeatureItem[],
  },
  enrollmentSolutions: {
    heading: "How Torix Solutions Simplifies Provider Enrollment",
    subheading:
      "Government programs and commercial payers follow different rules, timelines, and documentation standards. We manage both so enrollment lag doesn't become lost revenue.",
    columns: [
      {
        title: "Government Programs",
        payers: "Medicare | Medicaid | TRICARE",
        items: [
          {
            title: "Enrollment Timeline",
            description:
              "Government enrollment can take several weeks or months depending on the program, state, and application requirements.",
          },
          {
            title: "Regulatory Requirements",
            description:
              "Strict CMS and state-specific regulations must be followed to ensure applications meet program requirements.",
          },
          {
            title: "Application Process",
            description:
              "PECOS enrollment, state applications, supporting documentation, and program-specific requirements can make the process complex.",
          },
          {
            title: "Reimbursement Structure",
            description:
              "Government programs generally follow established fee schedules and reimbursement guidelines.",
          },
          {
            title: "Application Accuracy",
            description:
              "Missing information or documentation can result in application delays, rework, or requests for additional information.",
          },
        ],
      },
      {
        title: "Commercial Insurance",
        payers: "Aetna | UnitedHealthcare | Blue Cross Blue Shield | And More",
        items: [
          {
            title: "Credentialing Timeline",
            description:
              "Commercial payer credentialing timelines vary by insurance company and may take several weeks or months.",
          },
          {
            title: "Payer Requirements",
            description:
              "Each insurance company has its own credentialing policies, documentation requirements, and enrollment procedures.",
          },
          {
            title: "Application Process",
            description:
              "CAQH profiles, payer portals, credentialing forms, and supporting documents require careful coordination and ongoing maintenance.",
          },
          {
            title: "Reimbursement Opportunities",
            description:
              "Commercial payer reimbursement rates may be negotiated based on the provider, specialty, location, and payer contract.",
          },
          {
            title: "Application Accuracy",
            description:
              "Errors or incomplete information can lead to additional requests, resubmissions, and unnecessary delays.",
          },
        ],
      },
      {
        title: "The Torix Solutions Enrollment Solution",
        items: [
          {
            title: "Streamlined Processing",
            description:
              "We manage the enrollment process from application preparation through payer follow-up, helping keep applications moving toward approval.",
          },
          {
            title: "Compliance-Focused Review",
            description:
              "Our team reviews applications and supporting documents to help ensure they meet applicable CMS, state, and commercial payer requirements.",
          },
          {
            title: "Credentialing & Enrollment Management",
            description:
              "We assist with PECOS enrollment, CAQH management, payer applications, and required documentation.",
          },
          {
            title: "Commercial Payer Support",
            description:
              "We help providers pursue commercial payer participation and support the contracting and credentialing process.",
          },
          {
            title: "Application Quality Control",
            description:
              "Before submission, applications are reviewed for completeness, accuracy, and payer-specific requirements to help minimize avoidable delays.",
          },
          {
            title: "Ongoing Follow-Up",
            description:
              "Our team tracks submitted applications and follows up with payers throughout the process until a final determination is received.",
          },
        ],
      },
    ] satisfies EnrollmentColumn[],
    payerPrompt: {
      heading: "Wondering which is the right insurance company for you?",
      payers: [
        "Medicare",
        "Medicaid",
        "TRICARE",
        "Aetna",
        "UnitedHealthcare",
        "Blue Cross Blue Shield",
        "And More",
      ],
    },
  },
  faqs: {
    heading: "Frequently asked questions",
    items: [
      {
        question: "Why is my provider credentialing taking so long?",
        answer:
          "Credentialing delays can result from incomplete applications, missing documents, CAQH discrepancies, payer backlogs, or additional verification requirements. Torix Solutions manages the process and follows up with payers to help keep applications moving.",
      },
      {
        question:
          "Can Torix Solutions handle Medicare, Medicaid, and commercial payer enrollment?",
        answer:
          "Yes. We assist providers with Medicare, Medicaid, and major commercial payer enrollment based on their state, specialty, taxonomy, and payer requirements.",
      },
      {
        question:
          "What happens if my credentialing application is rejected or returned?",
        answer:
          "Our team reviews the reason for the rejection or return, identifies the issue, makes the necessary corrections, and works toward resubmission and continued payer follow-up.",
      },
      {
        question: "How long does credentialing typically take?",
        answer:
          "Timelines vary by payer, specialty and how complete the initial packet is. During consultation we set expectations for your payer mix and track status so you know what is pending versus confirmed.",
      },
      {
        question: "Do you handle CAQH profile setup and maintenance?",
        answer:
          "Yes. CAQH setup, updates and scheduled attestation are part of the service, because incomplete profiles are one of the most common reasons applications stall.",
      },
      {
        question:
          "What happens if an enrollment application is denied or delayed?",
        answer:
          "We review the reason, correct what we can, resubmit or escalate follow-up with the payer, and keep you informed so the practice isn't left guessing why a panel isn't active.",
      },
      {
        question: "Do you automatically track recredentialing deadlines?",
        answer:
          "Yes. Recredentialing is managed on a calendar with proactive follow-up before deadlines, so renewals don't lapse unnoticed.",
      },
      {
        question: "Is Credentialing and Contract available separately from Medical Billing?",
        answer:
          "Yes. Credentialing and Contract can stand alone or run alongside Medical Billing or Revenue Cycle Management. Many practices use it when adding providers or cleaning up enrollment lag even if billing stays in house.",
      },
      {
        question: "Which insurance networks do you work with?",
        answer:
          "We work across commercial and government payers common to independent practices. Scope is confirmed per engagement based on your specialty, locations and the panels you need to bill.",
      },
    ] satisfies FAQItem[],
  },
  finalCta: {
    heading: "Let's clear the enrollment lag before it hits revenue.",
    subheading:
      "Bring your provider list and the payers you need. We'll show you what's pending, what's at risk, and what we'd file first.",
    cta: { label: "Book a Consultation", href: "/contact" },
  },
};
