// src/components/MenuPage.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/tablePage.css';
const menuItems = [
  { id: 1, name: 'Item 1', price: 10 },
  { id: 2, name: 'Item 2', price: 15 },
  { id: 3, name: 'Item 3', price: 20 },
];

const MenuPage = () => {
  const { number } = useParams();
  const [order, setOrder] = useState([]);
  const navigate = useNavigate();

  const addItemToOrder = (item) => {
    const existingItem = order.find(orderItem => orderItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
      setOrder([...order]);
    } else {
      setOrder([...order, { ...item, quantity: 1 }]);
    }
  };

  const handleProceedToOrder = () => {
    // Pass the order data to the order page
    navigate(`/order/${number}`, { state: { order } });
  };

  return (
    <div className="table-page">
      <h1 className="table-number">Table {number}</h1>
      <div className="menu-section">
        <h2>Menu</h2>
        <ul className="menu-list">
          {menuItems.map(item => (
            <li key={item.id} className="menu-item">
              <span>{item.name} - ${item.price}</span>
              <button className="add-button" onClick={() => addItemToOrder(item)}>Add</button>
            </li>
          ))}
        </ul>
        <button className="submit-button" onClick={handleProceedToOrder}>Proceed to Order</button>
      </div>
    </div>
  );
};

export default MenuPage;
