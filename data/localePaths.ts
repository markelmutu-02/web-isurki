// Mapa de rutas equivalentes entre el sitio en español (raíz) y en inglés (/en).
// Se usa para que el selector de idioma lleve a la página equivalente, no siempre al inicio.
export const localePaths: { es: string; en: string }[] = [
  { es: "/", en: "/en" },
  { es: "/isurlog", en: "/en/isurlog" },
  { es: "/sensorica", en: "/en/sensorica" },
  { es: "/isurdash", en: "/en/isurdash" },
  { es: "/about-us", en: "/en/about-us" },
  { es: "/contact-us", en: "/en/contact-us" },
  { es: "/noticias", en: "/en/news" },
  { es: "/noticias/polo-oarsoaldea", en: "/en/news/polo-oarsoaldea" },
  { es: "/noticias/dok-summit-2024", en: "/en/news/dok-summit-2024" },
  { es: "/noticias/espai-caldes", en: "/en/news/espai-caldes" },
  { es: "/noticias/kostasystem", en: "/en/news/kostasystem" },
  { es: "/noticias/dect-nr-plus", en: "/en/news/dect-nr-plus" },
  { es: "/noticias/easy-wiring", en: "/en/news/easy-wiring" },
  { es: "/noticias/baterias-lisocl2", en: "/en/news/lisocl2-batteries" },
  { es: "/control-vacunas-details", en: "/en/vaccine-temperature-control" },
  { es: "/mareografos-details", en: "/en/tide-gauges" },
  { es: "/control-ACS-details", en: "/en/legionella-control-acs" },
  { es: "/control-riego-details", en: "/en/smart-irrigation" },
  { es: "/terminos-de-uso", en: "/en/terms-of-use" },
  { es: "/politica-de-privacidad", en: "/en/privacy-policy" },
  { es: "/politica-de-cookies", en: "/en/cookie-policy" },
];

export function getAlternatePath(
  currentPath: string,
  targetLocale: "es" | "en"
): string {
  const match = localePaths.find(
    (p) => p.es === currentPath || p.en === currentPath
  );
  if (match) return targetLocale === "en" ? match.en : match.es;
  return targetLocale === "en" ? "/en" : "/";
}
