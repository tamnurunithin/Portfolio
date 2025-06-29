import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call)
    console.log('Form Submitted:', formData);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        <h2 className="contact-title">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="contact-input"
            required
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Your Location"
            className="contact-input"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="contact-textarea"
            required
          ></textarea>
          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
