// src/components/Dashboard.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import usePage from '../hooks/usePage';

function Dashboard() {
  usePage({
    title: "Dashboard",
    description: "Dashboard description",
    ogTitle: "Dashboard",
    ogDescription: "Dashboard description",
    ogUrl: window.location.href,
    ogImage: "https://images.pexels.com/photos/29137971/pexels-photo-29137971/free-photo-of-scenic-autumn-pathway-lined-with-vibrant-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });

  // Sample data for the line chart
  const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Major Indices Performance',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
            },
        ],
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {/* Summary Cards */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold">Total Portfolio Value</h2>
                    <p className="text-2xl">$100,000</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold">Today's Gain/Loss</h2>
                    <p className="text-2xl text-green-500">+$1,200</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold">Key Market Indicators</h2>
                    <p className="text-2xl">S&P 500: 4,500</p>
                </div>
            </div>

            {/* Trending Stocks Section */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                <h2 className="text-lg font-semibold mb-2">Trending Stocks</h2>
                <ul>
                    <li className="flex justify-between p-2 border-b">
                        <span>Apple (AAPL)</span>
                        <span className="text-green-500">+$5.00</span>
                    </li>
                    <li className="flex justify-between p-2 border-b">
                        <span>Amazon (AMZN)</span>
                        <span className="text-red-500">-$3.00</span>
                    </li>
                    <li className="flex justify-between p-2 border-b">
                        <span>Google (GOOGL)</span>
                        <span className="text-green-500">+$10.00</span>
                    </li>
                </ul>
            </div>

            {/* Line Chart for Major Indices */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-2">Major Indices Performance</h2>
                <Line data={data} />
            </div>
        </div>
    );
}

export default Dashboard;