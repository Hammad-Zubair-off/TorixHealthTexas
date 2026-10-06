import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata } from "@/lib/site";
import { faqPageSchema, breadcrumbSchema } from "@/lib/seo-schema";
import { CTABanner } from "@/components/CTABanner";
import { EnrollmentColumns } from "@/components/EnrollmentColumns";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IconFeatureGrid } from "@/components/IconFeatureGrid";
import { Navbar } from "@/components/Navbar";
import { credentialingContent } from "@/content/credentialing";

export const metadata: Metadata = buildPageMetadata({
  title: credentialingContent.meta.title,
  description: credentialingContent.meta.description,
  path: "/services/credentialing",
});

export default function CredentialingPage() {
  const c = credentialingContent;

  return (
    <>
      <JsonLd data={[faqPageSchema(c.faqs.items), breadcrumbSchema(c.hero.breadcrumb, "/services/credentialing")]} />
      <Navbar />
      <main>
        <Hero
          breadcrumb={c.hero.breadcrumb}
          eyebrow={c.hero.eyebrow}
          headline={c.hero.headline}
          subheadline={c.hero.subheadline}
          primaryCta={c.hero.primaryCta}
          secondaryCta={c.hero.secondaryCta}
          image={c.hero.image}
        />
        <IconFeatureGrid
          heading={c.howItWorks.heading}
          subheading={c.howItWorks.subheading}
          items={c.howItWorks.items}
          band="paper"
        />
        <IconFeatureGrid
          heading={c.specialties.heading}
          subheading={c.specialties.subheading}
          items={c.specialties.items}
          band="bg"
        />
        <EnrollmentColumns
          heading={c.enrollmentSolutions.heading}
          subheading={c.enrollmentSolutions.subheading}
          columns={c.enrollmentSolutions.columns}
          payerPrompt={c.enrollmentSolutions.payerPrompt}
        />
        <FAQAccordion heading={c.faqs.heading} items={c.faqs.items} />
        <CTABanner
          heading={c.finalCta.heading}
          subheading={c.finalCta.subheading}
          cta={c.finalCta.cta}
        />
      </main>
      <Footer />
    </>
  );
}
