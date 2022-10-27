import React, { useEffect, useState } from 'react'
import Link from "next/link"

export const Footer = () => {
  const [bip, setBip] = useState<any>(undefined);
  useEffect(()=>{
        window.addEventListener('beforeinstallprompt', (event) => {
            /* el evento es de tipo beforeinstallprompt cuyo prototipo tiene el evento propmt que dispara el navegador install, 
            y tambien un metodo asincrono para ver el estado de la eleccion del usuario luego de disparar el prompt viendo si acepto o declino
            con la respuesta outcome */
            setBip(event)
        });
  },[])
  return (
    <footer className='p-4 bg-cyan-8'>
        <div className='row'>
            <div className='col-12 col-lg-4'>
              <Link href="/terminos"><a style={{color:'whitesmoke', textDecoration:'underline'}}>Términos y condiciones</a></Link>
              &nbsp;&nbsp;
              <Link href="/politica"><a style={{color:'whitesmoke', textDecoration:'underline'}}>Política de privacidad</a></Link>
              &nbsp;&nbsp;
              <Link href="/preguntas-frecuentes"><a style={{color:'whitesmoke', textDecoration:'underline'}}>Preguntas Frecuentes</a></Link>
            </div>
            <div className='col-12 col-lg-4 d-flex justify-content-end'>
            </div>
            <div className='col-12 col-lg-4 mt-2' style={{textAlign:'left'}}>
              <small>{bip !== undefined ? <button
                  onClick={async ()=>{
                      if(bip) bip.prompt();
                      const biip = await bip?.userChoice;
                      if (biip?.outcome){
                          if (biip?.outcome === 'accepted') {setBip(null)}
                      }
                  }}
                className='btn p-1 bg-blue-3'>Instalar</button> : <></> }
                &nbsp;&nbsp;© 2022 Cristian Ismael Gramajo - todos los derechos reservados.
              </small>
            </div>
        </div>
    </footer>
  )
}
