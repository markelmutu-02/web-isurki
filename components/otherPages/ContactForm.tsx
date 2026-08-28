"use client";
import React from "react";

import axios from "axios";
import { useState } from "react";
import DropdownSelect from "../common/DropdownSelect";

interface ContactFormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  phone: HTMLInputElement;
  message: HTMLTextAreaElement;
}

interface ContactFormElement extends HTMLFormElement {
  elements: ContactFormElements;
}

interface SendEmailEvent extends React.FormEvent<ContactFormElement> {}

export default function ContactForm() {
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [subject, setSubject] = useState("");

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sendEmail = async (e: SendEmailEvent): Promise<void> => {
    e.preventDefault(); // Prevent default form submission behavior

    // Guardamos la referencia al formulario ANTES del await,
    // porque e.currentTarget puede volverse null después de una operación async
    const form = e.currentTarget;

    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const phone = form.elements.phone.value;
    const message = form.elements.message.value;

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
    <form id="contactform" className="form-contact-us" onSubmit={sendEmail}>
      <div className="cols">
        <fieldset className="item">
          <input
            type="text"
            name="name"
            required
            id="name"
            placeholder="Nombre completo*"
          />
        </fieldset>
        <fieldset className="item">
          <input
            type="email"
            name="email"
            id="mail"
            required
            placeholder="Correo electrónico*"
          />
        </fieldset>
      </div>
      <div className="cols">
        <fieldset className="item">
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Teléfono"
          />
        </fieldset>
        <fieldset className="item">
          <DropdownSelect
            options={[
              "Elija una opción",
              "Pedir presupuesto",
              "Información",
              "Estudio caso personal",
              "Otro",
            ]}
            selectedValue={subject}
            onChange={(value) => setSubject(value)}
          />
        </fieldset>
      </div>
      <fieldset>
        <textarea
          name="message"
          id="message"
          placeholder="Mensaje*"
          defaultValue={""}
          required
        />
      </fieldset>
      <div
        className={`tfSubscribeMsg  footer-sub-element ${
          showMessage ? "active" : ""
        }`}
      >
        {success ? (
          <p style={{ color: "rgb(52, 168, 83)" }}>
            Formulario enviado correctamente.
          </p>
        ) : (
          <p style={{ color: "red" }}>Algo ha ido mal</p>
        )}
      </div>
      <button
        type="submit"
        className="tf-btn style-1 w-full bg-on-suface-container text-center"
      >
        <span>Mandar solicitud</span>
      </button>
    </form>
  );
}