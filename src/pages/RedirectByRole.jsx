import { Navigate } from 'react-router-dom';

const RedirectByRole = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) return <Navigate to="/login" />;

    switch (user.role) {
        case 'ADMIN':
            return <Navigate to="/admin/AdminDashboard" />;
        case 'OWNER':
            return <Navigate to="/owner/OwnerDashboard" />;
        case 'MANAGER':
            return <Navigate to="/manager/ManagerDashboard" />;
        default:
            return <Navigate to="/" />;
    }
};

export default RedirectByRole;
