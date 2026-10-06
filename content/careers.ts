import type { BenefitItem } from "@/components/BenefitCards";
import type { FeatureItem } from "@/components/IconFeatureGrid";
import type { JobOpening } from "@/components/JobOpenings";
import type { ProcessStep } from "@/components/ProcessTimeline";
import type { IconName } from "@/components/icons";

/** Careers page copy from provided hiring brief. */
export const careersContent = {
  meta: {
    title: "Careers",
    description:
      "Join Torix Solutions and help transform healthcare through technology, medical billing expertise, and operational excellence. Explore open positions and our hiring process.",
  },
  hero: {
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Careers" },
    ],
    eyebrow: "Careers",
    headline: "Build the future of healthcare with Torix Solutions.",
    subheadline:
      "Join a team that's transforming healthcare through technology, innovation, and operational excellence. We're passionate about building solutions that simplify healthcare operations, improve revenue cycles, and empower providers to focus on patient care.",
    distinction:
      "Whether you're an experienced professional or just starting your career, we believe great people create great solutions.",
    primaryCta: { label: "Explore Open Positions", href: "#openings" },
    secondaryCta: { label: "Send Your Resume", href: "/contact" },
    image: {
      src: "/brand/heroes/careers.jpg",
      alt: "Collaborative team working together in a modern workplace",
    },
  },
  whyJoin: {
    heading: "Why join Torix Solutions?",
    subheading:
      "We're more than a workplace. We're a team that values collaboration, innovation, and continuous learning.",
    items: [
      {
        icon: "activity" as IconName,
        title: "Meaningful Impact",
        description:
          "Help healthcare providers improve their operations through technology and professional services that make a real difference.",
      },
      {
        icon: "layers" as IconName,
        title: "Professional Growth",
        description:
          "Expand your skills by working on healthcare software, medical billing solutions, compliance initiatives, and innovative technology projects.",
      },
      {
        icon: "users" as IconName,
        title: "Collaborative Environment",
        description:
          "Work alongside talented professionals who believe in sharing knowledge, supporting one another, and achieving success together.",
      },
      {
        icon: "code" as IconName,
        title: "Innovation-Driven Culture",
        description:
          "We're constantly exploring new technologies and better ways to solve healthcare challenges.",
      },
    ] satisfies FeatureItem[],
  },
  whatWeDo: {
    heading: "What we do",
    subheading:
      "Our team works across a wide range of healthcare solutions. Every role contributes to helping healthcare organizations operate more efficiently and deliver better patient experiences.",
    items: [
      {
        icon: "fileText" as IconName,
        title: "Medical Billing",
        href: "/services/medical-billing",
        ctaLabel: "Learn more →",
      },
      {
        icon: "activity" as IconName,
        title: "Revenue Cycle Management",
        href: "/services/revenue-cycle-management",
        ctaLabel: "Learn more →",
      },
      {
        icon: "clipboard" as IconName,
        title: "Medical Coding",
        href: "/services/medical-coding",
        ctaLabel: "Learn more →",
      },
      {
        icon: "building" as IconName,
        title: "Credentialing and Contract",
        href: "/services/credentialing",
        ctaLabel: "Learn more →",
      },
      {
        icon: "check" as IconName,
        title: "Medical Billing Audit",
        href: "/services/medical-audit",
        ctaLabel: "Learn more →",
      },
      {
        icon: "code" as IconName,
        title: "Healthcare Software Development",
        href: "/solutions/medical-billing-software",
        ctaLabel: "Learn more →",
      },
      {
        icon: "shield" as IconName,
        title: "HIPAA-Focused Solutions",
        href: "/solutions/hipaa-compliant-software",
        ctaLabel: "Learn more →",
      },
      {
        icon: "layers" as IconName,
        title: "Healthcare Platform Development",
        href: "/solutions/healthcare-platform",
        ctaLabel: "Learn more →",
      },
    ] satisfies FeatureItem[],
  },
  life: {
    heading: "Life at Torix Solutions",
    paragraphs: [
      "We believe the best ideas come from people who are encouraged to grow, collaborate, and innovate.",
      "We're committed to creating an environment where every team member can do their best work while continuing to develop personally and professionally.",
    ],
  },
  culture: {
    heading: "Our culture is built on",
    items: [
      {
        icon: "users" as IconName,
        title: "Collaboration",
        description: "We share knowledge and succeed as a team.",
      },
      {
        icon: "check" as IconName,
        title: "Accountability",
        description: "We own our work and follow through for clients and teammates.",
      },
      {
        icon: "clipboard" as IconName,
        title: "Continuous Learning",
        description: "We keep growing skills as healthcare and technology change.",
      },
      {
        icon: "activity" as IconName,
        title: "Innovation",
        description: "We look for better ways to solve real practice problems.",
      },
      {
        icon: "handshake" as IconName,
        title: "Respect",
        description: "We treat colleagues, clients and patients' data with care.",
      },
      {
        icon: "layers" as IconName,
        title: "Professional Development",
        description: "We invest in people who want to build lasting careers here.",
      },
    ] satisfies FeatureItem[],
  },
  benefits: {
    heading: "Benefits",
    subheading: "What we offer teammates who join Torix Solutions.",
    items: [
      {
        icon: "check" as IconName,
        title: "Competitive Compensation",
        description: "Pay that reflects the skill and responsibility of the role.",
      },
      {
        icon: "mapPin" as IconName,
        title: "Flexible Working Environment",
        description: "Ways of working that support focus and real life.",
      },
      {
        icon: "clipboard" as IconName,
        title: "Professional Development",
        description: "Opportunities to deepen healthcare and technology skills.",
      },
      {
        icon: "activity" as IconName,
        title: "Career Growth",
        description: "Paths to take on more scope as you grow with the team.",
      },
      {
        icon: "users" as IconName,
        title: "Collaborative Team Culture",
        description: "A workplace built on shared goals, not siloed handoffs.",
      },
      {
        icon: "monitor" as IconName,
        title: "Modern Tools & Technology",
        description: "The systems and stack you need to do high-quality work.",
      },
      {
        icon: "handshake" as IconName,
        title: "Performance Recognition",
        description: "Credit for strong work that helps practices and teammates.",
      },
      {
        icon: "layers" as IconName,
        title: "Learning & Training Programs",
        description: "Structured learning for role skills and compliance readiness.",
      },
    ] satisfies BenefitItem[],
  },
  openings: {
    heading: "Current openings",
    subheading: "We're always looking for talented individuals to join our growing team.",
    footerNote:
      "Don't see a role that matches your skills? We'd still love to hear from you.",
    footerCta: { label: "Send Your Resume", href: "/contact" },
    items: [
      {
        title: "Front-End Developer",
        description:
          "Build intuitive healthcare applications using modern web technologies.",
        location: "United States",
        employmentType: "Full-Time",
        href: "/contact",
      },
      {
        title: "Medical Billing Specialist",
        description:
          "Support healthcare providers through accurate billing and revenue cycle management.",
        location: "United States",
        employmentType: "Full-Time",
        href: "/contact",
      },
      {
        title: "Medical Coding Specialist",
        description:
          "Ensure accurate coding while supporting compliance and reimbursement processes.",
        location: "United States",
        employmentType: "Full-Time",
        href: "/contact",
      },
      {
        title: "UI/UX Designer",
        description:
          "Design intuitive digital experiences for healthcare professionals and patients.",
        location: "United States",
        employmentType: "Full-Time",
        href: "/contact",
      },
      {
        title: "Business Development Executive",
        description:
          "Help grow our partnerships and expand our healthcare solutions across new markets.",
        location: "United States",
        employmentType: "Full-Time",
        href: "/contact",
      },
    ] satisfies JobOpening[],
  },
  hiring: {
    heading: "Our hiring process",
    subheading: "A clear path from application to your first day on the team.",
    steps: [
      {
        title: "Submit Your Application",
        description: "Send us your resume along with a brief introduction.",
      },
      {
        title: "Initial Review",
        description: "Our hiring team reviews your experience and qualifications.",
      },
      {
        title: "Interview",
        description:
          "Meet with our team to discuss your skills, experience, and career goals.",
      },
      {
        title: "Final Evaluation",
        description:
          "We'll assess technical and cultural fit before making a decision.",
      },
      {
        title: "Welcome to Torix Solutions",
        description:
          "Begin your journey with onboarding, training, and support from our team.",
      },
    ] satisfies ProcessStep[],
  },
  values: {
    heading: "Our values",
    subheading:
      "These values guide everything we build, every solution we deliver, and every relationship we create.",
    items: [
      {
        icon: "activity" as IconName,
        title: "Innovation",
        description: "We look for better ways to solve healthcare challenges.",
      },
      {
        icon: "shield" as IconName,
        title: "Integrity",
        description: "We communicate honestly and handle work and data with care.",
      },
      {
        icon: "users" as IconName,
        title: "Collaboration",
        description: "We succeed by working across disciplines, not in silos.",
      },
      {
        icon: "check" as IconName,
        title: "Accountability",
        description: "We own outcomes for clients and for each other.",
      },
      {
        icon: "handshake" as IconName,
        title: "Customer Success",
        description: "We measure ourselves by how well practices succeed with us.",
      },
      {
        icon: "layers" as IconName,
        title: "Continuous Improvement",
        description: "We keep refining services, software and how we work.",
      },
    ] satisfies FeatureItem[],
  },
  finalCta: {
    heading: "Ready to join our team?",
    subheading:
      "If you're passionate about healthcare, technology, and solving meaningful challenges, we'd love to hear from you. Whether you're experienced or just beginning, Torix Solutions offers opportunities to learn, grow, and make a lasting impact.",
    cta: { label: "Apply Now", href: "/contact" },
  },
};
