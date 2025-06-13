import { createResolver, defineNuxtModule, addComponentsDir } from "@nuxt/kit";

export default defineNuxtModule({
  setup() {
    const resolver = createResolver(import.meta.url);

    // Add ./components dir to the list
    addComponentsDir({
      path: resolver.resolve("./components"),
      prefix: "C",
    });
  },
});
