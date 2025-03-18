import React from "react";
import '../App.css';

function Adminfooter() {
  return (
    <footer className="admin-footer ">
      <div className="quote-card">
        <div className="quote-header">
          <h3>Inspirational Quote</h3>
        </div>
        <div className="quote-body">
          <blockquote className="quote-text">
            <p>"The only way to do great work is to love what you do."</p>
          </blockquote>
          <footer className="quote-footer">
            <p>- Steve Jobs</p>
            <cite>Source: Steve Jobs' speech</cite>
          </footer>
        </div>
      </div>
    </footer>
  );
}

export default Adminfooter;
