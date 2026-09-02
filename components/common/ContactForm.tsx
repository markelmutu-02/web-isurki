"use client";
import React from "react";
import DropdownSelect from "./DropdownSelect";
import axios from "axios";
import { useState } from "react";

export default function ContactForm({
  parentClass = "form-contact-home style-border",
  btnClass = "tf-btn style-2 bg-on-suface-container w-full text-center",
  isTitleCenter = true,
  title,
  lang = "es",
}: {
  parentClass?: string;
  btnClass?: string;
  isTitleCenter?: boolean;
  title?: string;
  lang?: "es" | "en";
}) {
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [subject, setSubject] = useState("");
  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const t =
    lang === "en"
      ? {
          title: "Get a free quote",
          name: "Full name",
          phone: "Phone number",
          email: "Email address",
          options: [
            "How can we help you?",
            "Request a quote",
            "Personalized advice",
            "Information",
            "Custom case study",
            "Other",
          ],
          message: "Message",
          success: "Form submitted successfully.",
          error: "Something went wrong",
          submit: "Send request",
        }
      : {
          title: "Obtén un presupuesto gratuito",
          name: "Nombre completo",
          phone: "Número de teléfono",
          email: "Correo electrónico",
          options: [
            "¿Como podemos ayudarte?",
            "Pedir presupuesto",
            "Asesoramiento personalizado",
            "Información",
            "Estudio de caso personal",
            "Otro",
          ],
          message: "Mensaje",
          success: "Form submitted successfully.",
          error: "Something went wrong",
          submit: "Enviar solicitud",
        };

  const resolvedTitle = title ?? t.title;

  interface SendEmailEvent extends React.FormEvent<HTMLFormElement> {
    currentTarget: HTMLFormElement & {
      name: { value: string };
      email: { value: string };
      phone: { value: string };
      message: { value: string };
      reset: () => void;
    };
  }

  const sendEmail = async (e: SendEmailEvent): Promise<void> => {
    e.preventDefault(); // Prevent default form submission behavior

    // Guardamos la referencia al formulario ANTES del await,
    // porque e.currentTarget puede volverse null después de una operación async
    const form = e.currentTarget;

    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

    try {
      const response = await axios.post("/api/contact", {
        name,
        email,
        phone,
        subject,
        message,
      });

      if ([200, 201].includes(response.status)) {
        form.reset(); // Reset the form
        setSubject(""); // Reset the dropdown selection too
        setSuccess(true); // Set success state
        handleShowMessage();
      } else {
        setSuccess(false); // Handle unexpected responses
        handleShowMessage();
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setSuccess(false);
      handleShowMessage();
      form.reset();
    }
  };
  return (
    <form onSubmit={sendEmail} className={parentClass}>
      <h5 className={`title-form ${isTitleCenter ? "text-center" : ""}`}>
        {resolvedTitle}
      </h5>
      <fieldset>
        <input required name="name" type="text" placeholder={t.name} />
      </fieldset>
      <fieldset>
        <input required name="phone" type="tel" placeholder={t.phone} />
      </fieldset>
      <fieldset>
        <input required type="email" name="email" placeholder={t.email} />
      </fieldset>

      <DropdownSelect options={t.options} />
      <fieldset>
        <textarea required  name="message" placeholder={t.message} defaultValue={""} />
      </fieldset>
      <div
        className={`tfSubscribeMsg  footer-sub-element ${
          showMessage ? "active" : ""
        }`}
      >
        {success ? (
          <p style={{ color: "rgb(52, 168, 83)" }}>
            {t.success}
          </p>
        ) : (
          <p style={{ color: "red" }}>{t.error}</p>
        )}
      </div>
      <button type="submit" className={btnClass}>
        <span> {t.submit} </span>
      </button>
    </form>
  );
}
