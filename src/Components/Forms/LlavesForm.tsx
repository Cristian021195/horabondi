import React, { FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { GENERADOR_LLAVES } from '../../Api';

export const LlavesForm = () => {
    const [llave, setLlave] = useState(uuidv4());
    const [error, setError] = useState<any>(false);
    async function submitHandler(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
        let datos = new FormData(e.currentTarget);
        let arr_obj = Object.fromEntries(datos);
        try {
            let resp = await GENERADOR_LLAVES.post('',arr_obj);
            console.log(resp.data)
        } catch (error) {
            setError(error)
        }
    }
  return (
    <form className='row mt-4' onSubmit={(e)=>submitHandler(e)}>
    <div className='col-md-6'>
        <label htmlFor='uc_email' className='m-2 mx-auto'>Llave: 
        <input type="llave" name="llave" required readOnly className='br-0 w-90 m-2 p-1 bg-blue-0' value={llave}/>
        </label> 
        <div className='text-center'>
        <button className='btn p-1 bg-red-2 m-2' type='button' onClick={()=>{setLlave(uuidv4())}}>Generar Llave</button>
        </div>
    </div>
    <div className='col-md-6 d-flex justify-content-center'>
        <select name='llaves' id='llaves' required className='s-shadow w-100 mt-4'>
            <option value='todas'>Todas</option>
            <option value='775208da-090e-4fdf-9840-beea59295849'>exprebus-38-sabados-ns-key</option>
        </select>
    </div>
    <div className='text-center'>
        {error ?
            <div className='bg-red-0 mt-4 br-0 d-flex justify-content-between p-2 text-grey-7'>
                {error?.message}
                <button className='btn bg-red-1' onClick={()=>setError(false)}><b>&nbsp;×&nbsp;</b></button>
            </div>
         : <></>}
        <button type="submit" className='btn w-20 p-2 mt-4 bg-blue-3 text-center'>Cambiar</button>
    </div>
    </form>
  )
}
