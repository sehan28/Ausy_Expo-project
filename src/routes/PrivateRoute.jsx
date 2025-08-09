import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute({ roles }) {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (!token) {
        // Not logged in, redirect to login page
        return <Navigate to="/login" replace />;
    }

    if (roles && !roles.includes(role)) {
        // Role not authorized, redirect to home page
        return <Navigate to="/" replace />;
    }

    // Authorized, render child routes
    return <Outlet />;
}

export default PrivateRoute;
