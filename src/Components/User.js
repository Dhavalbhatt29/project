import React from 'react';
import '../App.css'; 

function User() {
  return (
    <div className="user-container">
      <header className="user-header">
        <h1>User Profile</h1>
      </header>
      <main className="user-main-content">
        <section className="user-profile">
          <div className="profile-picture">
            <img src="https://via.placeholder.com/150" alt="Profile" />
          </div>
          <div className="profile-details">
            <h2>John Doe</h2>
            <p>Email: johndoe@example.com</p>
            <p>Joined: January 1, 2020</p>
            <button className="edit-btn">Edit Profile</button>
          </div>
        </section>

        <section className="user-activity">
          <h3>Recent Activity</h3>
          <ul>
            <li>Completed a task "Create User Page"</li>
            <li>Updated Profile Picture</li>
            <li>Joined the "React Enthusiasts" group</li>
          </ul>
        </section>

        <section className="user-settings">
          <h3>Account Settings</h3>
          <ul>
            <li><button className="settings-btn">Change Password</button></li>
            <li><button className="settings-btn">Notifications</button></li>
            <li><button className="settings-btn">Privacy Settings</button></li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default User;
