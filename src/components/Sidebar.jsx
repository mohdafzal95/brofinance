// src/components/Sidebar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaChartLine,
  FaCogs,
  FaBackspace,
  FaExchangeAlt,
  FaWallet,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { to: "/", icon: <FaHome />, label: "Dashboard" },
    { to: "/market-data", icon: <FaChartLine />, label: "Market Data" },
    { to: "/algorithm-builder", icon: <FaCogs />, label: "Algorithm Builder" },
    { to: "/backtesting", icon: <FaBackspace />, label: "Backtesting" },
    { to: "/trade-execution", icon: <FaExchangeAlt />, label: "Trade Execution" },
    { to: "/portfolio", icon: <FaWallet />, label: "Portfolio" },
    { to: "/settings", icon: <FaCog />, label: "Settings" },
  ];

  return (
    <div className={`fixed top-20 inset-y-0 left-0 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} bg-gray-800 text-white w-60`}>
      <div className="flex flex-col h-full">
        <nav className="flex-1">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="flex items-center p-2 hover:bg-gray-700 transition-colors duration-200">
                  {item.icon}
                  <span>{isOpen ? item.label : ""}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
