import { siBluesky, siDiscord, siInstagram, siSteam, siTiktok, siX, siYoutube } from "simple-icons";

export const site = {
  name: "Studio Reset",
  url: "https://studioreset.io",
  email: "info@studioreset.io",
  location: "Edmonton, Alberta, Canada",
  steamUrl: "https://store.steampowered.com/app/4038610/The_Eventide/",
  discordUrl: "https://discord.gg/Ps4Qk4y8wv"
};

// Simple Icons no longer ships LinkedIn, so its "in" mark is drawn here.
const linkedinPath =
  "M5.2 3a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 8.6h3.8V21H3.3V8.6Zm6.2 0h3.6v1.7h.1c.5-1 1.8-2 3.6-2 3.9 0 4.6 2.5 4.6 5.8V21h-3.8v-6c0-1.4 0-3.3-2-3.3s-2.3 1.6-2.3 3.2V21H9.5V8.6Z";

export const socials = [
  { name: "Discord", url: site.discordUrl, path: siDiscord.path },
  { name: "Instagram", url: "https://www.instagram.com/studioresetgames/", path: siInstagram.path },
  { name: "YouTube", url: "https://www.youtube.com/@StudioReset-io", path: siYoutube.path },
  { name: "Bluesky", url: "https://bsky.app/profile/studioresetgames.bsky.social", path: siBluesky.path },
  { name: "X", url: "https://x.com/StudioResetGame", path: siX.path },
  { name: "TikTok", url: "https://www.tiktok.com/@studioresetgames", path: siTiktok.path },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/studio-reset-games", path: linkedinPath },
  { name: "Steam", url: site.steamUrl, path: siSteam.path }
];

export const organization = {
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  url: `${site.url}/`,
  logo: `${site.url}/apple-touch-icon.png`,
  email: site.email,
  description:
    "Studio Reset is a Canadian independent game studio creating story-rich games built around mystery, perspective, and player discovery.",
  address: { "@type": "PostalAddress", addressLocality: "Edmonton", addressRegion: "AB", addressCountry: "CA" },
  founder: [
    { "@type": "Person", name: "Kaelin Lavallee", jobTitle: "Creative Director" },
    { "@type": "Person", name: "Francis Lacuna", jobTitle: "Art Director" },
    { "@type": "Person", name: "Kris Schoneberg", jobTitle: "Design Director" }
  ],
  sameAs: socials.filter((s) => s.name !== "Steam").map((s) => s.url)
};
