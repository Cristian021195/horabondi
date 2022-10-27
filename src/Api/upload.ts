import axios from 'axios'

export const UPLOAD = axios.create({
    //baseURL:'/api/upload',
    baseURL:'https://horabondi-backend-production.up.railway.app/upload',
    timeout: 5000
})