import Image from 'next/image'
import Link from 'next/link'
import React, { FC, useEffect, useState } from 'react'
import { IEmpresaItem } from '../../Interfaces'
import { createLocalStorage, getLocalStorage } from '../../Utils'
import { IOSimpleArray } from '../../Helpers'
interface Props {
  descripcion:string
}
export const EmpresaCard:FC<IEmpresaItem & Props> = ({alias, anchor, precios, img, color, nombre, descripcion}) => {
  const [_favoritos, _setFavoritos] = useState<any[]>()
  useEffect(()=>{
    _setFavoritos(getLocalStorage('favoritos', true, []))
  },[])

  return (
    <div className='col-12 col-xl-2 col-lg-3 col-md-10 p-2 m-4 br-1 card' style={{backgroundColor: `var(${color})`}}>
        <div className='d-flex justify-content-center'>
          <Image src={img} alt="me" width="64" height="64" onError={()=>"/svg/icon.svg"}/>
        </div>
        <div style={{minHeight:'15em'}}>
          <h3>{alias}</h3>
          <p>{descripcion}</p>
        </div>
        <div className='d-flex justify-content-between m-2'>
          <Link href={`empresas/${anchor}`}>
            <a className='btn p-2 bg-blue-5'>
              Ir a Empresa
            </a>
          </Link>
          <button className='pl-2 pr-2 fs1 btn' onClick={(e:React.MouseEvent<HTMLButtonElement>)=>{
            _setFavoritos(IOSimpleArray(nombre, _favoritos as any))
            createLocalStorage('favoritos', IOSimpleArray(nombre, _favoritos as any), true) 
          }}>
            {_favoritos?.some((e:string)=> e == nombre) ? '★' : '☆'} 
          </button>
        </div>
    </div>
  )//★ ☆ {_favoritos?.some((e:string)=> e == nombre) ? '★' : '☆'}
}
