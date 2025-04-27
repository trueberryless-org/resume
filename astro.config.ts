import { defineConfig } from "astro/config";

import expressiveCode from "astro-expressive-code";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import spectre from "./package/src";

import { spectreDark } from "./src/ec-theme";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://resume.trueberryless.org",
  output: "static",
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: "Felix Schneider",
      themeColor: "#1ED760",
      twitterHandle: "@trueberryless",
      openGraph: {
        home: {
          title: "Felix Schneider",
          description: "Welcome to my resume.",
        },
      },
    }),
  ],
  adapter: netlify(),
});
