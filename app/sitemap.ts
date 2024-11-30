import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://goldenretreatinternational.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: "https://goldenretreatinternational.com/villas",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: "https://goldenretreatinternational.com/investment",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: "https://goldenretreatinternational.com/contact",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5
    },
    {
      url: "https://goldenretreatinternational.com/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5
    },
    {
      url: "https://goldenretreatinternational.com/lombok",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5
    },
    {
      url: "https://goldenretreatinternational.com/privacypolicy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2
    },
    {
      url: "https://goldenretreatinternational.com/gallery",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5
    }
  ];
}
