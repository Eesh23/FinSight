export default function PortfolioValue({ holdings }) {
    const totalValue = holdings.reduce(
      (sum, stock) => sum + stock.price * stock.shares,
      0
    ).toFixed(2);
  
    const exportToJson = () => {
      const blob = new Blob([JSON.stringify(holdings, null, 2)], {
        type: 'application/json',
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'portfolio.json';
      a.click();
    };
  
    return (
      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <strong>Total Portfolio Value: ${totalValue}</strong>
        <button onClick={exportToJson}>📁 Export Portfolio</button>
      </div>
    );
  }
  