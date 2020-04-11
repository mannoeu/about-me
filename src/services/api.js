import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/users',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
