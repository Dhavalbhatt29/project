import React from 'react';
import '../App.css';  

function Order() {
  return (
    <div className="order-container">
      <header className="order-header">
        <h1>Order Management</h1>
      </header>
      <main className="order-main-content">
        <section className="order-list">
          <h2>Orders List</h2>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#101</td>
                <td>2025-03-01</td>
                <td>John Doe</td>
                <td>Shipped</td>
                <td><button className="view-btn">View Details</button></td>
              </tr>
              <tr>
                <td>#102</td>
                <td>2025-03-02</td>
                <td>Jane Smith</td>
                <td>Processing</td>
                <td><button className="view-btn">View Details</button></td>
              </tr>
              {/* Additional rows can be added dynamically */}
            </tbody>
          </table>
        </section>

        <section className="order-details">
          <h2>Order Details</h2>
          <div className="order-detail-item">
            <h3>Order #101</h3>
            <p><strong>Customer:</strong> John Doe</p>
            <p><strong>Date:</strong> 2025-03-01</p>
            <p><strong>Status:</strong> Shipped</p>
            <h4>Items</h4>
            <ul>
              <li>Product A - $20</li>
              <li>Product B - $35</li>
            </ul>
            <p><strong>Total:</strong> $55</p>
            <button className="process-btn">Mark as Delivered</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Order;
