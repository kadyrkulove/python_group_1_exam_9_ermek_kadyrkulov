import axios from 'axios'

const BASE_URL = 'http://localhost:8000/api/v1';
const LOGIN_URL = '/login/';
const REGISTER_URL = '/register/';
const USERS_URL = '/users/';
const REGISTER_ACTIVATE_URL = '/register/activate/';
const TOKEN_LOGIN_URL = '/token-login/';
const PRODUCTS_URL = '/products/';

const instance = axios.create({
    baseURL: BASE_URL
});

export {BASE_URL, LOGIN_URL, REGISTER_URL, USERS_URL, REGISTER_ACTIVATE_URL, TOKEN_LOGIN_URL, PRODUCTS_URL}

export default instance;