import axios from 'axios';

const API = axios.create({ baseURL: 'https://grader-project.herokuapp.com' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        const name="Bearer "+ JSON.parse(localStorage.getItem('profile')).token;
        req.headers.Authorization =name;
    }
  
    return req;
  });

export const fetchCourses = () => API.get('/courses');

export const signIn = (formData) => API.post('/user/signin', formData);

export const signUp = (formData) => API.post('/user/signup', formData);

export const getApplication = () => API.get('/apply'); 

export const updateApplication = (updatedApplication) =>API.patch('/apply',updatedApplication);