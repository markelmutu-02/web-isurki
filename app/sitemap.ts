import { MetadataRoute } from "next";

const BASE_URL = "https://isurki.com";

const staticRoutes = [
  "",
  "/isurlog",
  "/sensorica",
  "/isurdash",
  "/about-us",
  "/contact-us",
  "/noticias",
  "/noticias/baterias-lisocl2",
  "/noticias/dect-nr-plus",
  "/noticias/easy-wiring",
  "/noticias/dok-summit-2024",
  "/noticias/espai-caldes",
  "/noticias/kostasystem",
  "/noticias/polo-oarsoaldea",
  "/control-vacunas-details",
  "/mareografos-details",
  "/control-ACS-details",
  "/control-riego-details",
  "/terminos-de-uso",
  "/politica-de-privacidad",
  "/politica-de-cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/noticias" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/noticias/") ? 0.6 : 0.8,
  }));
}
