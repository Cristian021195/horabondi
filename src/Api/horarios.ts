import axios from 'axios'

export const HORARIOS = axios.create({
    //baseURL:'/api/horarios',
    baseURL:'https://horabondi-backend-production.up.railway.app/horarios',
    timeout: 5000
})  