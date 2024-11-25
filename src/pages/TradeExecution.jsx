import React, { useState, useEffect } from 'react';

const TradeExecution = () => {
    const [algorithm, setAlgorithm] = useState('');
    const [isRunning, setIsRunning] = useState(false);
    const [openPositions, setOpenPositions] = useState([]);
    const [activeOrders, setActiveOrders] = useState([]);
    const [orderType, setOrderType] = useState('market');
    const [profitLoss, setProfitLoss] = useState(0);

    // Simulated data for open positions and active orders
    useEffect(() => {
        const interval = setInterval(() => {
            if (isRunning) {
                // Simulate updating profit/loss and active orders
                setProfitLoss((prev) => prev + (Math.random() - 0.5)); // Random profit/loss change
                setActiveOrders((prev) => [
                    ...prev,
                    { id: prev.length + 1, type: orderType, status: 'Pending' },
                ]);
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [isRunning, orderType]);

    const handleStartStop = () => {
        setIsRunning((prev) => !prev);
    };

    const handleOrderSubmit = () => {
        // Simulate order submission
        setActiveOrders((prev) => [
            ...prev,
            { id: prev.length + 1, type: orderType, status: 'Executed' },
        ]);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Trade Execution and Monitoring</h1>
            <div className="mb-4">
                <label className="block mb-1">Select Trading Algorithm:</label>
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
            <button
                onClick={handleStartStop}
                className={`bg-${isRunning ? 'red' : 'green'}-500 text-white p-2 rounded-md hover:bg-${isRunning ? 'red' : 'green'}-600`}
            >
                {isRunning ? 'Stop' : 'Start'} Algorithm
            </button>

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Open Positions</h2>
                <ul className="bg-white p-4 rounded-lg shadow-md">
                    {openPositions.length === 0 ? (
                        <li>No open positions</li>
                    ) : (
                        openPositions.map((position, index) => (
                            <li key={index} className="border-b py-2">
                                Position {index + 1}: {position.symbol} - P/L: ${position.profitLoss}
                            </li>
                        ))
                    )}
                </ul>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Active Orders</h2>
                <ul className="bg-white p-4 rounded-lg shadow-md">
                    {activeOrders.length === 0 ? (
                        <li>No active orders</li>
                    ) : (
                        activeOrders.map((order) => (
                            <li key={order.id} className="border-b py-2">
                                Order {order.id}: {order.type} - Status: {order.status}
                            </li>
                        ))
                    )}
                </ul>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Manage Orders</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block mb-1">Order Type:</label>
                        <select
                            value={orderType}
                            onChange={(e) => setOrderType(e.target.value)}
                            className="bg-gray-200 p-2 rounded-md w-full"
                        >
                            <option value="market">Market</option>
                            <option value="limit">Limit</option>
                            <option value="stop">Stop</option>
                        </select>
                    </div>
                </div>
                <button
                    onClick={handleOrderSubmit}
                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                    Submit Order
                </button>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Real-Time Profit/Loss</h2>
                <p className="bg-white p-4 rounded-lg shadow-md">Current P/L: ${profitLoss.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default TradeExecution;