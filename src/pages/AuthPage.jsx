import React, { useState } from 'react';
import { login, signup } from '../api';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        await signup(form);
        alert('Signup successful! Please log in.');
        setIsSignup(false);
      } else {
        const res = await login(form);
        if (res.data.message === 'Login successful') {
          localStorage.setItem('username', res.data.username);
          alert('Login successful!');
          navigate('/');
        } else {
          alert('Login failed.');
        }
      }
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">{isSignup ? 'Sign Up' : 'Login'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          {isSignup ? 'Sign Up' : 'Login'}
        </button>
      </form>
      <button
        className="mt-4 text-sm text-blue-600 underline"
        onClick={() => setIsSignup(!isSignup)}
      >
        {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign up"}
      </button>
    </div>
  );
};

export default AuthPage;
