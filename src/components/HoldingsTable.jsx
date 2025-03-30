import { useState } from 'react';

const generateStockData = () => {
  const price = +(Math.random() * 2000 + 50).toFixed(2);
  const change = +(Math.random() * 4 - 2).toFixed(2);
  return { price, change };
};

export default function HoldingsTable({ data, setHoldings, onRowClick }) {
  const [newStock, setNewStock] = useState({ ticker: '', name: '', shares: 0 });

  const increment = (index) => {
    const updated = [...data];
    updated[index].shares += 1;
    setHoldings(updated);
  };

  const decrement = (index) => {
    const updated = [...data];
    if (updated[index].shares > 0) {
      updated[index].shares -= 1;
      setHoldings(updated);
    }
  };

  const remove = (index) => {
    const updated = data.filter((_, i) => i !== index);
    setHoldings(updated);
  };

  const handleAddStock = (e) => {
    e.preventDefault();
    const { ticker, name, shares } = newStock;
    if (!ticker || !name || shares < 1) return;

    if (data.some(stock => stock.ticker === ticker.toUpperCase())) return;

    const { price, change } = generateStockData();
    const newEntry = {
      ticker: ticker.toUpperCase(),
      name,
      shares: parseInt(shares),
      price,
      change
    };

    setHoldings([...data, newEntry]);
    setNewStock({ ticker: '', name: '', shares: 0 });
  };

  return (
    <>
      <form onSubmit={handleAddStock} className="holdings-form">
        <input
          type="text"
          placeholder="Ticker"
          value={newStock.ticker}
          onChange={(e) => setNewStock({ ...newStock, ticker: e.target.value })}
        />
        <input
          type="text"
          placeholder="Name"
          value={newStock.name}
          onChange={(e) => setNewStock({ ...newStock, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="0"
          min="1"
          value={newStock.shares}
          onChange={(e) => setNewStock({ ...newStock, shares: e.target.value })}
        />
        <button type="submit">Add Stock</button>
      </form>

      <div style={{ overflowX: 'auto' }}>
        <table>
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Name</th>
              <th>Shares</th>
              <th>Price</th>
              <th>Change (%)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((stock, index) => (
              <tr key={index} className="clickable-row" onClick={() => onRowClick(stock.ticker)}>
                <td>{stock.ticker}</td>
                <td>
                  {stock.name}
                  <div className="view-label">View Chart</div>
                </td>
                <td>{stock.shares}</td>
                <td>${stock.price.toFixed(2)}</td>
                <td className={stock.change >= 0 ? "positive" : "negative"}>
                  {stock.change > 0 ? "+" : ""}{stock.change}%
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <button onClick={(e) => { e.stopPropagation(); increment(index); }}>+</button>
                    <button onClick={(e) => { e.stopPropagation(); decrement(index); }}>-</button>
                    <button onClick={(e) => { e.stopPropagation(); remove(index); }}>Remove</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
