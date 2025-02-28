import React from "react";
import "../App.css";

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2 className="sidebar-title">Admin Panel</h2>
        <ul className="sidebar-menu">
          <li>
            <a href="#dashboard">Dashboard</a>
          </li>
          <li>
            <a href="#users">Users</a>
          </li>
          <li>
            <a href="#settings">Settings</a>
          </li>
          <li>
            <a href="#reports">Reports</a>
          </li>
          <li>
            <a href="#messages">Messages</a>
          </li>
          <li>
            <a href="#orders">Orders</a>
          </li>
          <li>
            <a href="#customers">Customers</a>
          </li>
          <li>
            <a href="#logout">Logout</a>
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
