// src/components/BranchCRUD.jsx
import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/api';

const BranchCRUD = () => {
    const [branches, setBranches] = useState([]);
    const [formData, setFormData] = useState({ name: '', location: '' });
    const [editingId, setEditingId] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchBranches();
    }, []);

    const fetchBranches = async () => {
        try {
            const response = await axiosInstance.get('/branches');
            setBranches(response.data);
            setError('');
        } catch (error) {
            console.error('Failed to fetch branches:', error);
            setError('Failed to load branches. Please check your token or permissions.');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                await axiosInstance.put(`/branches/${editingId}`, formData);
            } else {
                await axiosInstance.post('/branches', formData);
            }
            setFormData({ name: '', location: '' });
            setEditingId(null);
            fetchBranches();
            setError('');
        } catch (error) {
            console.error('Error saving branch:', error);
            setError('Failed to save branch.');
        }
    };

    const handleEdit = (branch) => {
        setFormData({ name: branch.name, location: branch.location });
        setEditingId(branch.id);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this branch?')) {
            try {
                await axiosInstance.delete(`/branches/${id}`);
                fetchBranches();
                setError('');
            } catch (error) {
                console.error('Failed to delete branch:', error);
                setError('Failed to delete branch.');
            }
        }
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Branch Management</h2>

            {error && <p className="text-red-600 mb-3">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow-md p-4 rounded">
                <div>
                    <label className="block font-medium">Branch Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full border px-3 py-2 rounded"
                    />
                </div>

                <div>
                    <label className="block font-medium">Location</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        className="w-full border px-3 py-2 rounded"
                    />
                </div>

                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                    {editingId ? 'Update Branch' : 'Add Branch'}
                </button>
            </form>

            <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Existing Branches</h3>
                {branches.length === 0 ? (
                    <p>No branches found.</p>
                ) : (
                    <table className="w-full table-auto border">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="border px-4 py-2">ID</th>
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Location</th>
                            <th className="border px-4 py-2">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {branches.map((branch) => (
                            <tr key={branch.id}>
                                <td className="border px-4 py-2">{branch.id}</td>
                                <td className="border px-4 py-2">{branch.name}</td>
                                <td className="border px-4 py-2">{branch.location}</td>
                                <td className="border px-4 py-2 space-x-2">
                                    <button
                                        className="bg-yellow-500 text-white px-3 py-1 rounded"
                                        onClick={() => handleEdit(branch)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="bg-red-600 text-white px-3 py-1 rounded"
                                        onClick={() => handleDelete(branch.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default BranchCRUD;
