// src/api/api.js
import axios from 'axios';

// Create Axios instance with baseURL for Vite proxy
const axiosInstance = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
});


// Request interceptor to attach token
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        console.error('❌ Axios Request Interceptor Error:', error);
        return Promise.reject(error);
    }
);

// Response interceptor for logging errors
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        try {
            const status = error?.response?.status ?? 'N/A';
            const message =
                error?.response?.data?.message ||
                (typeof error?.response?.data === 'string' ? error.response.data : null) ||
                error.message ||
                '[No error message]';

            console.error(`❌ Axios Error [Status ${status}]: ${message}`);

            if (error?.response?.data) {
                console.error('Full response data:', error.response.data);
            }
        } catch (err) {
            console.error('❌ Error logging the error:', err);
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
