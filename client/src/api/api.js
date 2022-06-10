import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000'});


API.interceptors.request.use((req)=> {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
})


//@getting all
export const fetchHospitals = async() => {
    return await API.get(`/`);
}

//@searching hospital 
export const searchPost = async(query) => {
    return await API.get(`/search?query=${query}`);
}

//@getting hospital data
export const getHospitalData = async(id) => {
    return await API.get(`/edit/${id}`);
}

export const handleSignUp = async(authData) => {
    return await API.post(`/signup`, authData);
}

export const handleLogin = async(authData) => {
    return await API.post(`/signin`,authData)
}

export const addReview = async(data) => {
    return await axios.post(`/reviews/new`, data)
}

export const getReviews = async(id) => {
    return await axios.get(`/reviews/${id}`)
}