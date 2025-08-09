import React from 'react';
import { useState } from 'react';
import axios from '../api/api.js';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('/auth/login', {
        email,
        password,
      });


      const { token, role } = response.data;

      // Save token and role
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      // Redirect based on role
      if (role === 'ADMIN') navigate('/admin/dashboard');
      else if (role === 'OWNER') navigate('/owner/dashboard');
      else if (role === 'MANAGER') navigate('/manager/dashboard');
      else setError('Unauthorized role');
    } catch (err) {
      setError(err?.response?.data?.message || 'Invalid credentials');
    }
  };

  return (
      <div className="max-w-md mx-auto mt-16 p-6 border shadow-lg bg-white rounded">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

        <form onSubmit={handleLogin}>
          <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
          />
          <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
          />
          <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
  );
}

export default Login;
