import type { NextPage } from 'next'
import { LayoutPrincipal } from '../src/Layouts';
import { ISSERVER, compartir } from '../src/Utils';


const notFound: NextPage = () => {

  return (
    <LayoutPrincipal title='Pagina no encontrada'>
        <div className='col-12 col-md-6 col-lg-5 mx-auto pop-up'>
          <h1>Error 404</h1>
          <br />
          <h2>PÁGINA O RECURSO NO ENCONTRADO</h2>
          <p>Puede que la publicación o contenido al que intentas acceder se haya eliminado, o accediste a una dirección inválida dentro del sitio, si pensas que es un error del sitio envía un mail a: <a href='mailto:cristiangramajo015@gmail.com'>cristiangramajo015@gmail.com</a></p>
        </div>
    </LayoutPrincipal>
  )
}

export default notFound
