import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { generateMockHistory } from '../data/portfolioData';

const getFilteredData = (data, range) => {
  const num = parseInt(range, 10);
  return data.slice(-num);
};

export default function StockChart() {
  const [input, setInput] = useState('AAPL');
  const [ticker, setTicker] = useState('AAPL');
  const [range, setRange] = useState('30');
  const [history, setHistory] = useState(generateMockHistory('AAPL'));

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    const cleanTicker = input.trim().toUpperCase();
    if (cleanTicker) {
      setTicker(cleanTicker);
      setHistory(generateMockHistory(cleanTicker));
    }
  };

  const filtered = getFilteredData(history, range);

  return (
    <>
      <h2>{ticker} Stock Price</h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', marginBottom: '10px' }}>
        <div>
          <label htmlFor="ticker">Ticker: </label>
          <input
            id="ticker"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ padding: '4px 8px' }}
          />
        </div>

        <div>
          <label htmlFor="range">Range: </label>
          <select
            id="range"
            value={range}
            onChange={(e) => setRange(e.target.value)}
            style={{ padding: '4px 8px' }}
          >
            <option value="7">Last 7 Days</option>
            <option value="30">Last 30 Days</option>
            <option value="90">Last 90 Days</option>
          </select>
        </div>

        <button type="submit" style={{ padding: '4px 12px', cursor: 'pointer' }}>
          Search
        </button>
      </form>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={filtered}>
          <XAxis dataKey="date" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#1d4ed8" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
