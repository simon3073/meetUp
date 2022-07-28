import React from 'react';
import PropTypes from 'prop-types';
import useWindowSize from './useWindowSize';

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

const pattern1 = (
    <svg id="patternId" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <pattern id="a" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="scale(2) rotate(0)">
                <rect x="0" y="0" width="100%" height="100%" fill="hsla(0, 0%, 0%, 0)" />
                <path
                    d="M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z"
                    stroke-width="1"
                    stroke="hsla(0, 0%, 0%, 1)"
                    fill="none"
                />
            </pattern>
        </defs>
        <rect width="800%" height="800%" transform="translate(0,0)" fill="url(%23a)" />
    </svg>
);

export default function Charts(props) {
    const { barData, pieData } = props;
    const oneColumn = useWindowSize().width < 768; // set variable onResize using the useWindowSize hook

    // Custom Pie Chart functions
    const COLORS = ['#e5f909', '#dd61a3', '#ffffff', '#2bf909', '#06ffa4'];

    return (
        <>
            <hr className="data-vis-hr" />
            <div className="data-vis-wrapper ">
                <ResponsiveContainer className={'bar-graph'} height={400}>
                    <BarChart width="100%" height={250} data={barData}>
                        <CartesianGrid strokeDasharray="1 1" />
                        <XAxis dataKey="city" stroke="#e5f909" />
                        <YAxis allowDecimals={false} stroke="#e5f909" />
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
                            outerRadius={oneColumn ? 65 : 100}
                            stroke="black"
                            dataKey="value"
                        >
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} pattern={pattern1} />
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
