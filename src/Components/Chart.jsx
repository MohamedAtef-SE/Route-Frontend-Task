import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';


export default function Chart({ data }) {

    const charts = data.map((tran) => { return { name: tran.date, value: tran.amount } })
    console.log(charts)

    return (
        <PieChart width={400} height={400}>
            <Pie
                dataKey="value"
                isAnimationActive={false}
                data={charts}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
            />
            <Tooltip />
        </PieChart>
    );
}
