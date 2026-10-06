import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata } from "@/lib/site";
import { faqPageSchema, breadcrumbSchema } from "@/lib/seo-schema";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IconFeatureGrid } from "@/components/IconFeatureGrid";
import { Navbar } from "@/components/Navbar";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { hipaaCompliantSoftwareContent } from "@/content/hipaa-compliant-software";

export const metadata: Metadata = buildPageMetadata({
  title: hipaaCompliantSoftwareContent.meta.title,
  description: hipaaCompliantSoftwareContent.meta.description,
  path: "/solutions/hipaa-compliant-software",
});

export default function HipaaCompliantSoftwarePage() {
  const c = hipaaCompliantSoftwareContent;

  return (
    <>
      <JsonLd data={[faqPageSchema(c.faqs.items), breadcrumbSchema(c.hero.breadcrumb, "/solutions/hipaa-compliant-software")]} />
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
          heading={c.means.heading}
          subheading={c.means.subheading}
          items={c.means.items}
          band="paper"
          minCardWidth={240}
        />
        <IconFeatureGrid
          heading={c.matters.heading}
          subheading={c.matters.subheading}
          items={c.matters.items}
          variant="deep"
          band="deep"
          minCardWidth={240}
        />
        <ProcessTimeline
          heading={c.process.heading}
          subheading={c.process.subheading}
          steps={c.process.steps}
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
