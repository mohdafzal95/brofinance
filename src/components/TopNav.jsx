// src/components/TopNav.jsx
import React, { useState } from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';

function TopNav() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="fixed top-0 left-0 right-0 bg-white text-black p-4 flex items-center justify-between shadow-md z-50 h-20">
            <div className="flex items-center flex-grow">
                <input
                    type="text"
                    placeholder="Search stock symbols..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="bg-gray-200 text-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
            </div>
            <div className="flex items-center">
                <button className="relative p-2">
                    <FaBell className="text-xl text-gray-600" />
                </button>
                <div className="relative">
                    <button onClick={toggleDropdown} className="p-2">
                        <FaUserCircle className="text-xl text-gray-600" />
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-300">
                            <ul>
                                <li className="p-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                                <li className="p-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                                <li className="p-2 hover:bg-gray-100 cursor-pointer">Logout</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TopNav;