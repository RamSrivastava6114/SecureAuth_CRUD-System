import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

api.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
}, (error) => {
  console.error('Request error:', error);
  return Promise.reject(error);
});

api.interceptors.response.use((response) => {
  return response;
}, (error) => {
  console.error('Response error:', error.response || error);
  return Promise.reject(error);
});

const register = (userData) => api.post('/users/register', userData);
const login = (credentials) => api.post('/users/login', credentials);
const getUser = () => api.get('/users/me');
const updatePassword = (passwordData) => api.put('/users/update-password', passwordData);
const deleteAccount = () => api.delete('/users/delete-account');

const apiService = {
  register,
  login,
  getUser,
  updatePassword,
  deleteAccount,
};

export default apiService;
