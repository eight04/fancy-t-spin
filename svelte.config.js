import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import fumenSize from "./fumen-size.mjs";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [preprocess(), mdsvex(mdsvexConfig), fumenSize()],

  kit: {
    adapter: adapter({
      pages: "docs"
    }),

    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ["PATCH", "DELETE"],
    },

    paths: {
      base: "/fancy-t-spin"
    },
    appDir: "internal"
  },
};

export default config;
