import React from 'react';
import { FaChartBar, FaUsers, FaBoxOpen, FaPlus, FaClipboardList, FaBuilding } from "react-icons/fa";

const Sidebar = ({ role }) => {
    return (
        <aside className="w-64 bg-white shadow-md h-screen fixed">
            <div className="p-6 text-xl font-bold border-b">Logoipsum</div>
            <nav className="p-4 space-y-2">
                <div className="text-gray-500 uppercase text-xs">Dashboard</div>
                <button className="flex items-center w-full px-4 py-2 text-blue-600 bg-blue-100 rounded">
                    <FaChartBar className="mr-2" /> Dashboard
                </button>
                
                {/* Role-specific navigation */}
                {role === 'owner' && (
                    <>
                        <div className="text-gray-500 mt-4 uppercase text-xs">Management</div>
                        <button className="flex items-center w-full px-4 py-2 hover:bg-gray-100 rounded">
                            <FaBuilding className="mr-2" /> Manage Branches
                        </button>
                    </>
                )}
                
                {role === 'admin' && (
                    <>
                        <div className="text-gray-500 mt-4 uppercase text-xs">Administration</div>
                        <button className="flex items-center w-full px-4 py-2 hover:bg-gray-100 rounded">
                            <FaUsers className="mr-2" /> Manage Users
                        </button>
                    </>
                )}
                
                <div className="text-gray-500 mt-4 uppercase text-xs">Customers</div>
                <button className="flex items-center w-full px-4 py-2 hover:bg-gray-100 rounded">
                    <FaUsers className="mr-2" /> Customers
                </button>
                <button className="flex items-center w-full px-4 py-2 hover:bg-gray-100 rounded">
                    <FaPlus className="mr-2" /> New customer
                </button>
                <button className="flex items-center w-full px-4 py-2 hover:bg-gray-100 rounded">
                    <FaClipboardList className="mr-2" /> Verified customers
                </button>
                <div className="text-gray-500 mt-4 uppercase text-xs">Products</div>
                <button className="flex items-center w-full px-4 py-2 hover:bg-gray-100 rounded">
                    <FaBoxOpen className="mr-2" /> Products
                </button>

            </nav>
        </aside>
    );
};

export default Sidebar;
