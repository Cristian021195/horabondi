import React, {useEffect, useState, FormEvent, useCallback} from 'react';
import { listarRutas, crearNombrePrecio, listarCiudadesPrecios } from '../../Helpers';
import { Loader, Toast } from '../Others';
//import { Loader, ResultadoPrecio, Toast } from './';
import { REGEX, ciudades_precios } from '../../Utils';
import { IDataHorario, ILocalStorageData, IDataPrecio,  IResultadoPrecio, ILlaveResponse, ILlaveToLocal} from '../../Interfaces';
import { PRECIOS, LLAVES, UPDATES} from '../../Api';
import axios from 'axios';
import { ResultadoPrecio } from '../UI';
import {useViajeData} from "../../Hooks"


export const PreciosForm = ({route}:any) => { //console.log("Renderiza formulario")
  const {empresa,rutas,opciones,ruta,dataForm,minimize,keys,vigencia,setEmpresa,setRutas,setRuta,setOpciones,setDataForm,setMinimize,setKeys,setVigencia} = useViajeData(route.toString());
  const [resultadoPrecio, setResultadoPrecio] = useState<IResultadoPrecio>({origen:'',destino:'',precio:0});
  const [datosPrecio, setDatosPrecio] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");
  const [error, setError] = useState<string | unknown>("");
  
  
  function submitHandler(e:FormEvent<HTMLFormElement>, opciones: string[], empresa:string, ruta:string){
    e.preventDefault();
    
    let datos = new FormData(e.currentTarget);
    let origen:string = datos.get('origen')?.toString()!;
    let destino:string = datos.get('destino')?.toString()!;
    //let dias:string = datos.get('dias')?.toString()!;
    //let nombre_precio:string = crearNombrePrecio(empresa, ruta);
    if(origen === destino) {
      setResultadoPrecio({origen, destino, precio: 0})
    }else{
      let obj_price_arr = datosPrecio?.precios?.filter((a:any,ai:number)=>a.id === origen);
      if(Array.isArray(obj_price_arr)){
        let obj_price = obj_price_arr[0];
        setResultadoPrecio({ origen, destino, precio: obj_price[destino]})
      }else{
        setResultadoPrecio({ origen, destino, precio: 0})
      }
    }
  }

  const localStorageRequest = useCallback(async()=>{
    setLoading(true)
    if(empresa !== null){
      const cancelToken = axios.CancelToken.source();
      try {
        let {data} = await UPDATES.post("/",{
          empresa:empresa,
          precios:true,
          horarios:false,
          archivos: JSON.parse(localStorage.getItem(`${empresa}-precios-keys`) || "[]" )
        })
        if(data.outdated.length > 0){
          let res = await PRECIOS.get("/"+empresa, {cancelToken: cancelToken.token})
          let data = res?.data;
          if(data.length > 0){
            data.forEach((dta:IDataPrecio, dta_i:number)=>{//data validity aqui
              //localStorage.setItem(dta.data_file+"-vigencia", JSON.stringify(dta.data_validity))
              localStorage.setItem(dta.data_file, JSON.stringify({precios: dta.data_body, data_validity: dta.data_validity}))
            })
            let llaves_res = await LLAVES.post("/"+empresa, {precios:true, horarios:false}, {cancelToken: cancelToken.token})
            let llaves_data: ILlaveResponse[] = llaves_res?.data?.llaves;
            let llave_arr:ILlaveToLocal = {empresa:empresa, llaves:[]};
            
            llaves_data.forEach((kd: ILlaveResponse, kd_i:number)=>{
              llave_arr.llaves.push({archivo: kd.data_file, llave: kd.llave})
            })
            localStorage.setItem(llave_arr.empresa+"-precios-keys", JSON.stringify(llave_arr.llaves))
            setDatosPrecio(JSON.parse(localStorage.getItem(`${empresa}-${ruta}-precio`) || "null"));
          }
          
        }else{
          setToastMessage('¡El listado de precios esta actualizado!')
        }
      
      } catch (err) {
        setLoading(false); setError(err); cancelToken.cancel()
      } finally {
        setLoading(false);
        setVigencia(localStorage.getItem(`${empresa}-${ruta}-precio-vigencia`) || "")
      }
    }
  },[empresa, ruta, setVigencia])

  useEffect(()=>{
    setRutas(listarRutas(route))
    setRuta(listarRutas(route)[0])
    setEmpresa(route.match(REGEX.EMPRESAS))
  },[route, setRutas, setRuta, setEmpresa])

  useEffect(()=>{
    setOpciones(listarCiudadesPrecios(ruta, route, ciudades_precios));
    setDatosPrecio(JSON.parse(localStorage.getItem(`${empresa}-${ruta}-precio`) || "null"));
  },[ruta, setOpciones, setDatosPrecio, empresa, route])

  useEffect(()=>{
    setKeys(JSON.parse(localStorage.getItem(`${empresa}-precios-keys`) || "[]" ))
    localStorageRequest()
  },[empresa, localStorageRequest, setKeys])  

  return (//{error !== "" ? <Toast color='var(--red-3)' clipboard={error?.toString()}><p>{error?.toString()}</p></Toast> : <></>}
    <>
    <form className='p-4 empresa-form' onSubmit={(e)=>submitHandler(e, opciones, empresa, ruta)}>
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
        <label className='col-12 col-md-6 p-2 text-center' htmlFor="ruta">Ruta: 
        <select name="ruta" id="ruta" className='s-shadow ml-3' defaultValue="ruta" onChange={(e)=>{setRuta(e.target.value)}}>
          {rutas.map((r,r_i)=>{
            return <option key={r_i} value={r}>{r}</option>
          })}              
        </select>
        </label>
        <label className='col-12 col-md-6 p-2 text-center' htmlFor="origen">Origen: 
        <select name="origen" id="origen" className='s-shadow ml-3' defaultValue="origen">
          <optgroup>
            {opciones.map((op, op_i)=>{
              return <option key={op_i} value={op}>{op}</option>
            })}
          </optgroup>
        </select>
        </label>
        <label className='col-12 col-md-6 p-2 text-center' htmlFor="destino">Destino: 
        <select name="destino" id="destino" className='s-shadow ml-3' defaultValue="destino">
          <optgroup>
            {opciones.map((op, op_i)=>{
              return <option key={op_i} value={op}>{op}</option>
            })}
          </optgroup>
        </select>
        </label>
      </div>
      <div className='d-flex justify-content-center'>
        <button type='button' className='btn mt-4 p-2 mx-auto' disabled={loading} onClick={()=>{
            localStorageRequest()
          }} style={{backgroundColor:'var(--yellow-8)'}}>{loading ? 'Actualizar' : 'Actualizado ✓'}</button>
        <button type='submit' className='btn mt-4 p-2 mx-auto bg-teal-3'>Buscar</button>
        <button type='button' className={minimize ? 'btn mt-4 p-2 mx-auto rotate-right' : 'btn mt-4 p-2 mx-auto rotate-left'} onClick={()=>setMinimize(!minimize)} style={{backgroundColor:'var(--yellow-8)'}}>&nbsp;▲&nbsp;</button>
      </div>
      <div className='d-flex justify-content-center mt-4'>
          {resultadoPrecio?.precio !== 0 ? <b>Vigencia: {datosPrecio?.data_validity}</b> : <></>}
      </div>
    </form>
    <section className='scroll-all vh-80 p-relative z-i-0'>
      <article className='mx-auto text-center'>
        <ResultadoPrecio origen={resultadoPrecio?.origen || ''} destino={resultadoPrecio?.destino || ''} precio={resultadoPrecio.precio}/>
      </article>
    </section>
    </>
  )
}