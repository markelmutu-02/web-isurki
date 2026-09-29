declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackFormSubmitConversion() {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-18413549422/X_hwCJa_tIodEO7uocxE",
      value: 1.0,
      currency: "EUR",
    });
  }
}
