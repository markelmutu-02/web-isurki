"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: { sitekey: string; callback: (token: string) => void; "expired-callback"?: () => void }
      ) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

// El script de la API de Turnstile se carga una única vez en app/layout.tsx.
// Este componente solo espera (sondeando) a que window.turnstile esté listo
// y pinta su propio widget — así funciona bien aunque haya varias instancias
// en la misma página (p.ej. el formulario de contacto + el del newsletter).
export default function Turnstile({
  onVerify,
  onExpire,
}: {
  onVerify: (token: string) => void;
  onExpire?: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    const sitekey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    if (!sitekey) {
      return;
    }

    let cancelled = false;

    const tryRender = (): boolean => {
      if (cancelled || widgetIdRef.current || !containerRef.current || !window.turnstile) {
        return false;
      }
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey,
        callback: onVerify,
        "expired-callback": onExpire,
      });
      return true;
    };

    if (tryRender()) {
      return () => {
        cancelled = true;
      };
    }

    const interval = setInterval(() => {
      if (tryRender()) {
        clearInterval(interval);
      }
    }, 200);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) {
    return null;
  }

  return <div ref={containerRef} style={{ margin: "8px 0" }} />;
}
