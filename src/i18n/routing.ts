import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es", "ca", "fr"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/passive-residency": {
      en: "/passive-residency",
      es: "/residencia-pasiva",
      ca: "/residencia-passiva",
      fr: "/residence-passive",
    },
    "/active-residency": {
      en: "/active-residency",
      es: "/residencia-activa",
      ca: "/residencia-activa",
      fr: "/residence-active",
    },
    "/company-formation": {
      en: "/company-formation",
      es: "/constitucion-de-empresa",
      ca: "/constitucio-empresa",
      fr: "/creation-entreprise",
    },
    "/about": {
      en: "/about",
      es: "/sobre-nosotros",
      ca: "/sobre-nosaltres",
      fr: "/a-propos",
    },
    "/contact": {
      en: "/contact",
      es: "/contacto",
      ca: "/contacte",
      fr: "/contact",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
