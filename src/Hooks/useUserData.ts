import { useEffect, useState } from 'react';
import { ILoginUser } from '../Interfaces';
import {getLocalStorage } from '../Utils';
export function useUserData(){
    const [usuario, setUsuario] = useState<ILoginUser>(getLocalStorage('usuario', true, {email:'', image:'', name:'', tipo:''}))

    useEffect(()=>{
        localStorage.setItem('usuario', JSON.stringify(usuario))
    },[usuario])

    return {
        usuario,
        setUsuario,
    }
}
