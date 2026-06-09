// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import { execSync } from "child_process";

// Custom integration to sync Substack posts before build
const substackSyncIntegration = {
  name: "substack-sync",
  hooks: {
    "astro:build:start": async () => {
      console.log("🔄 Syncing Substack posts...");
      try {
        execSync("npm run sync:substack", { stdio: "inherit" });
        console.log("✅ Substack sync complete!");
      } catch (error) {
        console.error("❌ Failed to sync Substack posts:", error?.message);
        throw error;
      }
    },
  },
};

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [substackSyncIntegration, mdx(), sitemap()],
  fonts: [
    {
      provider: fontProviders.local(),
      name: "GeneralSans",
      cssVariable: "--font-general-sans",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/GeneralSans-Regular.otf"],
            weight: 400,
            style: "normal",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/GeneralSans-Semibold.otf"],
            weight: 500,
            style: "normal",
            display: "swap",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Ligema",
      cssVariable: "--font-ligema",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Ligema-Regular.woff"],
            weight: 400,
            style: "normal",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/Ligema-Regular.woff2"],
            weight: 400,
            style: "normal",
            display: "swap",
          },
        ],
      },
    },
  ],
});
