import React from 'react';
import AdminNavbar from '../Components/AdminNavbar';  
import AdminFooter from '../Components/AdminFooter';  

const AdminLayout = ({ children }) => {
  return (
    <div>
      <AdminNavbar /> 
      <div className="admin-content">
        {children}  
      </div>
      <AdminFooter /> 
    </div>
  );
};

export default AdminLayout;
