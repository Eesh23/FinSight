export const portfolio = {
    totalValue: 125000,
    stocks: [
      { ticker: "AAPL", name: "Apple Inc.", shares: 30, price: 175.6, change: +1.2 },
      { ticker: "GOOGL", name: "Alphabet Inc.", shares: 10, price: 2800.4, change: -0.8 },
      { ticker: "AMZN", name: "Amazon.com Inc.", shares: 5, price: 3400.8, change: +2.4 },
    ],
    history: [
      { date: "2024-03-01", value: 100000 },
      { date: "2024-03-10", value: 108000 },
      { date: "2024-03-20", value: 112500 },
      { date: "2024-03-25", value: 119000 },
      { date: "2024-03-30", value: 125000 },
    ],
    allocation: [
      { name: "Tech", value: 60 },
      { name: "Healthcare", value: 25 },
      { name: "Energy", value: 15 },
    ]
  };

// Utility function to generate mock price data
export const generateMockHistory = (ticker, days = 90) => {
    const data = [];
    let price = 100 + Math.random() * 50; // Starting price
    const today = new Date();
  
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      price += Math.random() * 4 - 2; // Fluctuate ±2
      price = +price.toFixed(2);
      data.push({
        date: date.toISOString().split('T')[0],
        value: price,
      });
    }
  
    return data;
  };
  