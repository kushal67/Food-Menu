// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QRScanner from './components/QRScanner.js';
import TablePage from './components/TablePage.js';
import Home from './components/Home.js';
import OrderPage from './components/OrderParge.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QRScanner/>} />
        <Route path="/land" element={<Home/>} />
        <Route path="/table/:number" element={<TablePage/>} />
        <Route path="/order/:number" element={<OrderPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
