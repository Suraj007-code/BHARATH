
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface FinanceChartProps {
  data: { name: string; value: number; fill: string }[];
  lang: string;
}

const FinanceChart: React.FC<FinanceChartProps> = ({ data, lang }) => {
  const formatCurrency = (value: number) => {
    return `₹${(value / 100000).toFixed(2)}L`;
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-md shadow-lg">
          <p className="font-bold text-indigo-800">{`${label}`}</p>
          <p className="text-teal-700">{`Amount: ${formatCurrency(payload[0].value)}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 50,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="name" tick={{ fill: '#3730a3' }} />
          <YAxis tickFormatter={formatCurrency} tick={{ fill: '#3730a3' }} />
          <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(245, 158, 11, 0.1)'}}/>
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
