import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2025 Your Website Name. All rights reserved.</p>
        <div className="social-icons">
          <Link to="#" className="social-icon">Facebook</Link>
          <Link to="#" className="social-icon">Twitter</Link>
          <Link to="#" className="social-icon">Instagram</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
