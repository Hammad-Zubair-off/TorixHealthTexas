import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata } from "@/lib/site";
import { faqPageSchema } from "@/lib/seo-schema";
import { ContactPanel } from "@/components/ContactPanel";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Footer } from "@/components/Footer";
import { IconFeatureGrid } from "@/components/IconFeatureGrid";
import { Navbar } from "@/components/Navbar";
import { contactContent } from "@/content/contact";

export const metadata: Metadata = buildPageMetadata({
  title: contactContent.meta.title,
  description: contactContent.meta.description,
  path: "/contact",
});

export default function ContactPage() {
  const c = contactContent;

  return (
    <>
      <JsonLd data={faqPageSchema(c.faqs.items)} />
      <Navbar />
      <main>
        <ContactPanel
          heading={c.panel.heading}
          subheading={c.panel.subheading}
          details={c.panel.details}
          hours={c.panel.hours}
          formHeading={c.panel.formHeading}
          formIntro={c.panel.formIntro}
          serviceOptions={c.serviceOptions}
        />
        <IconFeatureGrid
          heading={c.whyContact.heading}
          subheading={c.whyContact.subheading}
          items={c.whyContact.items}
          band="tint"
          minCardWidth={220}
        />
        <FAQAccordion heading={c.faqs.heading} items={c.faqs.items} />
      </main>
      <Footer />
    </>
  );
}
