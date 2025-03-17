import React from 'react';
import '../App.css';  

function Customer() {
  return (
    <div className="customer-container">
      <header className="customer-header">
        <h1>Customer Management</h1>
      </header>
      <main className="customer-main-content">
        <section className="customer-list">
          <h2>Customer List</h2>
          <table>
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#001</td>
                <td>John Doe</td>
                <td>john@example.com</td>
                <td>(123) 456-7890</td>
                <td><button className="view-btn">View Details</button></td>
              </tr>
              <tr>
                <td>#002</td>
                <td>Jane Smith</td>
                <td>jane@example.com</td>
                <td>(987) 654-3210</td>
                <td><button className="view-btn">View Details</button></td>
              </tr>
              {/* Additional rows can be added dynamically */}
            </tbody>
          </table>
        </section>

        <section className="customer-details">
          <h2>Customer Details</h2>
          <div className="customer-detail-item">
            <h3>Customer #001</h3>
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Email:</strong> john@example.com</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Address:</strong> 123 Main St, City, Country</p>
            <p><strong>Joined:</strong> 2022-01-15</p>
            <button className="edit-btn">Edit Customer</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Customer;
