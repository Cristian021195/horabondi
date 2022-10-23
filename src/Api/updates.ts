import axios from 'axios'

export const UPDATES = axios.create({
    baseURL:'/api/updates',
    timeout: 5000
})  