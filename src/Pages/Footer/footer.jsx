import React from "react";
import "./footer.css";
import ContactForm from "../../components/ContactForm/ContactForm";

export default function Footer() {
  return (
    <div className="footer-container">
      <h1>Get In Touch</h1>
      <ContactForm />
    </div>
  );
}
