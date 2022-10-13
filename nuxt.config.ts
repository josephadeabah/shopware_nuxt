import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  meta: {
    link: [
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/uikit@3.14.3/dist/css/uikit.min.css",
      },
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/uikit@3.14.3/dist/js/uikit.min.js",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/uikit@3.14.3/dist/js/uikit-icons.min.js",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
      },
    ],
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    // apiSecret: process.env.API_SECRET,
    // Keys within public, will be also exposed to the client-side
    public: {
      apiSecret: process.env.API_SECRET,
      apiBase: process.env.PUBLIC_API_BASE,
    },
  },
});
