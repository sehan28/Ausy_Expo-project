import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



function Navbar() {
    const [role, setRole] = useState('');

    useEffect(() => {
        const storedRole = localStorage.getItem('role');
        setRole(storedRole);
    }, []);

    const logout = () => {
        localStorage.clear();
        window.location.href = '/';
    };

    return (
        <nav className="flex flex-wrap justify-between items-center p-4 bg-blue-600 text-white">
            <div className="text-xl font-bold">AUSY_EXPO</div>

            <ul className="flex space-x-4 text-sm sm:text-base">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                {role === 'ADMIN' && <li><Link to="/admin/dashboard">Admin Dashboard</Link></li>}
                {role === 'OWNER' && <li><Link to="/owner/dashboard">Owner Dashboard</Link></li>}
                {role === 'MANAGER' && <li><Link to="/manager/dashboard">Manager Dashboard</Link></li>}
                {role ? (
                    <li><button onClick={logout}>Logout</button></li>
                ) : (
                    <li><Link to="/login">Login</Link></li>
                )}
            </ul>

        </nav>
    );
}

export default Navbar;
