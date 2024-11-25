// src/pages/SettingsNotifications.jsx
import React, { useState } from 'react';

const SettingsNotifications = () => {
    const [profile, setProfile] = useState({
        username: '',
        email: '',
    });

    const [apiKey, setApiKey] = useState('');
    const [algorithmParams, setAlgorithmParams] = useState({
        stopLoss: '',
        profitTarget: '',
    });

    const [notifications, setNotifications] = useState({
        priceAlerts: false,
        orderExecutions: false,
        riskLevels: false,
    });

    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleAlgorithmParamsChange = (e) => {
        const { name, value } = e.target;
        setAlgorithmParams({ ...algorithmParams, [name]: value });
    };

    const handleNotificationChange = (e) => {
        const { name, checked } = e.target;
        setNotifications({ ...notifications, [name]: checked });
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Settings and Notifications</h1>

            {/* Profile Information Section */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Profile Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={profile.username}
                        onChange={handleProfileChange}
                        className="bg-gray-200 p-2 rounded-md"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={profile.email}
                        onChange={handleProfileChange}
                        className="bg-gray-200 p-2 rounded-md"
                    />
                </div>
            </div>

            {/* API Keys Section */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">API Keys</h2>
                <input
                    type="text"
                    placeholder="Broker API Key"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="bg-gray-200 p-2 rounded-md w-full"
                />
            </div>

            {/* Algorithm Parameters Section */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Algorithm Parameters</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="number"
                        name="stopLoss"
                        placeholder="Stop Loss (%)"
                        value={algorithmParams.stopLoss}
                        onChange={handleAlgorithmParamsChange}
                        className="bg-gray-200 p-2 rounded-md"
                    />
                    <input
                        type="number"
                        name="profitTarget"
                        placeholder="Profit Target (%)"
                        value={algorithmParams.profitTarget}
                        onChange={handleAlgorithmParamsChange}
                        className="bg-gray-200 p-2 rounded-md"
                    />
                </div>
            </div>

            {/* Notifications Section */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Notifications</h2>
                <div className="flex items-center mb-2">
                    <input
                        type="checkbox"
                        name="priceAlerts"
                        checked={notifications.priceAlerts}
                        onChange={handleNotificationChange}
                        className="mr-2"
                    />
                    <label>Price Alerts</label>
                </div>
                <div className="flex items-center mb-2">
                    <input
                        type="checkbox"
                        name="orderExecutions"
                        checked={notifications.orderExecutions}
                        onChange={handleNotificationChange}
                        className="mr-2"
                    />
                    <label>Order Executions</label>
                </div>
                <div className="flex items-center mb-2">
                    <input
                        type="checkbox"
                        name="riskLevels"
                        checked={notifications.riskLevels}
                        onChange={handleNotificationChange}
                        className="mr-2"
                    />
                    <label>Risk Levels</label>
                </div>
            </div>

            {/* Save Changes Button */}
            <button
                onClick={() => alert('Settings saved!')}
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
                Save Changes
            </button>
        </div>
    );
};

export default SettingsNotifications;