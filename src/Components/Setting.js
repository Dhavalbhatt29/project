import React from 'react';
import '../App.css';

function Setting() {
  return (
    <div className="setting-container">
      <header className="setting-header">
        <h1>Settings</h1>
      </header>

      <main className="setting-main-content">
        <section className="setting-card">
          <h2>Profile Settings</h2>
          <div className="setting-item">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" placeholder="Enter new username" />
          </div>
          <div className="setting-item">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter new email" />
          </div>
          <button className="save-btn">Save Profile</button>
        </section>

        <section className="setting-card">
          <h2>Privacy Settings</h2>
          <div className="setting-item">
            <label htmlFor="privacy">Profile Privacy:</label>
            <select id="privacy">
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>
          <button className="save-btn">Save Privacy Settings</button>
        </section>

        <section className="setting-card">
          <h2>Notification Settings</h2>
          <div className="setting-item">
            <label htmlFor="email-notifications">Email Notifications:</label>
            <input type="checkbox" id="email-notifications" />
          </div>
          <div className="setting-item">
            <label htmlFor="sms-notifications">SMS Notifications:</label>
            <input type="checkbox" id="sms-notifications" />
          </div>
          <button className="save-btn">Save Notification Settings</button>
        </section>

        <section className="setting-card">
          <h2>Account Management</h2>
          <button className="delete-account-btn">Delete Account</button>
        </section>
      </main>
    </div>
  );
}

export default Setting;
