import React, { FormEvent } from 'react'
import { PUBLICACIONES } from '../../Api';

export const PublicacionesForm = () => {
  async function submitHandler(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    let datos = new FormData(e.currentTarget)
    try {
      let {data} = await PUBLICACIONES.post('/crear', Object.fromEntries(datos.entries()));
      if(data){
        alert('ok')
      }
    } catch (error) {
      alert('error')
    }
  }
  return (
    <form className='row' onSubmit={(e)=>submitHandler(e)}>
        <label htmlFor='titulo' className='m-2 mx-auto'>Titulo: 
            <input type="text" name="titulo" id="titulo" required className='bb-1 w-100 fs1'/>
        </label>
        <label htmlFor='publicacion' className='m-2 mx-auto'>Publicación: </label>
        <textarea name="publicacion" id="publicacion" style={{backgroundColor:'var(--lblue-0)'}} className='w-100 vh-10'></textarea>
        <select name='empresa' id='empresa' required className='s-shadow w-100 mx-auto mt-4'>
            <option value='oficial'>Oficial</option>
            <option value='exprebus'>Exprebus</option>
            <option value='tesa'>Tesa</option>
            <option value='gutierrez'>Gutierrez</option>
        </select>
        <button type="submit" className='btn p-2 bg-blue-2 mt-4 text-center'>Crear</button>
    </form>
  )
}
