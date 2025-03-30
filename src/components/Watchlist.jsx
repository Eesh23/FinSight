import { useState } from 'react';

const generateStockData = () => {
  const price = +(Math.random() * 2000 + 50).toFixed(2);
  const change = +(Math.random() * 4 - 2).toFixed(2);
  return { price, change };
};

export default function Watchlist({ holdings, setHoldings, onRowClick }) {
  const [watchlist, setWatchlist] = useState([]);
  const [input, setInput] = useState('');

  const handleAddToWatchlist = (e) => {
    e.preventDefault();
    const ticker = input.trim().toUpperCase();
    if (!ticker || watchlist.some(item => item.ticker === ticker)) return;

    const existing = holdings.find(h => h.ticker === ticker);
    const { price, change } = existing || generateStockData();

    setWatchlist([...watchlist, {
      ticker,
      name: `${ticker} Corp.`,
      price,
      change,
    }]);

    setInput('');
  };

  const addToHoldings = (item) => {
    if (!holdings.some(h => h.ticker === item.ticker)) {
      setHoldings([...holdings, { ...item, shares: 1 }]);
    }
    setWatchlist(watchlist.filter(w => w.ticker !== item.ticker));
  };

  return (
    <>
      <form onSubmit={handleAddToWatchlist} style={{ marginBottom: '1rem', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="Enter ticker"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add to Watchlist</button>
      </form>

      {watchlist.length === 0 ? (
        <p>No stocks in watchlist yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Name</th>
              <th>Price</th>
              <th>Change (%)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.map((item, i) => (
              <tr key={i} className="clickable-row" onClick={() => onRowClick(item.ticker)}>
                <td>{item.ticker}</td>
                <td>
                  {item.name}
                  <div className="view-label">View Chart</div>
                </td>
                <td>${item.price.toFixed(2)}</td>
                <td className={item.change >= 0 ? "positive" : "negative"}>
                  {item.change > 0 ? "+" : ""}{item.change}%
                </td>
                <td>
                  <button onClick={(e) => { e.stopPropagation(); addToHoldings(item); }}>
                    Add to Holdings
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
