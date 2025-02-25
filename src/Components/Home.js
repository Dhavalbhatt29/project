import React, { useEffect, useState } from "react";
import axios from 'axios';
import "../App.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState({});

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

  const handleQuantityChange = (productId, change) => {
    setCart((prevCart) => {
      const newQuantity = (prevCart[productId] || 0) + change;
      return newQuantity > 0
        ? { ...prevCart, [productId]: newQuantity }
        : prevCart;
    });
  };

  const handleAddToCart = (productId) => {
    alert(`Product ${productId} added to cart!`);
    // You can implement your cart functionality here.
  };

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">${product.price.toFixed(2)}</p>

          {/* Quantity Selector */}
          <div className="quantity-container">
            <button
              className="quantity-button"
              onClick={() => handleQuantityChange(product.id, -1)}
            >
              -
            </button>
            <input
              type="number"
              className="quantity-selector"
              value={cart[product.id] || 0}
              readOnly
            />
            <button
              className="quantity-button"
              onClick={() => handleQuantityChange(product.id, 1)}
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            className="add-to-cart-button"
            onClick={() => handleAddToCart(product.id)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
