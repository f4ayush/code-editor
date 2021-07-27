import axios from 'axios';

const API = axios.create({ baseURL: 'https://code-editor-server-ayush.herokuapp.com/' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('codeUser')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('codeUser')).token}`;
    }

    return req;
});
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const save = (code) => API.post('/save', code);
export const getCode = (userId) => API.post('/getCode', { userId });