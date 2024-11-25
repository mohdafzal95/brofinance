// src/pages/MarketData.jsx
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MarketData = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('price');

    // Sample stock data
    const stocks = [
        { symbol: 'AAPL', price: 150, change: 1.5, volume: 100000, performance: [150, 152, 151, 153, 150] },
        { symbol: 'AMZN', price: 3300, change: -0.5, volume: 50000, performance: [3300, 3310, 3295, 3305, 3300] },
        { symbol: 'GOOGL', price: 2800, change: 2.0, volume: 30000, performance: [2800, 2810, 2795, 2805, 2800] },
        // Add more stocks as needed
    ];

    // Filter and sort stocks based on search term and selected sort option
    const filteredStocks = stocks
        .filter(stock => stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
            if (sortBy === 'price') return a.price - b.price;
            if (sortBy === 'volume') return a.volume - b.volume;
            if (sortBy === 'change') return a.change - b.change;
            return 0;
        });

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Market Data</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search stocks..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-gray-200 p-2 rounded-md w-full"
                />
            </div>
            <div className="mb-4">
                <label className="mr-2">Sort by:</label>
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-gray-200 p-2 rounded-md"
                >
                    <option value="price">Price</option>
                    <option value="volume">Volume</option>
                    <option value="change">Performance</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredStocks.map(stock => (
                    <div key={stock.symbol} className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold">{stock.symbol}</h2>
                        <p className="text-xl">${stock.price.toFixed(2)}</p>
                        <p className={`text-lg ${stock.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {stock.change >= 0 ? '+' : ''}{stock.change}%
                        </p>
                        <p className="text-sm">Volume: {stock.volume}</p>
                        <div className="mt-2">
                            <Line
                                data={{
                                    labels: ['1', '2', '3', '4', '5'],
                                    datasets: [
                                        {
                                            label: 'Recent Performance',
                                            data: stock.performance,
                                            fill: false,
                                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                            borderColor: 'rgba(75, 192, 192, 1)',
                                        },
                                    ],
                                }}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    scales: {
                                        x: {
                                            title: {
                                                display: true,
                                                text: 'Time',
                                            },
                                        },
                                        y: {
                                            title: {
                                                display: true,
                                                text: 'Price',
                                            },
                                        },
                                    },
                                }}
                                height={100}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MarketData;