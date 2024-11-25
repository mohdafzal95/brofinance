// src/pages/Backtesting.jsx
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
import usePage from '../hooks/usePage';

// Register the components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Backtesting = () => {
    const [algorithm, setAlgorithm] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [stopLoss, setStopLoss] = useState('');
    const [profitTarget, setProfitTarget] = useState('');
    const [results, setResults] = useState(null);

    const handleBacktest = () => {
        // Simulate backtest results
        const simulatedResults = {
            performance: [100, 105, 102, 110, 108, 115],
            winRate: 0.65,
            averageReturn: 0.05,
            drawdown: 0.1,
        };
        setResults(simulatedResults);
    };

    usePage({
        title: "Backtesting",
        description: "Backtesting description",
        ogTitle: "Backtesting",
        ogDescription: "Backtesting description",
        ogUrl: window.location.href,
        ogImage: "https://images.pexels.com/photos/29137971/pexels-photo-29137971/free-photo-of-scenic-autumn-pathway-lined-with-vibrant-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    });

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Backtesting</h1>
            <div className="mb-4">
                <label className="block mb-1">Select Algorithm:</label>
                <select
                    value={algorithm}
                    onChange={(e) => setAlgorithm(e.target.value)}
                    className="bg-gray-200 p-2 rounded-md w-full"
                >
                    <option value="">Select an algorithm</option>
                    <option value="algorithm1">Algorithm 1</option>
                    <option value="algorithm2">Algorithm 2</option>
                    {/* Add more algorithms as needed */}
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block mb-1">Start Date:</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="bg-gray-200 p-2 rounded-md w-full"
                    />
                </div>
                <div>
                    <label className="block mb-1">End Date:</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="bg-gray-200 p-2 rounded-md w-full"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block mb-1">Stop Loss (%):</label>
                    <input
                        type="number"
                        value={stopLoss}
                        onChange={(e) => setStopLoss(e.target.value)}
                        className="bg-gray-200 p-2 rounded-md w-full"
                    />
                </div>
                <div>
                    <label className="block mb-1">Profit Target (%):</label>
                    <input
                        type="number"
                        value={profitTarget}
                        onChange={(e) => setProfitTarget(e.target.value)}
                        className="bg-gray-200 p-2 rounded-md w-full"
                    />
                </div>
            </div>
            <button
                onClick={handleBacktest}
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
                Start Backtest
            </button>

            {results && (
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Backtest Results</h2>
                    <div className="mb-4">
                        <Line
                            data={{
                                labels: ['1', '2', '3', '4', '5', '6'],
                                datasets: [
                                    {
                                        label: 'Performance',
                                        data: results.performance,
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
                                            text: 'Value',
                                        },
                                    },
                                },
                            }}
                            height={300}
                        />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <p>Win Rate: {Math.round(results.winRate * 100)}%</p>
                        <p>Average Return: {results.averageReturn * 100}%</p>
                        <p>Max Drawdown: {results.drawdown * 100}%</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Backtesting;