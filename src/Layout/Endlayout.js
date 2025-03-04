import React from 'react';
import Navbar from '../Components/Navbar'; 
import Footer from '../Components/Footer';  

const EndUserLayout = ({ children }) => {
  return (
    <div>
      <Navbar />  
      <div className="content">
        {children}  
      </div>
      <Footer />  
    </div>
  );
};

export default EndUserLayout;
