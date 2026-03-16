export default function sitemap() {
  const base = "https://evanbarbers.co.uk";

  return [
    {
      url: base,
      lastModified: new Date("2026-03-16"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${base}/about`,
      lastModified: new Date("2026-03-16"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/services`,
      lastModified: new Date("2026-03-16"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/contact`,
      lastModified: new Date("2026-03-16"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/wimbledon`,
      lastModified: new Date("2026-03-16"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/grand-drive`,
      lastModified: new Date("2026-03-16"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
