import axios from 'axios';

const api = axios.create({
    baseURL: 'https://alocador-server.herokuapp.com'
})

export default api;