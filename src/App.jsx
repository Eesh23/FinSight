import { useState } from 'react';
import './index.css';
import Header from './components/Header';
import StockChart from './components/StockChart';
import PortfolioChart from './components/PortfolioChart';
import AllocationPie from './components/AllocationPie';
import Watchlist from './components/Watchlist';
import HoldingsTable from './components/HoldingsTable';
import TickerBelt from './components/TickerBelt';
import StockModal from './components/StockModal';
import PortfolioValue from './components/PortfolioValue';
import NewsFeed from './components/NewsFeed';
import { portfolio } from './data/portfolioData';


function App() {
  const [holdings, setHoldings] = useState(portfolio.stocks);
  const [selectedTicker, setSelectedTicker] = useState(null);

  const openModal = (ticker) => setSelectedTicker(ticker);
  const closeModal = () => setSelectedTicker(null);

  return (
    <>
      <TickerBelt holdings={holdings} />
      <Header />
      <div className="container">
        {/* CHARTS */}
        <div className="card"><StockChart /></div>
        <div className="card"><PortfolioChart data={portfolio.history} /></div>
        <div className="card"><AllocationPie holdings={holdings} /></div>


        {/* WATCHLIST */}
        <div className="card full-width">
          <h2>Watchlist</h2>
          <p className="section-description">Your wishlist of stocks to track and optionally add to holdings.</p>
          <Watchlist holdings={holdings} setHoldings={setHoldings} onRowClick={openModal} />
        </div>

        {/* HOLDINGS + TOTAL VALUE */}
        <div className="card full-width">
          <h2>Stock Holdings</h2>
          <p className="section-description">Manage your current portfolio: shares, prices, and changes.</p>
          <HoldingsTable data={holdings} setHoldings={setHoldings} onRowClick={openModal} />
          <PortfolioValue holdings={holdings} />
        </div>
      </div>

      {/* STOCK CHART MODAL */}
      <StockModal ticker={selectedTicker} onClose={closeModal} />
      {/* NEWS FEED */}
      <div className="card full-width">
          <NewsFeed />
        </div>
    </>
    
  );
}

export default App;
