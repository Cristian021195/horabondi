import Link from 'next/link';
import React from 'react'
import { IPublicacion } from '../../Interfaces/IPublicacion';
export const CardPublicacion = ({titulo, publicacion, fecha, id}:IPublicacion) => {
  return (
    <article className='col-md-12 col-lg-3 b-shadow p-2 m-2'>
        <h3>{titulo+""}</h3>
        <p>{publicacion?.toString().slice(0,140)+"..."}</p>
        <div className='d-flex justify-content-evenly align-items-center mt-4'>
            <Link href="/publicaciones/3">
                <a className='btn p-1 bg-red-2'>ver</a>
            </Link>
            <small><i>Fecha: {fecha}</i></small>
        </div>
    </article>  
  )
}
