import axios from 'axios'

export const LOGIN_DEFAULT = axios.create({
    baseURL:'/api/login/default',
    timeout: 800
})

export const CHECK_LOGIN = axios.create({
    baseURL:'/api/session/check',
    timeout: 800
})
