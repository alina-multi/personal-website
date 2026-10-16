// import devtoolsJson from 'vite-plugin-devtools-json';
import adapter from "@sveltejs/adapter-static";
import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";
import { defineConfig } from "vite";
import { enhancedImages } from "@sveltejs/enhanced-img";

export default defineConfig({
  plugins: [
    tailwindcss(),
    enhancedImages(), // must come before the SvelteKit plugin
    sveltekit({
      preprocess: [vitePreprocess(), mdsvex()],
      extensions: [".svelte", ".svx"],
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
    }),
    // devtoolsJson()
  ],
  server: {
    allowedHosts: ["4878bdd3d465.ngrok-free.app", "localhost"],
    strictPort: false,
    host: true,
    port: 5173,
  },
  test: {
    expect: { requireAssertions: true },
    projects: [
      {
        extends: "./vite.config.ts",
        test: {
          name: "server",
          environment: "node",
          include: ["src/**/*.{test,spec}.{js,ts}"],
          exclude: ["src/**/*.svelte.{test,spec}.{js,ts}"],
        },
      },
    ],
  },
});
