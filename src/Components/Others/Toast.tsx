import React, {useState} from 'react'
import { IReactComponentChild } from '../../Interfaces/IReact';

interface IToast extends IReactComponentChild{
  color?:string
  initial?:any
  timeout?:number
  clipboard?:string
  close_color?:string
  clipboard_color?:string
}

let classDefault = 'w-100 vh-10 justify-content-center align-items-center p-4 d-flex z-i-9';
export const Toast = ({children, color = 'var(--green-2)', initial = false, timeout = 7000, clipboard = '', clipboard_color = 'var(--grey-6)', close_color = 'var(--red-3)'}:IToast) => {
  const [hide, setHide] = useState(false);

  setTimeout(() => {
    setHide(true)
  }, timeout);
  return (
    <div className={hide ? `${classDefault} out` : `${classDefault} in`}
      style={{position:'absolute', top:0, left:0, backgroundColor: color}}>
        { clipboard !== '' && <button className='btn p-1 mr-2' style={{backgroundColor:clipboard_color}} onClick={(e)=>{
          if(navigator.clipboard !== undefined){
            navigator.clipboard.writeText(clipboard);// requiere contexto seguro
            e.currentTarget.textContent = 'Copiado ✓';
          }          
        }}>Copiar</button> }
        <div className='overflow-y vh-10 d-flex align-items-center h-scroll-style' onClick={()=>setHide(true)}>
          {children}
        </div>
        <button className='btn p-1 ml-2' style={{backgroundColor:close_color}} onClick={()=>{setHide(true)}}><b>&nbsp;×&nbsp;</b></button>
    </div>
  )
}//setHide(true)
