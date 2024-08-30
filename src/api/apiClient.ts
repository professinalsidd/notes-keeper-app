import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://notes-keeper-backend-six.vercel.app/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
