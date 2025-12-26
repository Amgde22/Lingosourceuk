declare global {
    interface Window {
      dataLayer: any[];
      gtag: (...args: any[]) => void;
    }
  }
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="../.astro/astro-i18n.d.ts" />
/// <reference types="../.astro/i18next.d.ts" />
