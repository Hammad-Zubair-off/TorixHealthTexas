import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/seo-schema";
import { BenefitCards } from "@/components/BenefitCards";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IconFeatureGrid } from "@/components/IconFeatureGrid";
import { JobOpenings } from "@/components/JobOpenings";
import { Navbar } from "@/components/Navbar";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ProseSection } from "@/components/ProseSection";
import { careersContent } from "@/content/careers";

export const metadata: Metadata = buildPageMetadata({
  title: careersContent.meta.title,
  description: careersContent.meta.description,
  path: "/careers",
});

export default function CareersPage() {
  const c = careersContent;

  return (
    <>
      <JsonLd data={breadcrumbSchema(c.hero.breadcrumb, "/careers")} />
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
          heading={c.whyJoin.heading}
          subheading={c.whyJoin.subheading}
          items={c.whyJoin.items}
          band="paper"
          minCardWidth={240}
        />
        <IconFeatureGrid
          heading={c.whatWeDo.heading}
          subheading={c.whatWeDo.subheading}
          items={c.whatWeDo.items}
          variant="deep"
          band="deep"
          minCardWidth={220}
        />
        <ProseSection
          heading={c.life.heading}
          paragraphs={c.life.paragraphs}
          band="bg"
        />
        <IconFeatureGrid
          heading={c.culture.heading}
          items={c.culture.items}
          band="tint"
          minCardWidth={200}
        />
        <BenefitCards
          heading={c.benefits.heading}
          subheading={c.benefits.subheading}
          items={c.benefits.items}
        />
        <div id="openings">
          <JobOpenings
            heading={c.openings.heading}
            subheading={c.openings.subheading}
            openings={c.openings.items}
            footerNote={c.openings.footerNote}
            footerCta={c.openings.footerCta}
          />
        </div>
        <ProcessTimeline
          heading={c.hiring.heading}
          subheading={c.hiring.subheading}
          steps={c.hiring.steps}
        />
        <IconFeatureGrid
          heading={c.values.heading}
          subheading={c.values.subheading}
          items={c.values.items}
          band="tint"
          minCardWidth={200}
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
