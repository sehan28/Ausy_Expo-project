import React, { useEffect, useState } from 'react';
import axiosInstance from '/src/api/api';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: 'MANAGER',
    });
    const [editingId, setEditingId] = useState(null);

    // ✅ Error handler for Axios
    const handleAxiosError = (label = 'Error', err) => {
        try {
            const status = err?.response?.status ?? 'N/A';
            const data = err?.response?.data ?? '[No error message]';

            if (err.response) {
                console.error(`[${label}] ❌ Server Error:`, data, `(Status ${status})`);
            } else if (err.request) {
                console.error(`[${label}] ❌ No response from server`, err.request);
            } else {
                console.error(`[${label}] ❌ Axios setup error:`, err.message);
            }
        } catch (loggingError) {
            console.error(`❌ Failed to log error for ${label}:`, loggingError);
        }
    };

    // ✅ Fetch users from backend
    const fetchUsers = async () => {
        try {
            const res = await axiosInstance.get('/users');
            setUsers(Array.isArray(res.data) ? res.data : []);
        } catch (err) {
            handleAxiosError('❌ Failed to fetch users', err);
        }
    };

    // ✅ On mount, fetch users
    useEffect(() => {
        fetchUsers();
    }, []);

    // ✅ Form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, email, password, role } = formData;

        if (!username || !email || (!editingId && !password)) {
            alert("⚠️ Please fill in all required fields.");
            return;
        }

        try {
            if (editingId) {
                await axiosInstance.put(`/users/${editingId}`, { username, email, role });
            } else {
                await axiosInstance.post('/users', { username, email, password, role });
            }

            setFormData({ username: '', email: '', password: '', role: 'MANAGER' });
            setEditingId(null);
            await fetchUsers();
        } catch (err) {
            handleAxiosError('❌ Failed to save user', err);
            alert('❌ Failed to save user');
        }
    };

    // ✅ Edit handler
    const handleEdit = (user) => {
        setFormData({
            username: user.username,
            email: user.email,
            password: '',
            role: user.role,
        });
        setEditingId(user.id);
    };

    // ✅ Delete handler
    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                await axiosInstance.delete(`/users/${id}`);
                await fetchUsers();
            } catch (err) {
                handleAxiosError('❌ Error deleting user', err);
                alert('❌ Error deleting user');
            }
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">
                {editingId ? 'Edit User' : 'Add New User'}
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 mb-6 flex-wrap">
                <input
                    type="text"
                    placeholder="Username"
                    className="border p-2 rounded w-full md:w-1/4"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
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
                {!editingId && (
                    <input
                        type="password"
                        placeholder="Password"
                        className="border p-2 rounded w-full md:w-1/4"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                    />
                )}
                <select
                    className="border p-2 rounded w-full md:w-1/6"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                >
                    <option value="ADMIN">Admin</option>
                    <option value="MANAGER">Manager</option>
                    <option value="OWNER">Owner</option>
                </select>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded w-full md:w-auto"
                >
                    {editingId ? 'Update' : 'Add'}
                </button>
            </form>

            <h2 className="text-xl font-bold mb-4">All Users</h2>
            <table className="table-auto w-full border">
                <thead>
                <tr className="bg-gray-200">
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Username</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Role</th>
                    <th className="px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {users.length === 0 ? (
                    <tr>
                        <td colSpan="5" className="text-center py-4 text-gray-500">
                            No users found
                        </td>
                    </tr>
                ) : (
                    users.map((user) => (
                        <tr key={user.id} className="border-t">
                            <td className="px-4 py-2">{user.id}</td>
                            <td className="px-4 py-2">{user.username}</td>
                            <td className="px-4 py-2">{user.email}</td>
                            <td className="px-4 py-2">{user.role}</td>
                            <td className="px-4 py-2 space-x-2">
                                <button
                                    className="bg-yellow-400 px-2 py-1 rounded"
                                    onClick={() => handleEdit(user)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                    onClick={() => handleDelete(user.id)}
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

export default ManageUsers;
