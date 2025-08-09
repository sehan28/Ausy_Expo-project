import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { Outlet } from 'react-router-dom'; // if using React Router

const AdminLayout = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Section */}
            <div className="flex-1 bg-gray-100 overflow-y-auto">
                <Topbar />

                {/* Page content will be rendered here */}
                <div className="p-6">
                    <Outlet /> {/* Renders nested routes */}
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
