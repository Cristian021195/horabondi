import React, { FormEvent, useState } from 'react'
import { PUBLICACIONES } from '../../Api';
import { IPublicacion } from '../../Interfaces';
import {selectInputEmpresas} from '../../Utils'


export const CrudPublicaciones = () => {
    const [publicaciones, setPublicaciones] = useState<IPublicacion[]>([])
    const [publicacion, setPublicacion] = useState<IPublicacion | undefined>({ id:0, imagen:"",publicacion:"",titulo:"", empresa:"",fecha:"" })
    async function submitFilter(e:FormEvent<HTMLFormElement>){
        e.preventDefault();

        const datos = new FormData(e.currentTarget);
        try {
            let {data} = await PUBLICACIONES.post('/filtrar', Object.fromEntries(datos.entries()))
            setPublicaciones(data.publicaciones)
        } catch (error) {
            console.log(error)
            alert('hubo error')
            setPublicaciones([])
        }
    }
    async function submitEdit(e:FormEvent<HTMLFormElement>){
        e.preventDefault();

        const datos = new FormData(e.currentTarget);

        try {
            //console.log(Object.fromEntries(datos.entries()))
            let {data} = await PUBLICACIONES.post('/editar', Object.fromEntries(datos.entries()))            
            let arr:IPublicacion[] = publicaciones.map((ex:IPublicacion, ex_i:number)=>{
                if(ex.id == publicacion?.id){
                    return publicacion;
                }
                return ex
            })
            setPublicaciones(arr);
            e.currentTarget.reset()
        } catch (error) {
            console.log(error)
            alert('hubo error')
            //setPublicaciones([])
        }
    }
    async function submitDelete(id:number){
        try {
            let {data} = await PUBLICACIONES.post('/eliminar', {id})
            setPublicaciones(publicaciones?.filter((p:IPublicacion, p_i:number)=> p.id != id ))
        } catch (error) {
            console.log(error)
            alert('hubo error')
            setPublicaciones([])
        }
    }
  return (
    <div className='row'>
        <form className='col-12 col-md-4 p-4' onSubmit={(e)=>submitEdit(e)}>
            <label htmlFor='p_titulo' className='m-2 mx-auto'>Titulo: 
                <input type="text" name="titulo" id="p_titulo" required className='bb-1 w-100' defaultValue={publicacion?.titulo}/>
            </label>
            <label htmlFor='p_empresa' className='m-2 mx-auto'>Empresa: 
                <select name='empresa' id='p_empresa' required className='s-shadow w-100' defaultValue={publicacion?.empresa}>
                    {selectInputEmpresas.map((sie, sie_i)=>{
                        if(publicacion?.empresa === sie.empresa){
                            return (<option key={sie_i} selected value={sie.empresa}>{sie.alias}</option>)
                        }else{
                            return (<option key={sie_i}  value={sie.empresa}>{sie.alias}</option>)
                        }
                        
                    })}
                </select>
            </label>
            <br/><label htmlFor='p_publicacion' className='m-2 mx-auto'>Publicación: </label>
            <textarea name="publicacion" id="p_publicacion" style={{backgroundColor:'var(--lblue-0)'}} className='w-100 vh-10' defaultValue={publicacion?.publicacion}></textarea>
            <label htmlFor='p_image' className='m-2 mx-auto'>Imagen: </label>            
            <input type="file" name="image" id="p_image" accept='image/jpg, image/jpeg, image/png' className='dashed p-3 w-90' multiple={false}/>
            <input type="hidden" name="fecha" id='p_fecha' defaultValue={publicacion?.id}/>
            <input type="hidden" name="id" id='p_id' defaultValue={publicacion?.id}/>
            <div className='text-center'>
                <button type="submit" className='btn p-2 blue-0 mt-4'>Guardar</button>
            </div>
        </form>
        <div className='col-md-8 p-4'>
            <form className='p-3 d-flex justify-content-between align-items-center' onSubmit={(e)=>submitFilter(e)} style={{backgroundColor:'var(--cyan-0)'}}>
                <label htmlFor='f_empresa' className='m-2 mx-auto'>Empresa: 
                    <select name='empresa' id='f_empresa' required className='s-shadow w-100'>
                        <option value='oficial'>Oficial</option>
                        <option value='exprebus'>Exprebus</option>
                        <option value='tesa'>Tesa</option>
                        <option value='gutierrez'>Gutierrez</option>
                    </select>
                </label>
                <label htmlFor='desde' className='m-2 mx-auto'>Desde: 
                    <input type='date' name='desde' id='desde' required></input>
                </label>
                <label htmlFor='hasta' className='m-2 mx-auto'>Hasta: 
                    <input type='date' name='hasta' id='hasta' required></input>
                </label>
                <button type='submit' className='btn p-2 bg-blue-2'>Buscar</button>
            </form>
            <div className='scroll-all'>
                <table className='mx-auto stripped sticky-header z-i-0 w-100 pop-up'>
                    <thead>
                        <tr>
                            <th>IMAGEN</th>
                            <th>TITULO</th>
                            <th>PUBLICACION</th>
                            <th>EMPRESA</th>
                            <th>FECHA</th>
                            <th>ACCIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {publicaciones?.map((p:IPublicacion, p_i:number)=>{
                            return (
                                <tr key={p_i}>
                                    <td>{p.imagen}</td>
                                    <td>{p.titulo}</td>
                                    <td>{p.publicacion}</td>
                                    <td>{p.empresa}</td>
                                    <td>{p.fecha}</td>
                                    <td>
                                        <button className='btn p-1 bg-red-2 m-1' onClick={()=>{
                                            if(window.confirm('¿Eliminar publicación?')){submitDelete(p.id)}                                            
                                        }}>Eliminar</button>
                                        <button className='btn p-1 bg-blue-2 m-1' onClick={()=>{
                                            setPublicacion(publicaciones?.find((pe:IPublicacion, pe_i:number)=> pe.id === p.id))
                                        }}>Editar</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}