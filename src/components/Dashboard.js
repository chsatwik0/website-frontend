// src/components/Dashboard.js
import React from 'react';

const Dashboard = ({ stocks }) => {
  const totalValue = stocks.reduce((sum, stock) => sum + stock.quantity * stock.buyPrice, 0);

  return (
    <div>
      <h2>Portfolio Metrics</h2>
      <p>Total Value: ${totalValue.toFixed(2)}</p>
    </div>
  );
};

export default Dashboard;
