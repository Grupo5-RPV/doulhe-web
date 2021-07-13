import axios from 'axios';

const backendUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3333'
    : process.env.BACKEND_URL;

export const api = axios.create({ baseURL: backendUrl });
