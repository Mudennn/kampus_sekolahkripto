import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), react(), tailwind()],
  output: "server",
  adapter: vercel()
});