import type { Metadata } from "next";
import { buildPageMetadata, siteName } from "@/lib/site";

/** Shared metadata helper for unfinished route stubs (noindex). */
export function comingSoonMetadata(
  feature: string,
  path: string,
): Metadata {
  return buildPageMetadata({
    title: feature,
    description: `${feature} is coming soon from ${siteName}.`,
    path,
    noIndex: true,
  });
}
