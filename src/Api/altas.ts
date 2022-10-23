import axios from 'axios'

export const ALTA_USUARIO_COMUN = axios.create({
    baseURL:'/api/admin/alta-usuario-comun',
    timeout: 5000
})
export const ALTA_USUARIO = axios.create({
    baseURL:'/api/admin/alta-usuario',
    timeout: 5000
})
export const ALTA_USUARIO_EMPRESA = axios.create({
    baseURL:'/api/admin/alta-usuario-empresa',
    timeout: 5000
})
export const ALTA_USUARIO_PUBLICACION = axios.create({
    baseURL:'/api/admin/alta-usuario-publicacion',
    timeout: 5000
})
export const ALTA_EMPRESA = axios.create({
    baseURL:'/api/admin/alta-empresa',
    timeout: 5000
})