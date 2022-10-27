import axios from 'axios'

export const PRECIOS = axios.create({
    //baseURL:'/api/precios',
    baseURL:'https://horabondi-backend-production.up.railway.app/precios',
    timeout: 5000
})  