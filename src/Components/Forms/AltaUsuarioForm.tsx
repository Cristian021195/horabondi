import React, { FormEvent, useState } from 'react'
import { ALTA_USUARIO } from '../../Api';

export const AltaUsuarioForm = () => {
    const [tipo, setTipo] = useState<string>("administrador")

    async function submitHandler(e:FormEvent<HTMLFormElement>){
        e.preventDefault()
        const datos = new FormData(e.currentTarget);
        const datos_obj = Object.fromEntries(datos.entries());

        try {
            let data = await ALTA_USUARIO.post('', datos_obj)
            console.log(data.data)
        } catch (error) {
            console.log("ERROR:", error)
        }
        
        //console.log(data)

        console.log(Object.fromEntries(datos.entries()));

    }

  return (
    <form className='row mt-4' onSubmit={(e)=>submitHandler(e)}>
        <label htmlFor='uc_name' className='m-2 mx-auto'>Nombre y Apellido: 
            <input type="text" name="name" id="uc_name" required className='bb-1 w-100'/>
        </label>
        <label htmlFor='uc_email' className='m-2 mx-auto'>Mail: 
            <input type="email" name="email" id="uc_email" required className='bb-1 w-100'/>
        </label>
        <label htmlFor='contra' className='m-2 mx-auto'>Contraseña: 
            <input type="password" name="contra" id="contra" required className='bb-1 w-100'/>
        </label>
        <label htmlFor='uc_telefono' className='m-2 mx-auto'>Telefono: 
            <input type="tel" id="uc_telefono" name="telefono" pattern="[0-9]{8,11}" placeholder='3865332311' className='bb-1 w-100'/>
        </label>
        <label htmlFor='uc_dni' className='m-2 mx-auto'>Dni: 
            <input type="text" name="dni" id="uc_dni" required className='bb-1 w-100'/>
        </label>
        <label htmlFor='tipo' className='m-2 mx-auto'>Tipo: 
            <select name='tipo' id='tipo' required className='s-shadow w-100' onChange={(e)=>{
                setTipo(e.target.value)
            }}>
                <option value='usuario'>usuario</option>
                <option value='empresa'>empresa</option>
            </select>
        </label>
        {tipo === 'empresa' && 
            <label htmlFor='aue_empresa' className='m-2 mx-auto'>Empresa: 
                <select name='empresa' id='aue_empresa' required className='s-shadow w-100'>
                    <option value='exprebus'>Exprebus</option>
                    <option value='tesa'>Tesa</option>
                    <option value='gutierrez'>Gutierrez</option>
                </select>
            </label>
        }
        <label htmlFor='uc_image' className='m-2 mx-auto'>Foto: </label>
        <input type="file" name="image" id="uc_image" accept='image/jpg, image/jpeg' multiple={false} className='dashed p-3 w-100'/>
        
        <button type="submit" className='btn p-2 mt-4 bg-blue-2 text-center'>Crear</button>
    </form>
  )
}
