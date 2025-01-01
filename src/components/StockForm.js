// src/components/StockForm.js
import React, { useState } from 'react';

const StockForm = ({ onSave, editingStock }) => {
  const [stock, setStock] = useState(editingStock || { name: '', ticker: '', quantity: 0, buyPrice: 0 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStock({ ...stock, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(stock);
    setStock({ name: '', ticker: '', quantity: 0, buyPrice: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={stock.name}
        placeholder="Stock Name"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="ticker"
        value={stock.ticker}
        placeholder="Ticker"
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="quantity"
        value={stock.quantity}
        placeholder="Quantity"
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="buyPrice"
        value={stock.buyPrice}
        placeholder="Buy Price"
        onChange={handleChange}
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default StockForm;
