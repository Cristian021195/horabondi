import axios from 'axios'

export const CUENTA = axios.create({
    baseURL:'/api/cuenta',
    timeout: 5000
})