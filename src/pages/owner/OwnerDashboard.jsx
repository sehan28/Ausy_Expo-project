// src/pages/owner/OwnerDashboard.jsx
import React from 'react';
import Sidebar from '/src/components/Sidebar';
import Topbar from '/src/components/Topbar';
import DashboardHome from '/src/components/DashboardHome';

const OwnerDashboard = () => {
    return (
        <div className="flex">
            <Sidebar role="owner" />
            <div className="flex-1 bg-gray-100 min-h-screen">
                <Topbar />
                <DashboardHome />
            </div>
        </div>
    );
};

export default OwnerDashboard;
