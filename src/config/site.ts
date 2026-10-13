export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Evolve a Cell Wiki",
  shortName: "Evolve a Cell",
  logoText: "E",
  tagline: "Evolution Guides, Mutations, Forms & Codes",
  description: "Your ultimate guide to Evolve a Cell on Roblox! Explore evolution stages, mutation strategies, creature forms, best upgrades, and progression tips.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://evolve-a-cell.wiki",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://evolve-a-cell.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/75545101555306/Evolve-a-Cell",
  heroVideoId: "4WQgBURQJbw", // Evolve a Cell gameplay/guide video (Roblox)
  social: {
    youtube: "https://www.youtube.com/results?search_query=evolve+a+cell+roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
