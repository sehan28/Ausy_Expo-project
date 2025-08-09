import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import AdminDashboard from './pages/admin/AdminDashboard';
import OwnerDashboard from './pages/owner/OwnerDashboard';
import ManagerDashboard from './pages/manager/ManagerDashboard';
import SupplierCrud from './pages/manager/SupplierCRUD';
import NotFound from './pages/NotFound';
import PrivateRoute from './routes/PrivateRoute';
import BuyerCRUD from './pages/manager/BuyerCRUD';
import BranchCRUD from './components/BranchCRUD';

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow px-4 py-6">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />

                    {/* Protected Routes */}
                    <Route element={<PrivateRoute roles={['ADMIN']} />}>
                        <Route path="/admin/dashboard" element={<AdminDashboard />} />
                    </Route>

                    <Route element={<PrivateRoute roles={['OWNER']} />}>
                        <Route path="/owner/dashboard" element={<OwnerDashboard />} />
                        <Route path="/owner/branches" element={<BranchCRUD />} />
                    </Route>

                    <Route element={<PrivateRoute roles={['MANAGER']} />}>
                        <Route path="/manager/dashboard" element={<ManagerDashboard />} />
                        <Route path="/manager/suppliers" element={<SupplierCrud />} />
                        <Route path="/manager/buyers" element={<BuyerCRUD />} />
                        <Route path="*" element={<h1>404 - Page not found</h1>} />
                    </Route>

                    {/* 404 Not Found */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

export default App;
