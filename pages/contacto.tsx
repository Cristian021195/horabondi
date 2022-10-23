import type { NextPage } from 'next'
import { LayoutPrincipal } from '../src/Layouts';
import { ISSERVER, compartir } from '../src/Utils';


const Contacto: NextPage = () => {

  return (
    <LayoutPrincipal title='Contacto'>
        <div className='col-12 col-md-6 col-lg-5 mx-auto pop-up'>
          <h1>Contacto</h1>
          <br />
          <h2>PARA LOS USUARIOS</h2>
          <p>Podes encontrarme por cualquiera de los siguientes medios.</p>
          <div className=''>
            <a href="https://twitter.com/Cristian021195" className='btn p-2 m-2 bg-blue-3'>Twitter</a>
            <a href="mailto:cristiangramajo015@gmail.com" className='btn p-2 m-2 bg-red-2'>Gmail</a>
            <a href="https://www.facebook.com/cristianismael.gramajo" className='btn p-2 m-2 bg-blue-5'>Facebook</a>
          </div>
          <br />
          <h2>PARA LAS EMPRESAS</h2>
          <p>Si quiere que su empresa publiqué por aquí información, horarios, precios puede contactarme por los mismos medios de arriba. <br/>
            <br/>Por otro lado, si la empresa ya está asociada y tiene problemas con el servicio (errores de registración, inicio de sesión, carga de documentación) no dude en contactarme.<br></br>Envianos un mail: <a href='mailto:cristiangramajo015@gmail.com'>cristiangramajo015@gmail.com</a></p>
          <br />
          <h2>COMPARTE LA APP A ALGÚN AMIGO QUE NECESITE</h2>
          <p>Si te gustó el servicio, y crees que puede gustarle a un amigo, compañero de trabajo, o un grupo de personas. Podes compartir la aplicación con tus redes favoritas tocando el botón de abajo.</p>
          <button className='btn bg-red-2 p-2 ml-2' onClick={()=>{
            compartir('HoraBondi a un amigo','Por favor, comparte a quienes la necesiten','/');
          }}>Compartir</button>
        </div>
    </LayoutPrincipal>
  )
}

export default Contacto
