import { defineConfig, passthroughImageService } from "astro/config";
import icon from "astro-icon";
import i18n from "@astrolicious/i18n";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
  site: "https://www.lingosource.uk", 
  integrations: [
    icon(),
    i18n({
      defaultLocale: "en",
      locales: ["fr", "en"],
      client: {
        data: true,
        paths: true,
      },
      // used to localize the routes
      pages: {
        "/about": {
          "fr": "/a-propos"
        },
        "/contact":{
          "fr":"/contact"
        },
        "/dedicated-agent-plans":{
          "fr":"/forfaits-agent-dedie"
        },
        "/call-answering-plans":{  
          "fr":"/forfaits-reception-d-appels"  
        },
        "/how-it-works":{
          "fr":"/comment-ca-marche"
        },
        "/blog":{
          "fr":"/blog"
        },
        "/privacy-policy":{
          "fr":"/politique-de-confidentialite"
        },
        "/call-answering-service":{
          "fr":"/service-reception-d-appels"
        }
      }
    }),
    sitemap({
      i18n: {
        defaultLocale: 'en', // All urls that don't contain `es` or `fr` after `"https://www.yourwebsite.com/"` will be treated as default locale, i.e. `en`
        locales: {
          // key/value pairs of all languages supported
          en: 'en-US', // The `defaultLocale` value must be present in `locales` keys
          fr: 'fr-FR',
        },
      },
    }),
  ],
});
