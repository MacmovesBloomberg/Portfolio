import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./contactform.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the email template parameters
    const templateParams = {
      name: name,
      email: email,
      number: number,
      description: description,
    };

    // Send the form data using emailjs
    emailjs
      .send(
        "service_yqqa7m9",
        "template_x6veqkc",
        templateParams,
        "user_ZBDLfIIIuPKpKQSZxYpHI"
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });

    // Reset the form fields
    setName("");
    setEmail("");
    setNumber("");
    setDescription("");
  };

  return (
    <>
      <div className="form-style">
        <div>
          <img src="src/assets/images/formdp1.jpg" />
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              className="input-style"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              className="input-style"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="number">Number:</label>
            <input
              className="input-style"
              type="tel"
              id="number"
              name="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              className="input-style"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="button-86 ">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
