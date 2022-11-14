import React, {useEffect, useState, FormEvent, useCallback} from 'react';
import axios from 'axios';

import { obtenerSentidoDefault, listarRutas, listarCiudades, crearNombreHorario } from '../../Helpers';
import { DynamicTable, Toast, Loader} from '../Others';
import {InputTime} from "../Input"
import { REGEX, ciudades_horarios, createLocalStorage, getLocalStorage } from '../../Utils';
import {IDataHorario, IHorariosStorageData, ILlaveResponse, ILlaveToLocal } from '../../Interfaces';
import { UPDATES, HORARIOS, LLAVES } from '../../Api';
import {useViajeData} from "../../Hooks"
import {now} from 'moment';
//import { useQuery } from 'react-query';
import { obtenerDiasHabiles } from '../../Helpers/obtenerHabiles';



export const HorarioForm = ({route}:any) => {// console.log("Renderiza formulario")
  /**/
  //const {isLoading, data, isError, error, isFetching} = useQuery('updates', fetchUpdates, {staleTime:60000});
  const {empresa,rutas,opciones,ruta,dataForm,minimize,keys,vigencia,setEmpresa,setRutas,setRuta,setOpciones,setDataForm,setMinimize,setKeys,setVigencia} = useViajeData(route.toString());
  const [sentidoDefault, setSentidoDefault] = useState<object>({ns: 'Norte - Sur', sn: 'Sur - Norte'});
  const [error, setError] = useState<string | unknown>("");    
  const [datosHorario, setDatosHorario] = useState<IDataHorario>({data_header:[""], data_body:[[]], data_validity:''})
  const [loading, setLoading] = useState<boolean>(false)
  const [toastMessage, setToastMessage] = useState<string>("");
  const [last, setLast] = useState<any>({origen:'', destino:''})

  const localStorageRequest = useCallback(
    async()=>{
      setLoading(true)
      if(empresa !== null){
        const cancelToken = axios.CancelToken.source();
        try {
          let {data} = await UPDATES.post("/",{
            empresa:empresa,
            precios:false,
            horarios:true,
            archivos: JSON.parse(localStorage.getItem(`${empresa}-horarios-keys`) || "[]" )
          })
          if(data.outdated.length > 0){
            let res = await HORARIOS.get("/"+empresa, {cancelToken: cancelToken.token})
            let data = res?.data;
            if(data.length > 0){
              data.forEach((dta:IHorariosStorageData, dta_i:number)=>{
                localStorage.setItem(dta.data_file, JSON.stringify({data_header: dta.data_header, data_body: dta.data_body, data_validity: dta.data_validity}))
              })
              
              let llaves_res = await LLAVES.post("/"+empresa, {precios:false, horarios:true, empresa:empresa}, {cancelToken: cancelToken.token})
              let llaves_data: ILlaveResponse[] = llaves_res?.data?.llaves;
              let llave_arr:ILlaveToLocal = {empresa:empresa, llaves:[]};
              
              llaves_data.forEach((kd: ILlaveResponse, kd_i:number)=>{
                llave_arr.llaves.push({archivo: kd.data_file, llave: kd.llave})
              })
              localStorage.setItem(llave_arr.empresa+"-horarios-keys", JSON.stringify(llave_arr.llaves))
              //setDatosHorario(JSON.parse(localStorage.getItem(`${empresa}-${ruta}-${habila}`) || "null"));
            }
            
          }else{
            setToastMessage('¡El listado de horarios esta actualizado!');
          }
        }catch(err){
          console.log(err)
        }finally{
          setLoading(false)
        }
      }
    },
    [empresa],
  );

  function submitHandler(e:FormEvent<HTMLFormElement>, opciones: string[], sentidoDefault:object, empresa:string, ruta:string){
    e.preventDefault();
    
    let datos = new FormData(e.currentTarget);
    let origen:string = datos.get('origen')?.toString()!;
    let destino:string = datos.get('destino')?.toString()!;
    let tipo:string = datos.get('tipo')?.toString()!;
    let dias:string = datos.get('dias')?.toString()!;
    let hora:string = datos.get('hora')?.toString()!;
    let sentido:string[] = crearNombreHorario(empresa[0], ruta, dias, opciones, sentidoDefault, origen, destino);
    let sentido_string:string | undefined = sentido?.at(-1)
    
    setDataForm({hora:hora+":00", origen, destino, tipo, sentido_string})
    createLocalStorage('last-'+empresa, last, true);
    try {      
      setDatosHorario(JSON.parse(localStorage.getItem(sentido.join('-')) || "null"));
      setLast({origen, destino});
    } catch (err) {
      setError(err);
    }
  }

  useEffect(()=>{
    setRutas(listarRutas(route))
    setRuta(listarRutas(route)[0])
    setEmpresa(route.match(REGEX.EMPRESAS))
  },[route, setRutas, setRuta, setEmpresa])

  useEffect(()=>{
    setOpciones(listarCiudades(ruta, route, ciudades_horarios));
    setSentidoDefault(obtenerSentidoDefault(ruta, route))
  },[ruta, setOpciones, setSentidoDefault, route])

  useEffect(()=>{
    localStorageRequest()
    setKeys(JSON.parse(localStorage.getItem(`${empresa}-horarios-keys`) || "[]" ))
    setLast(getLocalStorage('last-'+empresa, true, {origen:'', destino:''}))
    
  },[empresa, localStorageRequest, setKeys])

  /*useEffect(()=>{
    empresa && createLocalStorage('last-'+empresa, last, true);
  },[last, empresa])*/

  return (
    <>
    <form className='p-4 empresa-form' onSubmit={(e)=>submitHandler(e, opciones, sentidoDefault, empresa, ruta)}>
      {loading ? 
        <Toast color='var(--orange-2)'>
          <Loader color='#ffffff' size={42}/>
          <h5>Actualizando datos, espere..</h5>
        </Toast> :
        <></>
      }
      {toastMessage.length > 0 ?
        <Toast color='var(--green-2)'>
          <h5>{toastMessage}</h5>
        </Toast> : <></>
      }
      
      <div className={minimize ? 'row d-none' : 'row d-flex'}>
        <label className='col-6 text-center p-2' htmlFor="dias">Dias:
        <select name="dias" id="dias" className='s-shadow' defaultValue={obtenerDiasHabiles()}>
          <option value="habiles">Habiles</option>
          <option value="sabados">Sabados</option>
          <option value="domingos">Domingos y Feriados</option>
        </select>
        </label>
        <label className='col-6 p-2 text-center' htmlFor="ruta">Ruta: 
        <select name="ruta" id="ruta" className='s-shadow' defaultValue="ruta" onChange={(e)=>{setRuta(e.target.value)}}>
          {rutas.map((r,r_i)=>{
            return <option key={r_i} value={r}>{r}</option>
          })}              
        </select>
        </label>
        <label className='col-6 p-2 text-center' htmlFor="origen">Origen: 
        <select name="origen" id="origen" className='s-shadow' value={last?.origen} onChange={(e)=>{setLast({...last, origen:e.target.value})}}>
          <optgroup>
            <option value={Object.keys(sentidoDefault)[0]}>{Object.values(sentidoDefault)[0]}</option>
            <option value={Object.keys(sentidoDefault)[1]}>{Object.values(sentidoDefault)[1]}</option>
          </optgroup>
          <optgroup>
            {opciones.map((op, op_i)=>{
              return <option key={op_i} value={op}>{op}</option>
            })}
          </optgroup>
        </select>
        </label>
        <label className='col-6 p-2 text-center' htmlFor="destino">Destino: 
        <select name="destino" id="destino" className='s-shadow' value={last?.destino} onChange={(e)=>{setLast({...last, destino:e.target.value})}}>
          <optgroup>
            {opciones.map((op, op_i)=>{
              return <option key={op_i} value={op}>{op}</option>
            })}
          </optgroup>
        </select>
        </label>
        <label className='col-6 p-2 text-center' htmlFor="tipo">Tipo: 
        <select name="tipo" id="tipo" defaultValue="tipo" className='s-shadow'>
          <option value='todos'>Todos</option>
          <option value='comun'>Común</option>
          <option value='expreso'>Expreso (Semi Rápido)</option>
        </select>
        </label>
        <label className='col-6 p-2 text-center' htmlFor="hora">Hora:&nbsp; 
          <InputTime/>
        </label>
        <input type="hidden" name="empresa" value={empresa || ""}/>
        
      </div>
      <div className='d-flex justify-content-center'>
        <button type='button' className='btn mt-4 p-2 mx-auto' disabled={loading} onClick={()=>{
            localStorageRequest()
          }} style={{backgroundColor:'var(--yellow-8)'}}>{loading ? 'Actualizar' : 'Actualizado ✓'}</button>
        <button type='submit' className='btn mt-4 p-2 mx-auto bg-teal-3'>Buscar</button>
        <button type='button' className={minimize ? 'btn mt-4 p-2 mx-auto rotate-right' : 'btn mt-4 p-2 mx-auto rotate-left'} 
          onClick={()=>setMinimize(!minimize)} style={{backgroundColor:'var(--yellow-8)'}}>&nbsp;▲&nbsp;</button>
      </div>
      <div className='d-flex justify-content-center mt-4'>
        {datosHorario?.data_validity ? <b>Vigencia: {datosHorario.data_validity}</b> : <></>}
      </div>      
    </form>
    <div className='scroll-all vh-40'>
      {
        Object.keys(dataForm).length === 0 ?
         <></> :
         <DynamicTable datosHorario={datosHorario} dataForm={dataForm} styleClass={['stripped', 'tb_hover', 'sticky-header', 'z-i-0', 'w-100', 'pop-up']}></DynamicTable>
      }
    </div>
    </>
  )
}