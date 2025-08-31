// import devtoolsJson from 'vite-plugin-devtools-json';
import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { enhancedImages } from "@sveltejs/enhanced-img";
import { svelteInspector } from "@sveltejs/vite-plugin-svelte-inspector";

export default defineConfig({
  plugins: [
    tailwindcss(),
    enhancedImages(), // must come before the SvelteKit plugin
    sveltekit(),
    svelteInspector({
      toggleKeyCombo: "alt-x",
      showToggleButton: "always",
      toggleButtonPos: "bottom-right",
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

  // inspector
});
