import type { NextPage } from 'next'
import { FormEvent, useState, useEffect } from 'react';
import { LayoutPrincipal } from '../src/Layouts';
import { ISSERVER, compartir } from '../src/Utils';
import {IUserToken} from '../src/Interfaces';
//import { signIn, signOut, getProviders, getSession} from "next-auth/react"
import Cookies from 'js-cookie';
import { CHECK_LOGIN, LOGIN_DEFAULT } from '../src/Api';
import {setLocalStorageStatusObject } from '../src/Helpers';
import { useSession } from '../src/Hooks/useSession';
import { useUserData } from '../src/Hooks';
import Image from 'next/image';


const Login: NextPage = () => {

  const {loginStatus, error, logIn, logOut, setError} = useSession();
  const {usuario, setUsuario} = useUserData();

  async function submitHandler(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    let datos = new FormData(e.currentTarget);
    const datos_obj = Object.fromEntries(datos.entries());

    try {
        logIn(datos_obj);
        //const {data} = await LOGIN_DEFAULT.post<IUserToken>('/',datos_obj);
        //setLocalStorageStatusObject( {value:data.user},'usuario')
        //Cookies.set('token', data.token+"");
        //Cookies.set('email', data.user?.email+"");
        //data ? window.location.href = '/' : '';
    } catch (error:any) {
      setError(error?.message)
    }
}

  return (
    <LayoutPrincipal title='Sesion'>
        <div className='col-12 col-md-6 col-lg-4 col-xl-3 mx-auto pop-up'>
          {loginStatus ? 
          <>
            <h1>Login</h1>
            <div className='p-4 b-shadow text-center form'>
                <p>Actualmente logueado: {usuario.name} ({usuario.tipo})
                  <br/>
                  <br/>
                  Mail: {usuario.email}
                </p>
                <div className='d-flex justify-content-center'>
                  <Image src={usuario.image} alt="me" width="64" height="64" onError={()=>"/svg/icon.svg"}/>
                </div>
                <div>
                  <button className='btn p-2 bg-red-3 m-2' onClick={logOut}>Salir</button>
                </div>
                <small>¿Problemas para loguear? Envianos un mail: <a href="mailto:soporte@horabondi.com">soporte@horabondi.com</a></small><br/><br/>
            </div> 
          </> : 
          <>
            <h1>Login</h1>
            <div className='p-4 b-shadow text-center form'>
                <p>Ingresa o Registrate con: </p>
                <div>
                  <button className='btn p-2 bg-red-1 m-2' disabled><s>Google</s></button>
                  <button className='btn p-2 bg-blue-1 m-2' disabled><s>Facebook</s></button>
                </div>
                <small>¿Problemas para ingresar o registrarte? Envianos un mail: <a href="mailto:cristiangramajo015@gmail.com">cristiangramajo015@gmail.com</a></small><br/><br/>
                <hr/>                        
                <p>Inicio de sesión por defecto:</p>
                {error ? <div className='bg-red-0 d-flex justify-content-between p-1 br-0'>
                      <div>{error.message}</div>
                      <button className='bg-red-1 p-1' onClick={()=>setError(false)}><b className='text-grey-8'>&nbsp;×&nbsp;</b></button>
                    </div> : <></>}
                <form className='row text-start' onSubmit={(e)=>{submitHandler(e)}}>
                    <label htmlFor='email' className='d-flex justify-content-center'>Email: </label>
                    <input type="email" name="email" id="email" className='bb-1 p-2 mb-4 br-0'/>
                    <label htmlFor='contra' className='d-flex justify-content-center'>Contraseña: </label>
                    <input type="password" name="contra" id="contra" className='bb-1 p-2 mb-4 br-0'/>
                    <button type='submit' className='col text-center btn p-2 bg-blue-3 m-2'>Ingresar</button>
                </form>
            </div> 
          </>}
                         
            </div>
    </LayoutPrincipal>
  )
}

export default Login
