import React, { useState } from 'react';
import '../App.css'; // Create this CSS file to style the page

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Submitted', formData);
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>

      <section className="contact-info">
        <h2>Get in Touch</h2>
        <p>
          Have any questions or comments? Feel free to reach out to us using the form below.
        </p>
        <p>Email: <a href="mailto:contact@company.com">contact@company.com</a></p>
        <p>Phone: (123) 456-7890</p>
      </section>

      <section className="contact-form">
        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </section>

      <section className="contact-map">
        <h2>Our Location</h2>
        <div className="map-container">
          {/* You can replace this with an embedded Google Map or your own map */}
          <iframe
            title="Company Location"
            width="100%"
            height="400"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.208531049706!2d-122.08424968468188!3d37.42199977982534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0ef17cbd8a7%3A0xa37e1baf84db0b4f!2sGoogleplex!5e0!3m2!1sen!2sus!4v1648746873655!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Contact;
