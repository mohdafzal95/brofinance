// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Updated import
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import Dashboard from "./pages/Dashboard.jsx"; // Example page components
import MarketData from "./pages/MarketData.jsx";
import AlgorithmBuilder from "./pages/AlgorithmBuilder";
import Backtesting from "./pages/Backtesting";
import TradeExecution from "./pages/TradeExecution";
import Portfolio from "./pages/Portfolio";
import SettingsNotifications from "./pages/SettingsNotifications";
import AppLayout from "./components/AppLayout";
import usePage from "./hooks/usePage";
function App() {
  usePage({
    title: "BroFinance",
    description: "Trading platform for algorithmic trading",
    ogTitle: "BroFinance App",
    ogDescription: "Trading platform for algorithmic trading app",
    ogUrl: window.location.href,
    ogImage: "https://images.pexels.com/photos/29137971/pexels-photo-29137971/free-photo-of-scenic-autumn-pathway-lined-with-vibrant-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  });

  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/market-data" element={<MarketData />} />
          <Route path="/algorithm-builder" element={<AlgorithmBuilder />} />
          <Route path="/backtesting" element={<Backtesting />} />
          <Route path="/trade-execution" element={<TradeExecution />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/settings" element={<SettingsNotifications />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
