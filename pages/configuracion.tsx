import type { NextPage } from 'next'
import { useGlobalConfig } from '../src/Hooks';
import { LayoutPrincipal } from '../src/Layouts';
import {useTheme} from 'next-themes';
import OneSignal from 'react-onesignal';
/*RECORDAR SETEAR EN PROYECTO VIEJO PHP, O INICIAR OTRO PROYECTO ONESIGNAL Y CONFIGURAR https://horabondis.000webhostapp.com fully ssl 
  tambien la ruta donde estan los workers
  y habilitar la campanita
*/

const Configuracion: NextPage = () => {
  const {tema, fuente, notificaciones, ubicacion, narrador, idle ,setTema, setFuente, setNotificaciones, setUbicacion, setNarrador, setIdle} = useGlobalConfig();
  const { theme, setTheme } = useTheme();
  return (
    <LayoutPrincipal title='Configuración'>
        <div className='col-12 col-md-6 col-lg-5 mx-auto pop-up'>
          <h1>Configuración</h1>
          <form className='b-shadow p-4 bg-white'>
            <label htmlFor='tema' className='d-flex justify-content-between mb-4'>Tema: &nbsp;
              <select name='tema' id='tema' className='s-shadow w-50' onChange={(e)=>{
                  setTema(e.target.value);
                  setTheme(e.target.value);
                }} defaultValue={tema}>
                <option value='light'>Claro</option><option value='dark'>Oscuro</option>
              </select>
            </label>
            <label htmlFor='fuente' className='d-flex justify-content-between mb-4'>Fuente: &nbsp;
              <select name='fuente' id='fuente' className='s-shadow w-50' onChange={(e)=>{setFuente(e.target.value)}} defaultValue={fuente}>
                  <option value='small'>Pequeño</option>
                  <option value='normal'>Normal</option>
                  <option value='large'>Grande</option>
              </select>
            </label>
            <label htmlFor='notificaciones' className='d-flex justify-content-between mb-4'>Notificaciones: &nbsp;
              <select name='notificaciones' id='notificaciones' className='s-shadow w-50' onChange={(e)=>{
                    setNotificaciones(e.target.value);
                    OneSignal.init({ appId: '9f895016-5666-4216-a052-13abc5bb0b18' });
                    OneSignal.showNativePrompt();
                    OneSignal.setSubscription(e.target.value === 'true' ? true : false)
              }} defaultValue={notificaciones}>
                  <option value='true'>Activadas</option><option value='false'>Desctivadas</option>
              </select>
            </label>
            <label htmlFor='location' className='d-flex justify-content-between mb-4'>Ubicacion: &nbsp;
              <select name='location' id='location' className='s-shadow w-50' disabled onChange={(e)=>{setUbicacion({enabled:e.target.value, latitude:'a', longitude:'b'})}} defaultValue={ubicacion}>
                <option value='true'>Permitir</option><option value='false'>No permitir</option>
              </select>
            </label>
            <label htmlFor='narrador' className='d-flex justify-content-between mb-4'>Narrador: &nbsp;
              <select name='narrador' id='narrador' className='s-shadow w-50' disabled onChange={(e)=>{setNarrador(e.target.value)}} defaultValue={narrador}>
                <option value='true'>Activado</option><option value='false'>Desactivado</option>
              </select>
            </label>
            <label htmlFor='idle' className='d-flex justify-content-between mb-4'>Pantalla activa: &nbsp;
              <select name='idle' id='idle' className='s-shadow w-50' disabled onChange={(e)=>{setIdle(e.target.value)}} defaultValue={idle}>
                <option value='true'>Activa</option><option value='false'>Inactiva</option>
              </select>
            </label>
            <br/>
            <br/>
            <small>
                <i>&quot;Las notificaciones deben estar habilitadas por el navegador primero, si se bloquean, borre los datos de navegación y actívelas desde las configuraciones de su navegador.&quot;</i>
            </small>        
          </form>
        </div>
    </LayoutPrincipal>
  )
}//OneSignal.showNativePrompt();

export default Configuracion
