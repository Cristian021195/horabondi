import axios from 'axios'

export const PRECIOS = axios.create({
    baseURL:'/api/precios',
    timeout: 5000
})  