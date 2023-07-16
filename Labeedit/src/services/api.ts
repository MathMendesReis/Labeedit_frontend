import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://labeedit-5sph.onrender.com',
  baseURL: 'http://localhost:3003/',
});

export default api;
