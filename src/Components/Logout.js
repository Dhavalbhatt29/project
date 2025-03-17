import React from 'react';
import '../App.css';

function Logout() {
  const handleLogout = () => {
   
    localStorage.removeItem('authToken');
  
  };

  return (
    <div className="logout-container">
      <div className="logout-message">
        <h1>You have been logged out</h1>
        <p>Thank you for using our service. You can close the page or log back in when you're ready.</p>
        <button className="logout-btn" onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
}

export default Logout;
