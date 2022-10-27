import React from 'react'

export const AltaEmpresaForm = () => {
  return (
    <form className='row'>
        <label htmlFor='ae_name' className='m-2 mx-auto'>Nombre: 
            <input type="text" name="name" id="ae_name" required className='bb-1 w-100'/>
        </label>
        <label htmlFor='ae_email' className='m-2 mx-auto'>Mail: 
            <input type="email" name="email" id="ae_email" required className='bb-1 w-100'/>
        </label>
        <label htmlFor='ae_telefono' className='m-2 mx-auto'>Telefono: 
            <input type="tel" name="telefono" id="ae_telefono" pattern="[0-9]{8,11}" placeholder='3865332311' className='bb-1 w-100'/>
        </label>
        <label htmlFor='ae_dni' className='m-2 mx-auto'>Dni: 
            <input type="text" name="dni" id="ae_dni" required className='bb-1 w-100'/>
        </label>
        <label htmlFor='ae_image' className='m-2 mx-auto'>Logo: </label>
        <input type="file" name="image" id="ae_image" accept='image/jpg, image/jpeg, image/png' className='dashed p-3 w-100' multiple={false}/>
        <button type="submit" className='btn p-2 bg-blue-3 mt-4 text-center'>Crear</button>
    </form>
  )
}
