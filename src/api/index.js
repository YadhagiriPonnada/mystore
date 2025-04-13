import axios from 'axios';

const API = axios.create({ baseURL: 'https://fakestoreapi.com' });

export const signup = (user) => API.post('/users', user);
export const login = (credentials) => API.post('/auth/login', credentials);
export const fetchProducts = () => API.get('/products');
export const fetchCart = (userId) => API.get(`/carts/user/${userId}`);
