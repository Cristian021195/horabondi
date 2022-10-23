import Cookies from "js-cookie";
import { useEffect, useState } from "react"
import { LOGIN_DEFAULT, CHECK_LOGIN } from "../Api";
import { removeLocalStorageStatus, setLocalStorageStatusObject } from "../Helpers";
import { IUserToken } from "../Interfaces";
LOGIN_DEFAULT

export const useSession = () => {
    const [loginStatus, setLoginStatus] = useState<boolean>(false);

    const logIn = async (datos_obj:any) => {
        try {
            const {data} = await LOGIN_DEFAULT.post<IUserToken>('/',datos_obj);
            setLocalStorageStatusObject( {value:data.user},'usuario')
            Cookies.set('token', data.token+"");
            setLoginStatus(true);
            window.location.href = '/login';
        } catch (error) {
            setLoginStatus(false);
        }
        
    }

    const logOut = async () => {
        removeLocalStorageStatus('usuario')
        Cookies.remove('token');
        setLoginStatus(false);
        window.location.href = '/';        
    }
    const checkSession = async () => {
        try {
            const {data} = await CHECK_LOGIN.get('')
            data.error ? setLoginStatus(false) : setLoginStatus(true)
        } catch (error) {
            setLoginStatus(false)
        }
    }

    useEffect(()=>{
        checkSession();
    },[])

    return {
        loginStatus,
        setLoginStatus,
        logIn,
        logOut,
        checkSession
    }
}
