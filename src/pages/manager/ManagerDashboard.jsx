import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ManagerDashboard = () => {
    useNavigate();
    return (
        <div className="p-8 min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">Manager Dashboard</h1>
            <div className="space-x-4">
                <Link to="/manager/suppliers">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded">
                        Manage Suppliers
                    </button>

                </Link>
            </div>
            <div className="space-x-4">
                <Link to="/manager/buyers">
            <button
                className="bg-green-600 text-white px-4 py-2 rounded"
            >
                Manage Buyers
            </button>
                </Link>
            </div>

        </div>
    );
};

export default ManagerDashboard;
