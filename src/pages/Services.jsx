// src/pages/Services.jsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
    return (
        <>

            <div className="pt-20 px-6 min-h-screen bg-gray-50">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6 text-blue-700">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 shadow-md rounded">
                            <h3 className="text-xl font-bold mb-2">Dashboard Management</h3>
                            <p>Real-time control for managers, owners, and admins.</p>
                        </div>
                        <div className="bg-white p-6 shadow-md rounded">
                            <h3 className="text-xl font-bold mb-2">Stock & Employee Tracking</h3>
                            <p>Track resources and employees efficiently.</p>
                        </div>
                        <div className="bg-white p-6 shadow-md rounded">
                            <h3 className="text-xl font-bold mb-2">Automated Reports</h3>
                            <p>Visualize trends and export data in PDF or graphs.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Services;
