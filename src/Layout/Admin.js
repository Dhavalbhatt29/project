import React from "react";
import Adminheader from "../Components/Adminheader";
import AdminSidebar from "../Components/AdminSidebar";
import Adminfooter from "../Components/Adminfooter";
import { Outlet } from "react-router-dom";

function Admin() {
  return (  
    <>
      <Adminheader />
      <AdminSidebar />
      <Outlet />
      <Adminfooter />
    </>
  );
}

export default Admin;
