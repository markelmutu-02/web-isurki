export async function verifyTurnstile(
  token: string | undefined | null,
  ip: string
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  // Si no se ha configurado la clave todavía, no bloqueamos el formulario
  // (permite desplegar el código antes de tener la clave de Cloudflare lista).
  if (!secret) {
    return true;
  }

  if (!token) {
    return false;
  }

  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret, response: token, remoteip: ip }),
      }
    );
    const data = await res.json();
    return data.success === true;
  } catch (error) {
    console.error("Error verificando Turnstile:", error);
    return false;
  }
}
