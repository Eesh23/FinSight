const mockNews = [
    {
      title: "Apple Surges After Announcing AI-Powered iPhone",
      summary: "The tech giant saw a 4.2% jump in stock price following its annual developer event.",
      source: "TechWire",
      date: "March 30, 2025"
    },
    {
      title: "Amazon Expands Same-Day Delivery to 10 More Cities",
      summary: "Logistics investments pay off as analysts revise growth forecasts upward.",
      source: "Bloomberg AI",
      date: "March 29, 2025"
    },
    {
      title: "Tesla Hits Production Milestone for New Model Z",
      summary: "Elon Musk tweets 'more to come' as investors eye strong Q2 numbers.",
      source: "MarketBuzz",
      date: "March 29, 2025"
    },
    {
      title: "NVIDIA Unveils Next-Gen AI Chip, Shares Spike",
      summary: "Analysts call it a game changer for generative models and cloud computing.",
      source: "SemiDaily",
      date: "March 28, 2025"
    },
    {
      title: "Fed Chair Hints at Potential Rate Pause in May",
      summary: "Markets react cautiously as inflation pressures show early signs of easing.",
      source: "FinanceDesk",
      date: "March 28, 2025"
    }
  ];
  
  export default function NewsFeed() {
    return (
      <>
        <h2>📢 Market News</h2>
        <ul className="news-list">
          {mockNews.map((news, i) => (
            <li key={i} className="news-item">
              <a href="#" className="news-title">{news.title}</a>
              <p className="news-summary">{news.summary}</p>
              <p className="news-meta">{news.source} • {news.date}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
  