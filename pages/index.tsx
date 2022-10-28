import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AccesoRapido } from '../src/Components/UI'
import { useGlobalConfig } from '../src/Hooks'
import { LayoutPrincipal } from '../src/Layouts'
import { getLocalStorage } from '../src/Utils'

const Home: NextPage = () => {
  const [_favoritos, _setFavoritos] = useState([])
  const {fuente} = useGlobalConfig();
  useEffect(()=>{
    _setFavoritos(getLocalStorage('favoritos', true, []))
  },[])
  
  return (
    <LayoutPrincipal title='Inicio'>
      <div className='col-12 col-md-6 col-lg-5 mx-auto pop-up'>
        <h1>Inicio</h1>
        <br />
        <article>
          {_favoritos?.length > 0 ? <>
            <h2>ACCSESO RAPIDO ★</h2>
            {
              _favoritos?.map((fav:string, fav_i:number)=><AccesoRapido key={fav_i} empresa={fav}/>)
            }
          </>
           : <></>}
        </article>
        <br />
        <h2>SIMPLE, LEGIBLE Y BONITA</h2>
        <p>Horabondi es una aplicación web donde se puede consultar los horarios, precios y ultimas publicaciones de las empresas de colectivos más usadas.</p>
        <br />
        <h2>EFICIENTE Y FUNCIONAL</h2>
        <p>Al ser una aplicación web moderna (PWA), usamos todos los recursos que podemos para que sea instalable, y tenga funcionamiento sin acceso a datos, y a su vez con el menor consumo posible de los mismos.</p>
        <br />
        <h2>FUNCIONALIDADES EXTRAS</h2>
        <p>Si estas registrado, la aplicación te permite estar notificado por la empresa que más uses (si dicha empresa esta en la plataforma), esto para que estes mas al tanto de tus viajes. Además podrás acceder a una sección para imprimir los horarios en caso de que necesites brindarle a alguien que no tiene acceso a la aplicación. </p>
        <div className='d-flex justify-content-center'>
          <Link href='login'>
            <a className='bg-red-3 btn p-2'>
              Iniciar Sesión
            </a>
          </Link>
        </div>
        <h2>¿POR QUE USAR ESTA APLICACIÓN?</h2>
        <p>Si estas interesado en saber porqué deberias de usar HoraBondi, podes entrar en este enlace donde explicamos mas a detalle el porqué surgió la idea y que beneficios como efectos secundarios podemos tener todos.</p>
        <div className='d-flex justify-content-center'>
          <Link href='explicacion'>
            <a className='bg-blue-3 btn p-2'>
              Explicación
            </a>
          </Link>
        </div>
      </div>
    </LayoutPrincipal>
  )
}

export default Home
