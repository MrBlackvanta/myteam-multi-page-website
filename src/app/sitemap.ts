import { routes, siteUrl } from "@/data";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route, siteUrl).href,
    changeFrequency: "yearly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
