import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2 className="sidebar-title">Admin Panel</h2>
        <ul className="sidebar-menu">
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/reports">Reports</Link>
          </li>
          <li>
            <Link to="/messages">Messages</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>

      <div className="main-content">
        <header className="header">
          <h1>Admin Dashboard</h1>
        </header>

        <div className="dashboard-stats">
          <div className="stat-box">
            <h3>Total Users</h3>
            <p>1,234</p>
          </div>
          <div className="stat-box">
            <h3>Active Users</h3>
            <p>987</p>
          </div>
          <div className="stat-box">
            <h3>New Sign-ups</h3>
            <p>56</p>
          </div>
        </div>

        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <ul>
            <li>User John Doe signed up.</li>
            <li>User Jane Smith updated their profile.</li>
            <li>Admin added a new report.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
