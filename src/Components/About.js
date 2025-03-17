import React from 'react';
import '../App.css'; 

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>

      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          We are a passionate team dedicated to providing the best online shopping experience.
          Our company was founded in 2020 with the goal of revolutionizing the e-commerce space by offering top-notch products, unbeatable prices, and exceptional customer service.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is simple: to offer high-quality products at affordable prices while ensuring a smooth and secure shopping experience.
          We believe in making online shopping easier, faster, and more enjoyable for everyone.
        </p>
      </section>

      <section className="about-section">
        <h2>Meet Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 1" className="team-photo" />
            <h3>Jane Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 2" className="team-photo" />
            <h3>John Smith</h3>
            <p>Chief Technology Officer</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 3" className="team-photo" />
            <h3>Emma Brown</h3>
            <p>Head of Marketing</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Reach out to us with any questions or feedback.</p>
        <p>Email: <a href="mailto:contact@company.com">contact@company.com</a></p>
        <p>Phone: (123) 456-7890</p>
      </section>
    </div>
  );
}

export default About;
