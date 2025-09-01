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
      fallback: undefined, // якщо потрібно SPA fallback, можна "index.html"
      precompress: false,
      strict: true,
    }),
  },
  extensions: [".svelte", ".svx"],
};

export default config;
