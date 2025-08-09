import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import AdminDashboard from './pages/admin/AdminDashboard';
import OwnerDashboard from './pages/owner/OwnerDashboard';
import ManagerDashboard from './pages/manager/ManagerDashboard';
import ProtectedRoute from './routes/PrivateRoute';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/*" element={
                <ProtectedRoute role="ADMIN"><AdminDashboard /></ProtectedRoute>
            } />
            <Route path="/owner/*" element={
                <ProtectedRoute role="OWNER"><OwnerDashboard /></ProtectedRoute>
            } />
            <Route path="/manager/*" element={
                <ProtectedRoute role="MANAGER"><ManagerDashboard /></ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
