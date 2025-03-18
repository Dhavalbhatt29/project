import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Admin Panel</h2>
      <ul className="sidebar-menu">
        <li>
          <Link to="/admin">Dashboard</Link>  
        </li>
        <li>
          <Link to="/admin/user">User</Link>
        </li>
        <li>  
          <Link to="/admin/setting">Setting</Link>
        </li>
        <li>
          <Link to="/admin/report">Reports</Link>
        </li>
        <li>
          <Link to="/admin/messages">Messages</Link>
        </li>
        <li>
          <Link to="/admin/order">Orders</Link>
        </li>
        <li>
          <Link to="/admin/customer">Customers</Link>
        </li>
        <li>
          <Link to="/admin/logout">Logout</Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminSidebar;
