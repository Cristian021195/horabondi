import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface IAccesoRapidoProps{
    empresa:string
}
export const AccesoRapido = ({empresa='a'}:IAccesoRapidoProps) => {
  return (
    <div className='d-flex'>
      <div className='mb-3 bg-cyan-8' style={{width:'.25em', borderRadius:'0.25em 0 0 0.25em'}}></div>
      <div className='d-flex justify-content-start p-2 mb-3 bg-grey-2 favorito' style={{borderRadius:'0 0.25em 0.25em 0'}}>
          <Image src={`/svg/${empresa || 'a'}-full.svg`} alt="me" width="64" height="64" onError={()=>"/svg/icon.svg"}/>
          <ul className='d-flex w-100 justify-content-evenly'>
              <Link href={`/empresas/${empresa || 'a'}/horarios`}>
                <a style={{color:'var(--cyan-8)', textDecoration:'underline'}} className='mr-2'>Horario {empresa}</a>
              </Link>
              <Link href={`/empresas/${empresa || 'a'}/precios`}>
                <a style={{color:'var(--cyan-8)', textDecoration:'underline'}} className='mr-2'>Precios {empresa}</a>
              </Link>
          </ul>
      </div>
    </div>
  )
}
/*



*/
