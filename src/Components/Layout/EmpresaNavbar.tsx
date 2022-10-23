import { useRouter } from 'next/router'
import React from 'react'
import { ActiveLink } from '../UI'

interface IEmpresaNavbar {
    bg_color?:string,
    active_color?:string
}

export const EmpresaNavbar = ({bg_color = '--cyan-8', active_color}:IEmpresaNavbar) => {
    const router = useRouter();//pl-0 d-flex justify-content-around
    return (
      <nav id='empresa-navbar' className='h-scroll-style' style={{backgroundColor:`var(${bg_color})`}}>
          <ul className='pl-0 d-flex justify-content-center align-content-center'>
            <li><ActiveLink alias='Información' anchor={`/empresas/${router.query.empresa}/informacion`}></ActiveLink></li>
            <li><ActiveLink alias='Publicaciones' anchor={`/empresas/${router.query.empresa}/publicaciones`}></ActiveLink></li>
            <li><ActiveLink alias='Horarios' anchor={`/empresas/${router.query.empresa}/horarios`}></ActiveLink></li>
            <li><ActiveLink alias='Precios' anchor={`/empresas/${router.query.empresa}/precios`}></ActiveLink></li>
            <li><ActiveLink alias='Impresion' anchor={`/empresas/${router.query.empresa}/impresion`}></ActiveLink></li>
          </ul>
      </nav>
    )
}
