import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import UserForm from '../components/UserForm';
import apiService from '../services/api';  // Correct import

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiService.login({ email, password });  // Use apiService
      setUser(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/dashboard');
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <UserForm
        title="Login"
        onSubmit={handleSubmit}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        buttonText="Login"
      />
    </>
  );
}

export default Login;
