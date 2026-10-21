import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata, services } from "@/lib/site";
import { faqPageSchema, breadcrumbSchema, serviceSchema } from "@/lib/seo-schema";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IconFeatureGrid } from "@/components/IconFeatureGrid";
import { Navbar } from "@/components/Navbar";
import { medicalBillingContent } from "@/content/medical-billing";

const path = services.medicalBilling.href;

export const metadata: Metadata = buildPageMetadata({
  title: medicalBillingContent.meta.title,
  description: medicalBillingContent.meta.description,
  path,
});

export default function MedicalBillingPage() {
  const c = medicalBillingContent;

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: services.medicalBilling.label, description: c.meta.description, path }),
          faqPageSchema(c.faqs.items),
          breadcrumbSchema(c.hero.breadcrumb, path),
        ]}
      />
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
          footerNote={c.howItWorks.footerNote}
          items={c.howItWorks.items}
          band="paper"
        />
        <IconFeatureGrid
          heading={c.texasPayers.heading}
          subheading={c.texasPayers.subheading}
          items={c.texasPayers.items}
          variant="deep"
          band="deep"
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
