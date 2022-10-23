import axios from 'axios'

export const HORARIOS = axios.create({
    baseURL:'/api/horarios',
    timeout: 5000
})  