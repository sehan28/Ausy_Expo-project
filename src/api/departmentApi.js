// src/api/departmentApi.js
import axiosInstance from './api';

export const getDepartments = () => axiosInstance.get('/departments');
export const createDepartment = (data) => axiosInstance.post('/departments', data);
export const updateDepartment = (id, data) => axiosInstance.put(`/departments/${id}`, data);
export const deleteDepartment = (id) => axiosInstance.delete(`/departments/${id}`);
