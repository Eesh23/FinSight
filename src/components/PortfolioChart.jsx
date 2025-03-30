import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

export default function PortfolioChart({ data }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '16px' }}>
        Portfolio Value Over Time
      </h2>
      <div style={{ width: '100%', maxWidth: '95%' }}>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart
            data={data}
            margin={{ top: 40, right: 20, left: 10, bottom: 20 }} // 🔄 Adjusted margins
          >
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
            <XAxis dataKey="date" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              wrapperStyle={{ fontSize: '13px' }}
              contentStyle={{
                borderRadius: 8,
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                background: 'white',
                color: '#111827',
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#6366f1"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
