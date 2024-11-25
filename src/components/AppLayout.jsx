import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav"; // Import TopNavbar

const AppLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true); // State to manage sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ display: "flex" }}>
      <TopNav />
      <div className="flex">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div
          style={{
            flexGrow: 1,
            marginLeft: isOpen ? "240px" : "60px",
            transition: "margin-left 0.3s",
          }}
        >
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
