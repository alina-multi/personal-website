import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess(), mdsvex()],
  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      precompress: false,
      strict: true,
      fallback: "404.html",
    }),
    prerender: {
      entries: ["*", "/resume", "/sitemap.xml"],
    },
  },
  extensions: [".svelte", ".svx"],
};

export default config;
