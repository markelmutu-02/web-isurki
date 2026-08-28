"use client";
import React from "react";
import DropdownSelect from "./DropdownSelect";
import axios from "axios";
import { useState } from "react";

export default function ContactForm({
  parentClass = "form-contact-home style-border",
  btnClass = "tf-btn style-2 bg-on-suface-container w-full text-center",
  isTitleCenter = true,
  title = "Obtén un presupuesto gratuito",
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
  interface ContactFormProps {
    parentClass?: string;
    btnClass?: string;
    isTitleCenter?: boolean;
    title?: string;
  }

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
        {title}
      </h5>
      <fieldset>
        <input required name="name" type="text" placeholder="Nombre completo" />
      </fieldset>
      <fieldset>
        <input required name="phone" type="tel" placeholder="Número de teléfono" />
      </fieldset>
      <fieldset>
        <input required type="email" name="email" placeholder="Correo electrónico" />
      </fieldset>

      <DropdownSelect
        options={["¿Como podemos ayudarte?", "Pedir presupuesto", "Asesoramiento personalizado", "Información", "Estudio de caso personal", "Otro"]}
      />
      <fieldset>
        <textarea required  name="message" placeholder="Mensaje" defaultValue={""} />
      </fieldset>
      <div
        className={`tfSubscribeMsg  footer-sub-element ${
          showMessage ? "active" : ""
        }`}
      >
        {success ? (
          <p style={{ color: "rgb(52, 168, 83)" }}>
            Form submitted successfully.
          </p>
        ) : (
          <p style={{ color: "red" }}>Something went wrong</p>
        )}
      </div>
      <button type="submit" className={btnClass}>
        <span> Enviar solicitud </span>
      </button>
    </form>
  );
}
