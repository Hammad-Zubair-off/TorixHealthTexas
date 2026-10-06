import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/seo-schema";
import { BenefitCards } from "@/components/BenefitCards";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IconFeatureGrid } from "@/components/IconFeatureGrid";
import { Navbar } from "@/components/Navbar";
import { ProseSection } from "@/components/ProseSection";
import { aboutContent } from "@/content/about";

export const metadata: Metadata = buildPageMetadata({
  title: aboutContent.meta.title,
  description: aboutContent.meta.description,
  path: "/about",
});

export default function AboutPage() {
  const c = aboutContent;

  return (
    <>
      <JsonLd data={breadcrumbSchema(c.hero.breadcrumb, "/about")} />
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
        <ProseSection heading={c.story.heading} paragraphs={c.story.paragraphs} band="paper" />
        <BenefitCards
          heading={c.missionVision.heading}
          subheading={c.missionVision.subheading}
          items={c.missionVision.items}
        />
        <IconFeatureGrid
          heading={c.whyTech.heading}
          subheading={c.whyTech.subheading}
          footerNote={c.whyTech.footerNote}
          items={c.whyTech.items}
          variant="deep"
          band="deep"
          minCardWidth={220}
        />
        <BenefitCards
          heading={c.values.heading}
          subheading={c.values.subheading}
          items={c.values.items}
        />
        <IconFeatureGrid
          heading={c.whyUs.heading}
          subheading={c.whyUs.subheading}
          items={c.whyUs.items}
          band="tint"
          minCardWidth={240}
        />
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
