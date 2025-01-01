// src/App.js
import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import StockForm from './components/StockForm';
import StockList from './components/StockList';
import './App.css';

function App() {
  const [stocks, setStocks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const addOrUpdateStock = (stock) => {
    if (editingIndex !== null) {
      const updatedStocks = [...stocks];
      updatedStocks[editingIndex] = stock;
      setStocks(updatedStocks);
      setEditingIndex(null);
    } else {
      setStocks([...stocks, stock]);
    }
  };

  const deleteStock = (index) => {
    setStocks(stocks.filter((_, i) => i !== index));
  };

  const editStock = (index) => {
    setEditingIndex(index);
  };

  return (
    <div className="App">
      <Dashboard stocks={stocks} />
      <StockForm onSave={addOrUpdateStock} editingStock={editingIndex !== null ? stocks[editingIndex] : null} />
      <StockList stocks={stocks} onEdit={editStock} onDelete={deleteStock} />
    </div>
  );
}

export default App;


