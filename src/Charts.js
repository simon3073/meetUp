import React from 'react';
import {
    Bar,
    BarChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from 'recharts';

export default function Charts(props) {
    const { barData, pieData } = props;

    // Pie Chart functions
    const COLORS = [
        'rgb(229, 249, 9)',
        'rgba(229, 249, 9, .8)',
        'rgba(229, 249, 9, .6)',
        'rgba(229, 249, 9, .4)',
        'rgba(229, 249, 9, .2)',
    ];

    return (
        <>
            <hr className="data-vis-hr" />
            <div className="data-vis-wrapper ">
                <div className="bar-graph">
                    <p>Number of events per city</p>
                    <ResponsiveContainer height={400}>
                        <BarChart width={730} height={250} data={barData}>
                            <CartesianGrid strokeDasharray="1 1" />
                            <XAxis dataKey="city" stroke="rgb(229, 249, 9)" />
                            <YAxis allowDecimals={false} stroke="rgb(229, 249, 9)" />

                            <Bar dataKey="number" name="No of Events in each city" fill="rgba(229, 249, 9, .9)" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="pie-graph">
                    <p>Types of events</p>
                    <ResponsiveContainer height={400} width="100%">
                        <PieChart>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, percent }) => (percent ? `${name} ${(percent * 100).toFixed(0)}%` : '')}
                                outerRadius={130}
                                stroke="black"
                                dataKey="value"
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    );
}
