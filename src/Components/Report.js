import React from 'react';
import '../App.css'; 

function Report() {
  return (
    <div className="report-container ">
      <header className="report-header">
        <h1>Report Dashboard</h1>
      </header>
      <main className="report-main-content">
        <section className="report-filters">
          <h2>Filter Reports</h2>
          <div className="filter-item">
            <label htmlFor="date-range">Date Range:</label>
            <input type="date" id="date-range" />
            <input type="date" id="end-date-range" />
          </div>
          <div className="filter-item">
            <label htmlFor="category">Category:</label>
            <select id="category">
              <option value="all">All</option>
              <option value="sales">Sales</option>
              <option value="users">Users</option>
              <option value="products">Products</option>
            </select>
          </div>
          <button className="apply-filters-btn">Apply Filters</button>
        </section>

        <section className="report-summary">
          <h2>Summary Report</h2>
          <div className="summary-card">
            <h3>Total Sales</h3>
            <p>$10,000</p>
          </div>
          <div className="summary-card">
            <h3>Total Users</h3>
            <p>500</p>
          </div>
          <div className="summary-card">
            <h3>Total Products Sold</h3>
            <p>300</p>
          </div>
        </section>

        <section className="report-details">
          <h2>Detailed Report</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Users</th>
                <th>Products</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2025-03-01</td>
                <td>Sales</td>
                <td>$500</td>
                <td>5</td>
                <td>10</td>
              </tr>
              <tr>
                <td>2025-03-02</td>
                <td>Users</td>
                <td>-</td>
                <td>20</td>
                <td>-</td>
              </tr>
             
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Report;
