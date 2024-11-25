// src/pages/Portfolio.jsx
import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the components
ChartJS.register(ArcElement, Tooltip, Legend);

const Portfolio = () => {
    const [stocks, setStocks] = useState([
        { symbol: 'AAPL', buyPrice: 150, quantity: 10 },
        { symbol: 'AMZN', buyPrice: 3300, quantity: 2 },
        { symbol: 'GOOGL', buyPrice: 2800, quantity: 5 },
    ]);

    const [newStock, setNewStock] = useState({ symbol: '', buyPrice: '', quantity: '' });

    const handleAddStock = () => {
        if (newStock.symbol && newStock.buyPrice && newStock.quantity) {
            setStocks([...stocks, { ...newStock, buyPrice: parseFloat(newStock.buyPrice), quantity: parseInt(newStock.quantity) }]);
            setNewStock({ symbol: '', buyPrice: '', quantity: '' });
        }
    };

    const handleRemoveStock = (symbol) => {
        setStocks(stocks.filter(stock => stock.symbol !== symbol));
    };

    const totalValue = stocks.reduce((acc, stock) => acc + (stock.buyPrice * stock.quantity), 0);
    const data = {
        labels: stocks.map(stock => stock.symbol),
        datasets: [{
            data: stocks.map(stock => stock.buyPrice * stock.quantity),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        }],
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Portfolio Overview</h1>
            <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Add New Stock</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <input
                        type="text"
                        placeholder="Stock Symbol"
                        value={newStock.symbol}
                        onChange={(e) => setNewStock({ ...newStock, symbol: e.target.value })}
                        className="bg-gray-200 p-2 rounded-md"
                    />
                    <input
                        type="number"
                        placeholder="Buy Price"
                        value={newStock.buyPrice}
                        onChange={(e) => setNewStock({ ...newStock, buyPrice: e.target.value })}
                        className="bg-gray-200 p-2 rounded-md"
                    />
                    <input
                        type="number"
                        placeholder="Quantity"
                        value={newStock.quantity}
                        onChange={(e) => setNewStock({ ...newStock, quantity: e.target.value })}
                        className="bg-gray-200 p-2 rounded-md"
                    />
                </div>
                <button
                    onClick={handleAddStock}
                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                    Add Stock
                </button>
            </div>

            <h2 className="text-xl font-semibold mb-2">Current Holdings</h2>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Symbol</th>
                        <th className="py-2 px-4 border-b">Buy Price</th>
                        <th className="py-2 px-4 border-b">Quantity</th>
                        <th className="py-2 px-4 border-b">Current Value</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks.map(stock => (
                        <tr key={stock.symbol}>
                            <td className="py-2 px-4 border-b">{stock.symbol}</td>
                            <td className="py-2 px-4 border-b">${stock.buyPrice.toFixed(2)}</td>
                            <td className="py-2 px-4 border-b">{stock.quantity}</td>
                            <td className="py-2 px-4 border-b">${(stock.buyPrice * stock.quantity).toFixed(2)}</td>
                            <td className="py-2 px-4 border-b">
                                <button
                                    onClick={() => handleRemoveStock(stock.symbol)}
                                    className="text-red-500 hover:underline"
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Portfolio Allocation</h2>
                <Pie data={data} />
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Performance Metrics</h2>
                <p>Total Portfolio Value: ${totalValue.toFixed(2)}</p>
                <p>Number of Stocks: {stocks.length}</p>
            </div>
        </div>
    );
};

export default Portfolio;