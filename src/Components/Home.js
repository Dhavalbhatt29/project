import React, { useEffect, useState } from "react";
import axios from 'axios';
import "../App.css";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);  
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);


  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="admin-dashboard">
      {/* Static Sidebar */}
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li>Dashboard</li>
          <li>Product Management</li>
          <li>Categories</li>
          <li>Messages </li>
          <li>Orders</li>
          <li>Customers</li>
          <li>Reports</li>
          <li>Settings</li> 
          <li>Logout</li>
        </ul>
        </div>

      {/* Main Content Area */}
      <div className="main-content">
        {/* <h1>Admin Dashboard</h1> */}

        {/* Product List */}
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">${product.price.toFixed(2)}</p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
