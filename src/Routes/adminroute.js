import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "../Layout/Admin";
import Dashboard from "../Components/Dashboard";
import User from "../Components/User";
import Setting from "../Components/Setting";
import Report from "../Components/Product";
import Messages from "../Components/Messages";
import Order from "../Components/Order";
import Customer from "../Components/Customer";
import Logout from "../Components/Logout";

function Adminroute() {
  return (
    <Routes>
      <Route path="/admin" element={<Admin />}>
        <Route index element={<Dashboard />} />
        <Route path="/admin/user" element={<User />} />
        <Route path="/admin/setting" element={<Setting />} />
        <Route path="/admin/report" element={<Report />} />
        <Route path="/admin/messages" element={<Messages />} />
        <Route path="/admin/order" element={<Order />} />
        <Route path="/admin/customer" element={<Customer />} />
        <Route path="/admin/logout" element={<Logout />} />
      </Route>  
    </Routes>
  );
}

export default Adminroute;
