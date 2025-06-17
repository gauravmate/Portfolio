import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input updates
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formsubmit.co/ajax/gmate7292@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success === "true") {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thank you for contacting me. I’ll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong. Please try again!",
      });
    }
  };

  return (
    <section className="contact-section">
      <div className="background-shape"></div>
      <h1 className="contact-title">Let’s Connect</h1>
      <p className="contact-description">
        Feel free to get in touch for collaboration or any inquiries.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group floating-label">
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder=" "
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group floating-label">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder=" "
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group floating-label">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder=" "
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
