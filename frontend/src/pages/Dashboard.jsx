import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import apiService from '../services/api';

function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await apiService.getUser();
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    try {
      await apiService.updatePassword({ currentPassword, newPassword });
      setMessage('Password updated successfully');
      setCurrentPassword('');
      setNewPassword('');
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred');
    }
  };

  const handleDeleteAccount = async () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      try {
        await apiService.deleteAccount();
        logout();
        navigate('/');
      } catch (error) {
        setMessage(error.response?.data?.message || 'An error occurred');
      }
    }
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <p>Welcome, {userData.name}!</p>
      <p>Email: {userData.email}</p>

      <h3 className="text-xl font-bold mt-6 mb-2">Update Password</h3>
      <form onSubmit={handleUpdatePassword} className="space-y-4">
        <div>
          <label htmlFor="currentPassword" className="block mb-1">Current Password</label>
          <input
            type="password"
            id="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="newPassword" className="block mb-1">New Password</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Update Password
        </button>
      </form>

      <button 
        onClick={handleDeleteAccount} 
        className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 mt-6"
      >
        Delete Account
      </button>

      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
}

export default Dashboard;
