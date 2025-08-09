import React from 'react';
import Sidebar from '/src/components/SideBar';
import Topbar from '/src/components/TopBar';
import DashboardCards from '/src/components/DashboardCards';
import SalesOverview from '/src/components/SalesOverview';
import RecentSales from '/src/components/RecentSales';
import ManageUsers from '/src/components/ManageUsers';

const AdminDashboard = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 ml-64 bg-gray-100 min-h-screen">
                <Topbar />
                <DashboardCards />
                <div className="p-6 flex flex-col md:flex-row gap-4">
                    <SalesOverview />
                    <RecentSales />
                </div>
                <ManageUsers />
            </div>
        </div>
    );
};

export default AdminDashboard;
