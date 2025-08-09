import React, { useEffect, useState } from 'react';
import axios from '../../api/api'; // This file should have baseURL: '/api'
import { useNavigate } from 'react-router-dom';
import axiosInstance from "../../api/api";

const SupplierCRUD = () => {
    const [suppliers, setSuppliers] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        address: '',
    });
    const [editingId, setEditingId] = useState(null);
    const navigate = useNavigate();

    // Fetch all suppliers
    const fetchSuppliers = async () => {
        try {
            const res = await axiosInstance.get('/suppliers');

            setSuppliers(res.data);
        } catch (error) {
            console.error('❌ Failed to fetch suppliers', error);
        }
    };

    useEffect(() => {
        fetchSuppliers();
    }, []);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                await axios.put(`/suppliers/${editingId}`, formData);
            } else {
                await axios.post('/suppliers', formData);
            }
            setFormData({ name: '', email: '', contactNumber: '', address: '' });
            setEditingId(null);
            fetchSuppliers();
        } catch (err) {
            console.error(err);
            alert('❌ Failed to save supplier');
        }
    };

    // Handle edit
    const handleEdit = (supplier) => {
        setFormData({
            name: supplier.name,
            email: supplier.email,
            contactNumber: supplier.contactNumber,
            address: supplier.address,
        });
        setEditingId(supplier.id);
    };

    // Handle delete
    const handleDelete = async (id) => {
        if (window.confirm('Are you sure?')) {
            try {
                await axios.delete(`/suppliers/${id}`);
                fetchSuppliers();
            } catch (err) {
                console.error('❌ Failed to delete supplier', err);
            }
        }
    };

    return (
        <div className="p-6">
            <button
                onClick={() => navigate(-1)}
                className="text-blue-600 underline mb-4"
            >
                ← Back to Dashboard
            </button>

            <h2 className="text-2xl font-bold mb-4">
                {editingId ? 'Edit Supplier' : 'Add Supplier'}
            </h2>

            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
            >
                <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="text"
                    placeholder="Contact Number"
                    value={formData.contactNumber}
                    onChange={(e) =>
                        setFormData({ ...formData, contactNumber: e.target.value })
                    }
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="text"
                    placeholder="Address"
                    value={formData.address}
                    onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                    }
                    className="border p-2 rounded"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded col-span-1 md:col-span-2"
                >
                    {editingId ? 'Update' : 'Add'}
                </button>
            </form>

            <h3 className="text-xl font-semibold mb-2">Supplier List</h3>
            <table className="w-full table-auto border">
                <thead className="bg-gray-200">
                <tr>
                    <th className="p-2 border">Name</th>
                    <th className="p-2 border">Email</th>
                    <th className="p-2 border">Contact</th>
                    <th className="p-2 border">Address</th>
                    <th className="p-2 border">Actions</th>
                </tr>
                </thead>
                <tbody>
                {suppliers.map((s) => (
                    <tr key={s.id}>
                        <td className="p-2 border">{s.name}</td>
                        <td className="p-2 border">{s.email}</td>
                        <td className="p-2 border">{s.contactNumber}</td>
                        <td className="p-2 border">{s.address}</td>
                        <td className="p-2 border space-x-2">
                            <button
                                onClick={() => handleEdit(s)}
                                className="bg-yellow-400 px-2 py-1 rounded"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(s.id)}
                                className="bg-red-500 text-white px-2 py-1 rounded"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default SupplierCRUD;
