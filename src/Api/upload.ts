import axios from 'axios'

export const UPLOAD = axios.create({
    baseURL:'/api/upload',
    timeout: 5000
})