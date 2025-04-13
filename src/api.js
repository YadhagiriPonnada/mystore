import axios from 'axios';

const API = axios.create();

export const signup = (userData) => API.get(`https://signin-58r85r.5sc6y6-3.usa-e2.cloudhub.io/signup`, { params: userData });
export const login = (credentials) => API.get(`https://signin-58r85r.5sc6y6-3.usa-e2.cloudhub.io/signin`, { params: credentials });
export const fetchProducts = () => API.get('https://fakestoreapi.com/products');
