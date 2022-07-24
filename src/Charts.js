import React from 'react';
import PropTypes from 'prop-types';
import {
    Bar,
    BarChart,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
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
                <ResponsiveContainer className={'bar-graph'} height={400}>
                    <BarChart width="100%" height={250} data={barData}>
                        <CartesianGrid strokeDasharray="1 1" />
                        <XAxis dataKey="city" stroke="rgb(229, 249, 9)" />
                        <YAxis allowDecimals={false} stroke="rgb(229, 249, 9)" />
                        <Tooltip />
                        <Bar dataKey="number" name="No of Events in each city" fill="rgba(229, 249, 9, .9)" />
                        <Legend layout="horizontal" verticalAlign="top" align="center" />{' '}
                    </BarChart>
                </ResponsiveContainer>
                <ResponsiveContainer className={'pie-graph'} height={400}>
                    <PieChart>
                        <Pie
                            data={pieData}
                            cx="50%"
                            cy="55%"
                            labelLine={false}
                            label={({ name, percent }) => (percent ? `${name} ${(percent * 100).toFixed(0)}%` : '')}
                            outerRadius={65}
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
        </>
    );
}

Charts.propTypes = {
    barData: PropTypes.array.isRequired,
    pieData: PropTypes.array.isRequired,
};
