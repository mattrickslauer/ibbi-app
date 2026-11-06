// Spanish route → its English counterpart. The English homepage lives at /home;
// the other English pages live under /en/.
export const esToEn: Record<string, string> = {
  "/": "/home",
  "/antes-de-visitar": "/en/before-you-visit",
  "/quienes-somos": "/en/about",
  "/ministerios": "/en/ministries",
  "/contacto": "/en/contact",
  "/pastor-y-equipo": "/en/pastor-and-wife",
};

export const enToEs: Record<string, string> = Object.fromEntries(
  Object.entries(esToEn).map(([es, en]) => [en, es])
);

// trailingSlash: true makes browser paths end in "/", so drop it before comparing.
export function normalizePath(path: string | null): string {
  if (!path) return "/";
  return path.length > 1 ? path.replace(/\/+$/, "") : path;
}

export function isEnglish(path: string): boolean {
  return path in enToEs;
}

/** The same page in the other language (falls back to that language's homepage). */
export function otherLanguage(path: string): string {
  if (isEnglish(path)) return enToEs[path];
  return esToEn[path] ?? "/home";
}

export const navES = [
  { label: "Inicio", href: "/" },
  { label: "Antes de Visitar", href: "/antes-de-visitar" },
  { label: "Quiénes Somos", href: "/quienes-somos" },
  { label: "Ministerios", href: "/ministerios" },
  { label: "Contacto", href: "/contacto" },
];

export const navEN = [
  { label: "Home", href: "/home" },
  { label: "Before You Visit", href: "/en/before-you-visit" },
  { label: "About Us", href: "/en/about" },
  { label: "Ministries", href: "/en/ministries" },
  { label: "Contact", href: "/en/contact" },
];

export const subMenuES: Record<string, { label: string; href: string }[]> = {
  "/quienes-somos": [
    { label: "Nuestras Creencias", href: "/quienes-somos#creencias" },
    { label: "Pastor y Esposa", href: "/pastor-y-equipo" },
  ],
};

export const subMenuEN: Record<string, { label: string; href: string }[]> = {
  "/en/about": [
    { label: "Our Beliefs", href: "/en/about#beliefs" },
    { label: "Pastor and Wife", href: "/en/pastor-and-wife" },
  ],
};
