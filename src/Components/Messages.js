import React from 'react';
import '../App.css';  

function Messages() {
  return (
    <div className="messages-container">
      <h1 className="messages-heading">Messages</h1>
      <div className="message">
        <div className="message-header">
          <span className="sender">John Doe</span>
          <span className="timestamp">2 hours ago</span>
        </div>
        <p className="message-body">Hey! How are you doing today?</p>
      </div>
      <div className="message">
        <div className="message-header">
          <span className="sender">Jane Smith</span>
          <span className="timestamp">3 hours ago</span>
        </div>
        <p className="message-body">Let's catch up soon! I miss our talks.</p>
      </div>
      <div className="message">
        <div className="message-header">
          <span className="sender">Alex Brown</span>
          <span className="timestamp">Yesterday</span>
        </div>
        <p className="message-body">Check out this cool new app I found!</p>
      </div>
    </div>
  );
}

export default Messages;
