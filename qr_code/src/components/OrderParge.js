// src/components/OrderPage.js
import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/tablePage.css';

const OrderPage = () => {
  const { number } = useParams();
  const location = useLocation();
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (location.state?.order) {
      setOrder(location.state.order);
      const newTotal = location.state.order.reduce((acc, item) => acc + (item.price * item.quantity), 0);
      setTotal(newTotal);
    }
  }, [location.state]);

  const handleSubmitOrder = async () => {
    try {
      const response = await axios.post('http://localhost:5000/submit-order', {
        tableNumber: number,
        order,
      });
      console.log(response.data);
      alert('Order submitted successfully!');
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('Failed to submit order');
    }
  };

  return (
    <div className="table-page">
      <h1 className="table-number">Table {number}</h1>
      <div className="order-section orderffff">
        <h2>Your Order</h2>
        {order.length === 0 ? (
          <p>No items in order.</p>
        ) : (
          <ul className="order-list">
            {order.map((item, index) => (
              <li key={index} className="order-item">
                {item.name} - ${item.price} x {item.quantity}
              </li>
            ))}
          </ul>
        )}
        
        <h3>Total: ${total}</h3>
        <button className="submit-button" onClick={handleSubmitOrder}>Submit Order</button>
      </div>
    </div>
  );
};

export default OrderPage;
