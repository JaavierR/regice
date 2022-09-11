import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import mdx from "@astrojs/mdx";
import remarkGfm from "remark-gfm";
import rehypePrism from "@mapbox/rehype-prism";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  markdown: {
    syntaxHighlight: "prism",
  },
  integrations: [
    react(),
    mdx({
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
    }),
  ],
});
