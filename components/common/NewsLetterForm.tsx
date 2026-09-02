"use client";

import axios from "axios";
import { useState } from "react";

interface NewsLetterFormProps {
  placeholder?: string;
  variant?: "footer" | "modal";
  lang?: "es" | "en";
}

interface SendEmailEvent extends React.FormEvent<HTMLFormElement> {
  target: HTMLFormElement & {
    email: { value: string };
    reset: () => void;
  };
}

export default function NewsLetterForm({
  placeholder,
  variant = "footer",
  lang = "es",
}: NewsLetterFormProps) {
  const resolvedPlaceholder =
    placeholder ?? (lang === "en" ? "Email address" : "Correo electrónico");
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sendEmail = async (e: SendEmailEvent): Promise<void> => {
    e.preventDefault(); // Prevent default form submission behavior
    const email = e.target.email.value;

    try {
      const response = await axios.post("/api/newsletter", {
        email,
      });

      if ([200, 201].includes(response.status)) {
        e.target.reset(); // Reset the form
        setSuccess(true); // Set success state
        handleShowMessage();
      } else {
        setSuccess(false); // Handle unexpected responses
        handleShowMessage();
      }
    } catch (error) {
      setSuccess(false); // Set error state
      handleShowMessage();
      e.target.reset(); // Reset the form
    }
  };

  return (
    <form onSubmit={sendEmail}>
      {" "}
      <fieldset>
        <input name="email" type="text" placeholder={resolvedPlaceholder} />
        {variant === "footer" && (
          <button type="submit" className="tf-btn-newsletter">
            <i className="icon-PaperPlaneTilt" />
          </button>
        )}
      </fieldset>
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