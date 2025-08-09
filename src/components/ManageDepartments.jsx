// src/components/ManageDepartments.jsx
import React, { useEffect, useState } from 'react';
import {
    getDepartments,
    createDepartment,
    updateDepartment,
    deleteDepartment
} from '../api/departmentApi';

const ManageDepartments = () => {
    const [departments, setDepartments] = useState([]);
    const [name, setName] = useState('');
    const [editingId, setEditingId] = useState(null);

    const fetchDepartments = async () => {
        try {
            const res = await getDepartments();
            setDepartments(res.data);
        } catch (err) {
            console.error("❌ Error fetching departments", err);
        }
    };

    useEffect(() => {
        fetchDepartments();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name.trim()) return alert("Name is required");

        try {
            if (editingId) {
                await updateDepartment(editingId, { name });
            } else {
                await createDepartment({ name });
            }
            setName('');
            setEditingId(null);
            fetchDepartments();
        } catch (err) {
            alert("❌ Server error");
        }
    };

    const handleEdit = (dept) => {
        setName(dept.name);
        setEditingId(dept.id);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Delete this department?")) {
            await deleteDepartment(id);
            fetchDepartments();
        }
    };

    return (
        <div className="p-6 bg-white rounded shadow">
            <h2 className="text-lg font-bold mb-4">Manage Departments</h2>

            <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
                <input
                    type="text"
                    className="border p-2 rounded flex-1"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Department name"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
                    {editingId ? 'Update' : 'Add'}
                </button>
            </form>

            <table className="table-auto w-full border">
                <thead className="bg-gray-100">
                <tr>
                    <th className="px-4 py-2 border">ID</th>
                    <th className="px-4 py-2 border">Name</th>
                    <th className="px-4 py-2 border">Actions</th>
                </tr>
                </thead>
                <tbody>
                {departments.map((dept) => (
                    <tr key={dept.id}>
                        <td className="border px-4 py-2">{dept.id}</td>
                        <td className="border px-4 py-2">{dept.name}</td>
                        <td className="border px-4 py-2 space-x-2">
                            <button className="bg-yellow-400 px-2 py-1 rounded" onClick={() => handleEdit(dept)}>Edit</button>
                            <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDelete(dept.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageDepartments;
