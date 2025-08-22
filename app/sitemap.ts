import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mediviz-portfolio-v2.vercel.app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://mediviz-portfolio-v2.vercel.app/#portfolio",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://mediviz-portfolio-v2.vercel.app/#about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://mediviz-portfolio-v2.vercel.app/#contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]
}
