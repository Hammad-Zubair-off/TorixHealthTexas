import type { BenefitItem } from "@/components/BenefitCards";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { IconName } from "@/components/icons";

/** About Us page copy from provided company brief. */
export const aboutContent = {
  meta: {
    title: "About Us",
    description:
      "Torix Solutions helps healthcare organizations simplify operations through medical billing services, in-house healthcare technology, and compliance-focused solutions that work together.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "About Us" },
    ],
    eyebrow: "Who we are",
    headline: "Services and technology that work together.",
    subheadline:
      "At Torix Solutions, we help healthcare organizations simplify operations through reliable medical billing services, healthcare technology, and compliance-focused solutions. By combining industry expertise with in-house software development, we deliver connected solutions that improve efficiency, reduce administrative burdens, and support better financial outcomes.",
    distinction:
      "Our goal is to become a trusted partner for healthcare providers by delivering services and technology that work together, not separately.",
    primaryCta: { label: "Book a Consultation", href: "/contact" },
    secondaryCta: {
      label: "Explore Services",
      href: "/services/medical-billing",
    },
    image: {
      src: "/brand/heroes/about.jpg",
      alt: "Healthcare professional representing the Torix Solutions partnership approach",
    },
  },
  story: {
    heading: "Our story",
    paragraphs: [
      "Every healthcare practice faces increasing administrative complexity, from billing and compliance to managing multiple software systems. We recognized the need for a better approach: one that combines healthcare expertise with modern technology.",
      "Torix Solutions was founded to help healthcare providers streamline their operations through dependable revenue cycle services and innovative healthcare software. Rather than offering disconnected solutions, we focus on creating a unified experience that supports practices at every stage of their growth.",
      "As healthcare continues to evolve, our commitment remains the same: delivering practical solutions that allow providers to spend less time on administrative work and more time caring for patients.",
    ],
  },
  missionVision: {
    heading: "Mission & vision",
    subheading: "What we work toward with every engagement.",
    items: [
      {
        icon: "activity" as IconName,
        title: "Our mission",
        description:
          "To empower healthcare organizations with innovative technology and professional operational services that simplify workflows, strengthen compliance, and improve financial performance.",
      },
      {
        icon: "layers" as IconName,
        title: "Our vision",
        description:
          "To become a trusted global healthcare technology partner, helping medical practices achieve greater efficiency through connected software and expert healthcare solutions.",
      },
    ] satisfies BenefitItem[],
  },
  whyTech: {
    heading: "Why healthcare & technology",
    subheading:
      "Healthcare is no longer powered by services alone. Success depends on the seamless integration of technology, compliance, and operational excellence. At Torix Solutions, we combine healthcare expertise with software development to create solutions that support modern medical practices.",
    footerNote:
      "By developing our own technology while delivering healthcare services, we understand both the operational and technical challenges providers face every day.",
    items: [
      {
        icon: "fileText" as IconName,
        title: "Medical Billing",
        description: "Claim operations scoped to submission, posting and denial follow-up.",
        href: "/services/medical-billing",
        ctaLabel: "Learn more →",
      },
      {
        icon: "clipboard" as IconName,
        title: "Medical Coding",
        description: "ICD-10 and CPT assignment with documentation support.",
        href: "/services/medical-coding",
        ctaLabel: "Learn more →",
      },
      {
        icon: "activity" as IconName,
        title: "Revenue Cycle Management",
        description: "Full-cycle cash path from registration through collections.",
        href: "/services/revenue-cycle-management",
        ctaLabel: "Learn more →",
      },
      {
        icon: "building" as IconName,
        title: "Credentialing and Contract",
        description: "Enrollment, CAQH and recredentialing so providers can bill.",
        href: "/services/credentialing",
        ctaLabel: "Learn more →",
      },
      {
        icon: "check" as IconName,
        title: "Medical Billing Audit",
        description: "Independent documentation, coding and compliance review.",
        href: "/services/medical-audit",
        ctaLabel: "Learn more →",
      },
      {
        icon: "shield" as IconName,
        title: "HIPAA-Focused Solutions",
        description: "Access control, encryption and documented compliance practices.",
        href: "/solutions/hipaa-compliant-software",
        ctaLabel: "Learn more →",
      },
      {
        icon: "code" as IconName,
        title: "Healthcare Software Development",
        description: "Platform and billing software built and maintained in house.",
        href: "/solutions/healthcare-platform",
        ctaLabel: "Learn more →",
      },
    ] satisfies FeatureItem[],
  },
  values: {
    heading: "Our values",
    subheading: "How we show up for practices and for each other.",
    items: [
      {
        icon: "clipboard" as IconName,
        title: "Transparency",
        description:
          "We believe strong partnerships begin with honest communication, clear expectations, and complete visibility throughout every project.",
      },
      {
        icon: "check" as IconName,
        title: "Accountability",
        description:
          "We take ownership of our work and remain committed to delivering dependable solutions that our clients can trust.",
      },
      {
        icon: "activity" as IconName,
        title: "Innovation",
        description:
          "We continuously improve our services and technology to help healthcare organizations operate more efficiently in an ever-changing industry.",
      },
      {
        icon: "handshake" as IconName,
        title: "Partnership",
        description:
          "We work as an extension of our clients' teams, building long-term relationships focused on shared success rather than short-term transactions.",
      },
    ] satisfies BenefitItem[],
  },
  whyUs: {
    heading: "Why choose Torix Solutions",
    subheading: "What practices get when services and technology stay under one partner.",
    items: [
      {
        icon: "layers" as IconName,
        title: "Comprehensive healthcare solutions",
        description: "Billing, coding, RCM, credentialing, audits and software under one trusted partner.",
      },
      {
        icon: "code" as IconName,
        title: "In-house healthcare technology",
        description: "Software developed and maintained by Torix, not a white-labelled product.",
      },
      {
        icon: "shield" as IconName,
        title: "HIPAA-conscious operations",
        description: "Compliance-focused practices across services and technology engagements.",
      },
      {
        icon: "activity" as IconName,
        title: "Scalable for practices of all sizes",
        description: "Engagements scoped to independent practices and growing organizations alike.",
      },
      {
        icon: "handshake" as IconName,
        title: "Dedicated client support",
        description: "Long-term partnerships with named contacts rather than ticket-only support.",
      },
      {
        icon: "monitor" as IconName,
        title: "Modern technology, healthcare expertise",
        description: "Operational know-how backed by software built for how practices actually work.",
      },
    ] satisfies FeatureItem[],
  },
  finalCta: {
    heading: "Let's build better healthcare operations together.",
    subheading:
      "Whether you're looking to improve your revenue cycle, modernize your healthcare technology, or strengthen your operational workflows, Torix Solutions is here to help.",
    cta: { label: "Book a Consultation", href: "/contact" },
  },
};
