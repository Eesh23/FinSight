import { useEffect, useState } from 'react';
import '../styles/ticker.css'; // CSS in next step

// Utility for random filler tickers
const fillerTickers = ["TSLA", "META", "NFLX", "NVDA", "INTC", "BABA", "UBER", "SHOP", "NIO"];

const generateRandomStock = (ticker) => {
  const price = +(Math.random() * 2000 + 50).toFixed(2);
  const change = +(Math.random() * 4 - 2).toFixed(2);
  return { ticker, price, change };
};

export default function TickerBelt({ holdings }) {
  const [beltData, setBeltData] = useState([]);

  useEffect(() => {
    // Take current holdings and format them
    const core = holdings.map(stock => ({
      ticker: stock.ticker,
      price: stock.price,
      change: stock.change
    }));

    // Generate some filler tickers
    const extras = fillerTickers.map(ticker => generateRandomStock(ticker));

    // Combine and shuffle
    const combined = [...core, ...extras].sort(() => 0.5 - Math.random());
    setBeltData(combined);
  }, [holdings]);

  return (
    <div className="ticker-container">
      <div className="ticker-belt">
        {beltData.map((stock, i) => (
          <div key={i} className="ticker-item">
            <strong>{stock.ticker}</strong>&nbsp;
            ${stock.price.toFixed(2)}&nbsp;
            <span className={stock.change >= 0 ? 'positive' : 'negative'}>
              ({stock.change > 0 ? '+' : ''}{stock.change}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
