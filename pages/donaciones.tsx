import type { NextPage } from 'next'
import { LayoutPrincipal } from '../src/Layouts';
import { ISSERVER, compartir, copiarTexto } from '../src/Utils';


const Donaciones: NextPage = () => {

  return (
    <LayoutPrincipal title='Donaciones'>
        <div className='col-12 col-md-6 col-lg-5 mx-auto pop-up'>
          <h1>Donaciones</h1>
          <br />
          <h2>PARA USUARIOS Y NO USUARIOS</h2>
          <p>Si la aplicación te está siendo de buen uso y te gusta, queremos comentarte que esto nunca te costará nada. 
            <br/>Aún asi abrí esta sección para que puedas ayudar (a mejorar la aplicación y otros proyectos que tengo en mente), o ayudar a alguna de las personas o causas que hacen un esfuerzo tremendo en nuestra sociedad.</p>
          
          <hr/>
          <br />
          <section>
            <h3>APOYAR AL PROYECTO</h3>
            <p>Actualmente tengo solo estos métodos por los cuales podés colaborar. La idea es mantener la aplicación el mayor tiempo posible y hacer pequeñas mejoras las cuales llevan su tiempo. <br/><br/><b>CVU:</b> 0000003100001575148881</p>
            <article className='d-flex justify-content-center'>
              <a href="https://cafecito.app/cristian021195" rel='noreferrer' target='_blank' className='btn bg-blue-2 p-2 m-2'>Cafecito</a>
              <button className='btn bg-blue-4 p-2 m-2' onClick={()=>{
                copiarTexto('0000003100001575148881');
              }}>Mercado Pago</button>
            </article>
          </section>
        </div>
    </LayoutPrincipal>
  )
}

export default Donaciones
