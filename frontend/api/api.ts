import axios from 'axios';
import { REACT_APP_API_BASE_URL } from '@env';

console.log('API Base URL:', REACT_APP_API_BASE_URL); // Debug log

const api = axios.create({
  baseURL: REACT_APP_API_BASE_URL,
});

export default api;
