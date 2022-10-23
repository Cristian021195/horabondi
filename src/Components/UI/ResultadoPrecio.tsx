import Image from 'next/image'
import React from 'react'
import { IResultadoPrecio } from '../../Interfaces'
import { OrigenDestinoBarInfo } from './'

export const ResultadoPrecio = ({origen, destino, precio}:IResultadoPrecio) => {    
  return (
    <article className="col col-md-6 mx-auto m-4 pl-1 pr-1 sky-bg pop-up">
        <div>
            {origen === destino ? <div className='p-1 pop-up' style={{backgroundColor:'rgba(0,0,0,0.1)', borderRadius:'1em'}}>
                <h2>¡Sin datos!</h2>
                <ul className='list-square'>
                  <li><i> No pueden ser lo mismo origen y destino</i></li>
                  <li><i> Tener actualizado los horarios</i></li>            
                  <li><i> No está definido aun el precio de su viaje</i></li>
                </ul>
            </div> :
             <OrigenDestinoBarInfo origen={origen} destino={destino} precio={parseInt(precio+"")} />}
            <div className="d-flex justify-content-between" style={{borderBottom:'1em solid var(--grey-7)'}}>
                <picture className="origen z-i-1">
                    <Image src='/svg/origen.svg' alt='Parada colectivos SVG' width="100%" height="100%" layout='responsive'/>
                </picture>
                <picture className={ origen === destino ? "bottom-bus shake z-i-1" : "bottom-bus horizontal-movement z-i-1"}>
                    <div style={{width:'100%', position:'absolute', bottom:'0px'}}>
                        <Image src='/svg/busa.svg' alt='Parada colectivos SVG' width="10em" height="6em" layout='responsive' priority={true}/>
                    </div>
                </picture>
                <picture className="destino z-i-1">
                    <Image src='/svg/origen.svg' alt='Parada colectivos SVG' width="100%" height="100%" layout='responsive'/>
                </picture>
            </div>
        </div>
    </article>
  )
}

/*
<OrigenDestinoBarInfo origen="" destino="" precio={0} >
                
            </OrigenDestinoBarInfo>
*/
