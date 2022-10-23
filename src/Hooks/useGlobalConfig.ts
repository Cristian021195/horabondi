import { useEffect, useState } from 'react';
import { ThemeHelper } from '../Helpers';
import { ILocationUser } from '../Interfaces';
import { ISSERVER, createLocalStorage, getLocalStorage } from '../Utils';
export function useGlobalConfig(){
    const [tema, setTema]                     = useState(getLocalStorage('tema', false, 'light'))
    const [fuente, setFuente]                 = useState(getLocalStorage('fuente', false, 'normal'))
    const [notificaciones, setNotificaciones] = useState(getLocalStorage('notificaciones', false, 'false'))
    const [narrador, setNarrador]   = useState(getLocalStorage('narrador', false, 'false'))
    const [idle, setIdle]           = useState(getLocalStorage('idle', false, 'false'))
    const [ubicacion, setUbicacion] = useState(getLocalStorage('ubicacion', true, {enabled:false, latitude:'', longitude:''}))
    const [favoritos, setFavoritos] = useState(getLocalStorage('favoritos',true, []))

    useEffect(()=>{
        localStorage.setItem('tema', tema)
        localStorage.setItem('fuente', fuente)
        localStorage.setItem('notificaciones', notificaciones)
        localStorage.setItem('narrador', narrador)
        localStorage.setItem('idle', idle)
        localStorage.setItem('ubicacion', JSON.stringify(ubicacion))
        localStorage.setItem('favoritos', JSON.stringify(favoritos))
        ThemeHelper(tema, fuente)
    },[tema, fuente, notificaciones,narrador,idle,ubicacion,favoritos])

    return {
        tema,
        fuente,
        notificaciones,
        narrador,
        idle,
        ubicacion,
        favoritos,
        setTema,
        setFuente,
        setNarrador,
        setNotificaciones,
        setIdle,
        setUbicacion,
        setFavoritos
    }
}
