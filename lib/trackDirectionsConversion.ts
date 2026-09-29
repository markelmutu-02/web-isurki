declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackDirectionsConversion() {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-18413549422/WiMxCJOX9YgdEO7uocxE",
    });
  }
}
