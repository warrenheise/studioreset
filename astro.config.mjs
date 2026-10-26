import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// GitHub Pages serves this repo under /studioreset/ until it moves to its own
// domain. The deploy workflow sets SITE_URL and BASE_PATH; locally both default
// to the real domain at the root.
export default defineConfig({
  site: process.env.SITE_URL ?? "https://studioreset.io",
  base: process.env.BASE_PATH ?? "/",
  trailingSlash: "always",
  integrations: [sitemap({ filter: (page) => !/\/(home|404)\/?$/.test(new URL(page).pathname) })],
  security: {
    // GitHub Pages can't send security headers, so the policy ships as a
    // <meta> tag. Add a host here before embedding anything new from it.
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data: https://i.ytimg.com",
        "media-src 'self'",
        "font-src 'self'",
        "frame-src https://www.youtube-nocookie.com",
        "form-action 'self'",
        "base-uri 'self'",
        "object-src 'none'"
      ],
      // The layout grid places blocks through inline style attributes.
      styleDirective: { resources: ["'self'", { resource: "'unsafe-inline'", kind: "attribute" }] }
    }
  }
});
