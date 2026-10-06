import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Healthcare SEO",
  description:
    "Healthcare SEO is under review and not yet approved for launch.",
  path: "/services/healthcare-seo",
  noIndex: true,
});

export default function HealthcareSeoPage() {
  return (
    <ComingSoon
      feature="Healthcare SEO"
      eyebrow="Under review"
      description="This offering is still under review and is not yet approved for launch. Check back later, or contact us about billing and technology services."
    />
  );
}
