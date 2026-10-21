import type { FAQItem } from "@/components/FAQAccordion";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { EnrollmentColumn } from "@/components/EnrollmentColumns";
import type { IconName } from "@/components/icons";
import { sharedFaqs } from "@/content/shared-faqs";
import { services } from "@/lib/site";

/** Credentialing & Contracting — payer enrollment, CAQH, recredentialing, and related support. */
export const credentialingContent = {
  meta: {
    title: "Provider Credentialing Services in Texas",
    description:
      "Provider credentialing for Texas practices: Medicare via PECOS, Texas Medicaid via TMHP PEMS, commercial payers and CAQH, with renewals tracked so none lapse.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Services" },
      { label: services.credentialing.label },
    ],
    eyebrow: "Credentialing & Contracting",
    headline: "Provider credentialing for Texas payers, start to finish.",
    subheadline:
      "Before an insurance company will pay you, each provider has to be credentialed and enrolled with it. Until that's done, you can see the patient but can't bill the visit. We prepare and file the applications for Medicare, Texas Medicaid and commercial plans, follow up until you're approved, and track renewals so you're never dropped from a network without warning.",
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
    heading: "What credentialing & contracting includes",
    subheading:
      "Enrollment, CAQH, follow-up, contracts, renewals, NPI and PECOS, and privileging support, managed so no application sits waiting.",
    items: [
      {
        icon: "fileText" as IconName,
        title: "Provider Enrollment",
        description:
          "We prepare and file applications with Medicare, Texas Medicaid and commercial payers, so you can start billing as soon as possible.",
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
    heading: "Credentialing and billing for 20 medical specialties",
    subheading:
      "These are the specialties we credential and bill for. If yours isn't listed, ask us; we'll tell you honestly whether we're a fit.",
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
    heading: "Provider enrollment with Texas payers",
    subheading:
      "Government programs and commercial payers follow different rules, timelines and paperwork. We manage both so enrollment delays don't turn into lost revenue.",
    columns: [
      {
        title: "Government Programs",
        payers: "Medicare (Novitas, PECOS) | Texas Medicaid (TMHP PEMS) | TRICARE",
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
              "Medicare enrollment runs through PECOS. Texas Medicaid enrollment runs through TMHP's PEMS system, and it has to be done before you can contract with Medicaid managed care plans.",
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
        payers: "Blue Cross and Blue Shield of Texas | Aetna | UnitedHealthcare | And More",
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
        title: "How We Handle Enrollment",
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
        "Texas Medicaid",
        "TRICARE",
        "Aetna",
        "UnitedHealthcare",
        "Blue Cross and Blue Shield of Texas",
        "And More",
      ],
    },
  },
  faqs: {
    heading: "Credentialing questions",
    items: [
      {
        question: "How long does provider credentialing take, and why is mine slow?",
        answer:
          "It varies by payer, specialty and how complete the first application is. Most delays come from missing documents, an out-of-date CAQH profile, payer backlogs or extra verification requests. We set expectations for your payer mix up front and track every application, so you know what is pending and what is approved.",
      },
      sharedFaqs.texasMedicaid,
      sharedFaqs.medicare,
      {
        question: "What happens if an application is denied, returned or stalled?",
        answer:
          "We find out why, correct what's needed, resubmit or escalate with the payer, and keep you updated, so you're never left guessing why a network isn't active yet.",
      },
      {
        question: "Do you handle CAQH profile setup and maintenance?",
        answer:
          "Yes. CAQH setup, updates and scheduled re-attestation are part of the service, because an incomplete profile is one of the most common reasons applications stall.",
      },
      {
        question: "Do you track recredentialing and revalidation deadlines?",
        answer:
          "Yes. Renewal dates for every provider and payer, including Medicare and Texas Medicaid revalidation, are tracked on a calendar and started early, so nothing lapses unnoticed.",
      },
      {
        question: "Can we use credentialing without outsourcing our billing?",
        answer:
          "Yes. Credentialing & Contracting can stand alone or run alongside Medical Billing. Many practices use it when adding a new provider or cleaning up enrollment problems, even if billing stays in house.",
      },
      sharedFaqs.pricing,
    ] satisfies FAQItem[],
  },
  finalCta: {
    heading: "Let's clear the enrollment lag before it hits revenue.",
    subheading:
      "Bring your provider list and the payers you need. We'll show you what's pending, what's at risk, and what we'd file first.",
    cta: { label: "Book a Consultation", href: "/contact" },
  },
};
