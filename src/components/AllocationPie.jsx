import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#14b8a6'];

export default function AllocationPie({ holdings }) {
  if (!holdings || holdings.length === 0) return <p>No data to show allocation.</p>;

  const allocation = holdings.map(stock => ({
    name: stock.ticker,
    value: +(stock.price * stock.shares).toFixed(2)
  }));

  return (
    <>
      <h2>Asset Allocation (By Value)</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={allocation} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
            {allocation.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}
