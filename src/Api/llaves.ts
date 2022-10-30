import axios from 'axios'

export const LLAVES = axios.create({
    baseURL:'/api/llaves',
    timeout: 5000
})

export const GENERADOR_LLAVES = axios.create({
    baseURL:'/api/generador/llaves',
    timeout: 5000
})