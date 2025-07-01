import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
    Legend,
    CartesianGrid,
    Area,
} from 'recharts';

import ShadowWrapper from '../wrapper/ShadowWrapper';

const data = [
    { month: 'January', totalRevenue: 50000, totalTarget: 45000, amount: 5000 },
    { month: 'February', totalRevenue: 48000, totalTarget: 47000, amount: 1000 },
    { month: 'March', totalRevenue: 53000, totalTarget: 52000, amount: 1000 },
    { month: 'April', totalRevenue: 47000, totalTarget: 50000, amount: -3000 },
    { month: 'May', totalRevenue: 60000, totalTarget: 55000, amount: 5000 },
    { month: 'June', totalRevenue: 62000, totalTarget: 60000, amount: 2000 },
    { month: 'July', totalRevenue: 58000, totalTarget: 61000, amount: -3000 },
    { month: 'August', totalRevenue: 65000, totalTarget: 64000, amount: 1000 },
    { month: 'September', totalRevenue: 61000, totalTarget: 60000, amount: 1000 },
    { month: 'October', totalRevenue: 70000, totalTarget: 68000, amount: 2000 },
    { month: 'November', totalRevenue: 69000, totalTarget: 70000, amount: -1000 },
    { month: 'December', totalRevenue: 75000, totalTarget: 72000, amount: 3000 }
];

export const TotalSales = () => {
    return (
        <ShadowWrapper>
            <ResponsiveContainer width="100%" aspect={4}>
                <LineChart data={data}>
                    <XAxis dataKey="month" stroke="#888" />
                    <YAxis stroke="#888" />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="totalRevenue"
                        stroke="#2e7d32"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        name="Total Revenue"
                    />
                    <Line
                        type="monotone"
                        dataKey="totalTarget"
                        stroke="#1565c0"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        name="Total Target"
                    />
                    <Area
                        type="monotone"
                        dataKey="amount"
                        fill="#ffc10766"
                        stroke="#ffc107"
                        name="Revenue - Target"
                    />
                </LineChart>
            </ResponsiveContainer>
        </ShadowWrapper>
    );
};
  