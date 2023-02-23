import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

export default {
  // ...
  preprocess: preprocess(),
  adapter: adapter({
    // Set the `fallback` option to `index.html`
    fallback: "index.html",
  }),
};
