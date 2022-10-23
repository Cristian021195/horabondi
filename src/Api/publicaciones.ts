import axios from 'axios'

export const PUBLICACIONES = axios.create({
    baseURL:'/api/publicaciones',
    timeout: 5000
});

export const PUBLICACION = axios.create({
    baseURL:'/api/publicacion',
    timeout: 5000
});