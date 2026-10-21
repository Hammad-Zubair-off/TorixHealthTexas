import type { FAQItem } from "@/components/FAQAccordion";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { ProcessStep } from "@/components/ProcessTimeline";
import type { IconName } from "@/components/icons";
import { sharedFaqs } from "@/content/shared-faqs";
import { services } from "@/lib/site";

/** HIPAA-Compliant Software solution page — security & compliance practices. */
export const hipaaCompliantSoftwareContent = {
  meta: {
    title: "HIPAA-Compliant Billing Software",
    description:
      "How Medical Billers protects patient data in billing: a signed BAA before day one, role-based access, audit logging, and encryption in transit and at rest.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Software" },
      { label: services.hipaaSoftware.label },
    ],
    eyebrow: "HIPAA compliance",
    headline: "HIPAA-compliant software and patient data handling.",
    subheadline:
      "Billing means handling protected health information (PHI): names, insurance IDs, diagnoses. HIPAA requires that it stays private. We sign a Business Associate Agreement before you share anything, limit who can see your data, log every access, and encrypt data both when it moves and when it's stored.",
    distinction:
      "These safeguards cover both our billing work and the Medical Billing Software that comes free with it.",
    primaryCta: {
      label: "Ask About Our Compliance Practices",
      href: "/contact",
    },
    secondaryCta: {
      label: "See the Billing Software",
      href: services.billingSoftware.href,
    },
    image: {
      src: "/brand/heroes/hipaa.jpg",
      alt: "Close-up of a security interface representing protected healthcare data",
    },
  },
  means: {
    heading: "What HIPAA compliance means",
    subheading:
      "Four practices that protect patient information in our software and how we operate it.",
    items: [
      {
        icon: "lock" as IconName,
        title: "Data Encryption",
        description:
          "Encryption in transit and at rest so PHI is protected while moving and while stored.",
      },
      {
        icon: "users" as IconName,
        title: "Role-Based Access Control",
        description:
          "Access limited by role so people only see the patient and billing data their job requires.",
      },
      {
        icon: "clipboard" as IconName,
        title: "Staff HIPAA Training",
        description:
          "Everyone who handles PHI is trained on HIPAA obligations and on how our processes protect it day to day.",
      },
      {
        icon: "monitor" as IconName,
        title: "Secure Healthcare Infrastructure",
        description:
          "Systems and environments configured for healthcare workloads, with logging and controls that support accountability.",
      },
    ] satisfies FeatureItem[],
  },
  matters: {
    heading: "Why HIPAA compliance matters",
    subheading:
      "What secure data handling protects for patients and for the practice.",
    items: [
      {
        icon: "shield" as IconName,
        title: "Protect Patient Privacy",
        description:
          "Patient information stays limited to people and systems that need it for care and operations.",
      },
      {
        icon: "alert" as IconName,
        title: "Reduce Compliance Risk",
        description:
          "Documented access, encryption and agreements reduce the exposure that comes from informal or undocumented handling of PHI.",
      },
      {
        icon: "handshake" as IconName,
        title: "Strengthen Patient Trust",
        description:
          "Practices can show patients and partners that privacy is treated as an operational duty, not an afterthought.",
      },
    ] satisfies FeatureItem[],
  },
  process: {
    heading: "How we maintain compliance",
    subheading:
      "Compliance is ongoing: assess, configure, train, monitor and review.",
    steps: [
      {
        title: "Risk Assessment",
        description:
          "We identify where PHI enters our systems and services, and where controls need to be strongest.",
      },
      {
        title: "Secure System Configuration",
        description:
          "Access, encryption and logging configured for the environments that process healthcare data.",
      },
      {
        title: "Staff Training & Access Management",
        description:
          "Roles assigned intentionally, access reviewed, and staff trained on how PHI must be handled.",
      },
      {
        title: "Compliance Monitoring",
        description:
          "Audit logging and operational checks so unusual access or process gaps can be investigated.",
      },
      {
        title: "Continuous Security Review",
        description:
          "Controls revisited as products and workflows change, so compliance does not freeze at go-live.",
      },
    ] satisfies ProcessStep[],
  },
  whyUs: {
    heading: "Why practices trust us with PHI",
    subheading:
      "Healthcare-focused security and support around how PHI is actually used.",
    items: [
      {
        icon: "lock" as IconName,
        title: "Healthcare-Focused Security",
        description:
          "Controls designed for clinical and billing workflows, not generic SaaS settings renamed for healthcare.",
      },
      {
        icon: "shield" as IconName,
        title: "HIPAA-Compliant Data Protection",
        description:
          "Encryption, access control and a signed BAA before PHI is exchanged for software or services.",
      },
      {
        icon: "users" as IconName,
        title: "Secure Access Controls",
        description:
          "Role-based permissions and audit trails so access is limited and reviewable.",
      },
      {
        icon: "headphones" as IconName,
        title: "Named Account Representative",
        description:
          "A US-based representative who can explain how these controls apply to your practice, not only reset passwords.",
      },
    ] satisfies FeatureItem[],
  },
  faqs: {
    heading: "HIPAA questions",
    items: [
      sharedFaqs.baa,
      {
        question: "What does HIPAA compliance mean for your software?",
        answer:
          "It means we design and operate software with safeguards appropriate for PHI: access control, audit logging, encryption, and a Business Associate Agreement before PHI moves. We document those practices rather than relying on a badge alone.",
      },
      {
        question: "How is patient data protected?",
        answer:
          "Through encryption in transit and at rest, role-based access, logging, staff training and contractual BAAs for engagements that involve PHI.",
      },
      {
        question: "Who has access to patient information?",
        answer:
          "Access is limited by role to people who need it for the scoped work. We do not treat PHI as generally available inside the company.",
      },
      {
        question: "How do you secure healthcare data?",
        answer:
          "Secure configuration of systems that process PHI, encryption, access management, monitoring via audit logs and ongoing review as products and processes change.",
      },
      {
        question: "What happens if a security incident occurs?",
        answer:
          "We investigate, contain and follow the notification and response obligations that apply under the BAA and applicable law. Specific playbooks are part of how we operate, not improvised after the fact.",
      },
      {
        question: "How do you maintain ongoing compliance?",
        answer:
          "Through continuous monitoring, access reviews, staff training and security reviews when systems or workflows change, so controls stay aligned with how PHI is actually handled.",
      },
    ] satisfies FAQItem[],
  },
  finalCta: {
    heading: "Talk through compliance for your practice.",
    subheading:
      "Tell us how you handle PHI today and what you need from a vendor. We'll walk through how our controls and BAA process apply to your engagement.",
    cta: {
      label: "Learn About Our Compliance Practices",
      href: "/contact",
    },
  },
};
