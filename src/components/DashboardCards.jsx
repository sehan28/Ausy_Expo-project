import React from 'react';
import ManageUsers from "./ManageUsers.jsx";
import {  useState } from 'react';



const data = [
    { label: "Total Products", value: "25,154", growth: "25%" },
    { label: "Total Paid Orders", value: "$16,000", growth: "12%" },
    { label: "Total Customers", value: "15,400k", growth: "15%" },
    { label: "Sales", value: "12,340", growth: "19%" },
];


const DashboardCards = () => {
    const [view, setView] = useState('users');

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6">
            {data.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow">
                    <p className="text-gray-500 font-medium">{item.label}</p>
                    <h2 className="text-2xl font-bold">{item.value}</h2>
                    <p className="text-sm text-blue-600">{item.growth}</p>
                </div>
            ))}

            <div className="flex space-x-4 mb-4">
                <button onClick={() => setView('users')} className="bg-blue-600 text-white px-4 py-2 rounded">Manage Users</button>
            </div>

            {view === 'users' && <ManageUsers />}

        </div>

    );
};

export default DashboardCards;
