import { useEffect, useState } from 'react';
import { generateMockHistory } from '../data/portfolioData';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function StockModal({ ticker, onClose }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (ticker) {
      const history = generateMockHistory(ticker);
      setData(history);
    }
  }, [ticker]);

  if (!ticker) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h3 style={{ marginTop: 0 }}>{ticker} - Historical Price</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#1d4ed8" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
        <button onClick={onClose} style={{ marginTop: '20px' }}>Close</button>
      </div>
    </div>
  );
}
