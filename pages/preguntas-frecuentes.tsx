import type { NextPage } from 'next'
import Link from 'next/link';
import { useState } from 'react';
import { Acordeon } from '../src/Components/Others';
import { LayoutPrincipal } from '../src/Layouts';
import { ISSERVER, compartir } from '../src/Utils';


const PreguntasFrecuentes: NextPage = () => {
  return (
    <LayoutPrincipal title='Preguntas Frecuentes'>
        <div className='col-12 col-md-6 col-lg-5 mx-auto pop-up'>
          <h1>Preguntas Frecuentes</h1>
          <br />
          <section>
            <Acordeon title='¿Qué es HoraBondi?'>
              <p>Es una aplicación web para tener a mano los horarios, precios y publicaciones de las empresas más comunes de colectivos.</p>
            </Acordeon>
            <Acordeon title='¿Necesito tener datos móviles para usarla?'>
              <p>Para las funciones básicas no, pero si querés recibir notificaciones y estar actualizado de seguro.</p>
            </Acordeon>
            <Acordeon title='¿Cómo se usa?'>
              <p>Basta con ingresar a la página, pero para tener una mejor experiencia recomendamos que la instales desde el botón en el pie de pagina, o desde las opciones de tu navegador</p>
            </Acordeon>
            <Acordeon title='¿Para quienes está dirigido el uso de la aplicación?'>
              <p>Cualquier persona (de cualquier edad) que requiera las funciones básicas, y si contratará servicios extras ser mayor de 18 años. </p>
            </Acordeon>
            <Acordeon title='¿Tiene algún costo su uso?'>
              <p>No, es una aplicación totalmente gratuita, pero si querés colaborar podes ir a la sección de <Link href='/donaciones'><a className='text-underline text-blue-6'>Donaciones</a></Link>&nbsp; </p>
            </Acordeon>
            <Acordeon title='¿Tienen algún medio de contacto?'>
              <p>Si, en la sección de <Link href='/contacto'><a className='text-underline text-blue-6'>Contacto</a></Link>&nbsp; hay diversas formas de comunicarte según tu consulta.</p>
            </Acordeon>
            <Acordeon title='¿Se puede publicar contenido?'>
              <p>No, en principio y por ahora es solo para consumir información.</p>
            </Acordeon>
            <Acordeon title='¿A que viene la app que estoy usando?'>
              <p>Tenemos toda una explicación del &quot;porque&quot; de esta App. Si tenes tiempo informate aqui: <Link href='/explicacion'><a className='text-underline text-blue-6'>Explicacion</a></Link></p>
            </Acordeon>
          </section>
        </div>
    </LayoutPrincipal>
  )
}

export default PreguntasFrecuentes