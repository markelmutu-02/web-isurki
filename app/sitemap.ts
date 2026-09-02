import { MetadataRoute } from "next";
import { localePaths } from "@/data/localePaths";

const BASE_URL = "https://isurki.com";

const staticRoutes = [
  "",
  "/isurlog",
  "/sensorica",
  "/isurdash",
  "/about-us",
  "/contact-us",
  "/noticias",
  "/noticias/calculadora-autonomia-pilas",
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

const allRoutes = [
  ...staticRoutes,
  ...localePaths.map((p) => p.en),
];

function priorityFor(route: string): number {
  if (route === "" || route === "/en") return 1;
  if (route.startsWith("/noticias/") || route.startsWith("/en/news/")) return 0.6;
  return 0.8;
}

function changeFrequencyFor(route: string): "weekly" | "monthly" {
  const isHome = route === "" || route === "/en";
  const isNewsListing = route === "/noticias" || route === "/en/news";
  return isHome || isNewsListing ? "weekly" : "monthly";
}

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: changeFrequencyFor(route),
    priority: priorityFor(route),
  }));
}
