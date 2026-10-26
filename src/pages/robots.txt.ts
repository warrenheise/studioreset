import type { APIRoute } from "astro";

// Preview builds (GitHub Pages) stay out of search results until the real domain is live.
export const GET: APIRoute = ({ site }) => {
  const live = site?.hostname === "studioreset.io";
  const body = live
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL("sitemap-index.xml", site)}\n`
    : "User-agent: *\nDisallow: /\n";
  return new Response(body, { headers: { "Content-Type": "text/plain" } });
};
