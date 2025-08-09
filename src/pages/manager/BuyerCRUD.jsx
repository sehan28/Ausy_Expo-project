import React, { useEffect, useState } from 'react';
import axiosInstance from '/src/api/api';

const BuyerCRUD = () => {
    const [buyers, setBuyers] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        company: ''
    });
    const [editingId, setEditingId] = useState(null);

    const handleAxiosError = (label = 'Error', err) => {
        try {
            const status = err?.response?.status ?? 'N/A';
            const message = err?.response?.data?.message
                || (typeof err?.response?.data === 'string' ? err.response.data : null)
                || err.message
                || '[No error message]';

            console.error(`[${label}] ❌ Axios Error [Status ${status}]: ${message}`);
        } catch (loggingError) {
            console.error(`❌ Failed to log error for ${label}:`, loggingError);
        }
    };

    const fetchBuyers = async () => {
        try {
            const res = await axiosInstance.get('/buyers');
            setBuyers(res.data);
        } catch (err) {
            handleAxiosError('Failed to load buyers', err);
            alert('❌ Failed to load buyers. Please check your token or permissions.');
        }
    };

    useEffect(() => {
        fetchBuyers();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, contactNumber, company } = formData;

        if (!name || !email || !contactNumber || !company) {
            alert("⚠️ Please fill in all fields.");
            return;
        }

        try {
            if (editingId) {
                await axiosInstance.put(`/buyers/${editingId}`, formData);
            } else {
                await axiosInstance.post('/buyers', formData);
            }

            setFormData({ name: '', email: '', contactNumber: '', company: '' });
            setEditingId(null);
            fetchBuyers();
        } catch (err) {
            handleAxiosError('❌ Failed to save buyer', err);
            alert('❌ Failed to save buyer');
        }
    };

    const handleEdit = (buyer) => {
        setFormData({
            name: buyer.name,
            email: buyer.email,
            contactNumber: buyer.contactNumber,
            company: buyer.company
        });
        setEditingId(buyer.id);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this buyer?')) {
            try {
                await axiosInstance.delete(`/buyers/${id}`);
                fetchBuyers();
            } catch (err) {
                handleAxiosError('❌ Error deleting buyer', err);
                alert('❌ Error deleting buyer');
            }
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">
                {editingId ? 'Edit Buyer' : 'Add New Buyer'}
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 mb-6 flex-wrap">
                <input
                    type="text"
                    placeholder="Name"
                    className="border p-2 rounded w-full md:w-1/4"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="border p-2 rounded w-full md:w-1/4"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Contact Number"
                    className="border p-2 rounded w-full md:w-1/4"
                    value={formData.contactNumber}
                    onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Company"
                    className="border p-2 rounded w-full md:w-1/4"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded w-full md:w-auto"
                >
                    {editingId ? 'Update' : 'Add'}
                </button>
            </form>

            <h2 className="text-xl font-bold mb-4">All Buyers</h2>
            <table className="table-auto w-full border">
                <thead>
                <tr className="bg-gray-200">
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Contact</th>
                    <th className="px-4 py-2">Company</th>
                    <th className="px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {buyers.length === 0 ? (
                    <tr>
                        <td colSpan="6" className="text-center py-4 text-gray-500">
                            No buyers found
                        </td>
                    </tr>
                ) : (
                    buyers.map((buyer) => (
                        <tr key={buyer.id} className="border-t">
                            <td className="px-4 py-2">{buyer.id}</td>
                            <td className="px-4 py-2">{buyer.name}</td>
                            <td className="px-4 py-2">{buyer.email}</td>
                            <td className="px-4 py-2">{buyer.contactNumber}</td>
                            <td className="px-4 py-2">{buyer.company}</td>
                            <td className="px-4 py-2 space-x-2">
                                <button
                                    className="bg-yellow-400 px-2 py-1 rounded"
                                    onClick={() => handleEdit(buyer)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                    onClick={() => handleDelete(buyer.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </div>
    );
};

export default BuyerCRUD;
