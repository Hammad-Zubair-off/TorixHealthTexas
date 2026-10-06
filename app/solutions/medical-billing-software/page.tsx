import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata } from "@/lib/site";
import { faqPageSchema, breadcrumbSchema } from "@/lib/seo-schema";
import { BenefitCards } from "@/components/BenefitCards";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IconFeatureGrid } from "@/components/IconFeatureGrid";
import { Navbar } from "@/components/Navbar";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { medicalBillingSoftwareContent } from "@/content/medical-billing-software";

export const metadata: Metadata = buildPageMetadata({
  title: medicalBillingSoftwareContent.meta.title,
  description: medicalBillingSoftwareContent.meta.description,
  path: "/solutions/medical-billing-software",
});

export default function MedicalBillingSoftwarePage() {
  const c = medicalBillingSoftwareContent;

  return (
    <>
      <JsonLd data={[faqPageSchema(c.faqs.items), breadcrumbSchema(c.hero.breadcrumb, "/solutions/medical-billing-software")]} />
      <Navbar />
      <main>
        <Hero
          breadcrumb={c.hero.breadcrumb}
          eyebrow={c.hero.eyebrow}
          headline={c.hero.headline}
          subheadline={c.hero.subheadline}
          primaryCta={c.hero.primaryCta}
          secondaryCta={c.hero.secondaryCta}
          consultationNote={c.hero.distinction}
          image={c.hero.image}
        />
        <IconFeatureGrid
          heading={c.features.heading}
          subheading={c.features.subheading}
          items={c.features.items}
          band="paper"
          minCardWidth={240}
        />
        <IconFeatureGrid
          heading={c.problems.heading}
          subheading={c.problems.subheading}
          items={c.problems.items}
          variant="deep"
          band="deep"
          minCardWidth={240}
        />
        <ProcessTimeline
          heading={c.process.heading}
          subheading={c.process.subheading}
          steps={c.process.steps}
        />
        <BenefitCards
          heading={c.benefits.heading}
          subheading={c.benefits.subheading}
          items={c.benefits.items}
        />
        <IconFeatureGrid
          heading={c.whyUs.heading}
          subheading={c.whyUs.subheading}
          items={c.whyUs.items}
          band="tint"
          minCardWidth={240}
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
