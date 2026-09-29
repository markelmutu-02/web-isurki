"use client";

import axios from "axios";
import { useState } from "react";
import Turnstile from "./Turnstile";

interface NewsLetterFormProps {
  placeholder?: string;
  variant?: "footer" | "modal";
  lang?: "es" | "en";
}

type NewsletterFormElement = HTMLFormElement & {
  email: { value: string };
  company: { value: string };
};

export default function NewsLetterForm({
  placeholder,
  variant = "footer",
  lang = "es",
}: NewsLetterFormProps) {
  const resolvedPlaceholder =
    placeholder ?? (lang === "en" ? "Email address" : "Correo electrónico");
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sendEmail = async (e: React.SubmitEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault(); // Prevent default form submission behavior
    const form = e.currentTarget as NewsletterFormElement;
    const email = form.email.value;
    const company = form.company.value;

    try {
      const response = await axios.post("/api/newsletter", {
        email,
        company,
        turnstileToken,
      });

      if ([200, 201].includes(response.status)) {
        form.reset(); // Reset the form
        setTurnstileToken("");
        setSuccess(true); // Set success state
        handleShowMessage();
      } else {
        setSuccess(false); // Handle unexpected responses
        handleShowMessage();
      }
    } catch (error) {
      setSuccess(false); // Set error state
      handleShowMessage();
      form.reset(); // Reset the form
    }
  };

  return (
    <form onSubmit={sendEmail}>
      {" "}
      <div
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        <label htmlFor="newsletter-company">Empresa</label>
        <input
          type="text"
          id="newsletter-company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <fieldset>
        <input name="email" type="text" placeholder={resolvedPlaceholder} />
        {variant === "footer" && (
          <button type="submit" className="tf-btn-newsletter">
            <i className="icon-PaperPlaneTilt" />
          </button>
        )}
      </fieldset>
      <Turnstile onVerify={setTurnstileToken} onExpire={() => setTurnstileToken("")} />
      {variant === "modal" && (
        <button
          type="submit"
          className="tf-btn style-2 bg-on-suface-container"
        >
          <span>{lang === "en" ? "Subscribe" : "Suscribirse"}</span>
        </button>
      )}
      <div
        className={`tfSubscribeMsg  footer-sub-element ${
          showMessage ? "active" : ""
        }`}
      >
        {success ? (
          <p style={{ color: "rgb(52, 168, 83)" }}>
            {lang === "en"
              ? "You have subscribed successfully."
              : "Te has suscrito correctamente."}
          </p>
        ) : (
          <p style={{ color: "red" }}>
            {lang === "en"
              ? "Something went wrong, please try again."
              : "Algo ha salido mal, inténtalo de nuevo."}
          </p>
        )}
      </div>
    </form>
  );
}
