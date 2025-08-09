import React from 'react';

const DashboardHome = () => {


    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-100 p-4 rounded shadow">
                    <h3 className="text-blue-700 font-bold text-lg">Users</h3>
                    <p className="text-2xl">120</p>
                </div>
                <div className="bg-green-100 p-4 rounded shadow">
                    <h3 className="text-green-700 font-bold text-lg">Revenue</h3>
                    <p className="text-2xl">$5,200</p>
                </div>
                <div className="bg-yellow-100 p-4 rounded shadow">
                    <h3 className="text-yellow-700 font-bold text-lg">Requests</h3>
                    <p className="text-2xl">42</p>
                </div>
            </div>


        </div>
    );
};

export default DashboardHome;
