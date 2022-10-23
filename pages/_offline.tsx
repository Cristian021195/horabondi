import type { NextPage } from 'next'
import { LayoutPrincipal } from '../src/Layouts';


const Offline: NextPage = () => {

  return (
    <LayoutPrincipal title='Sin conexion'>
        <div className='col-12 col-md-6 col-lg-5 mx-auto pop-up'>
          <h1>Sin Conexión</h1>
          <br />
          <h2>ACTUALMENTE ESTAS SIN CONEXIÓN</h2>
          <p>Conectate a una red WIFI o activá tus datos. <br /> Si los problemas persisten mandá un mail a <a href='mailto:cristiangramajo015@gmail.com'>cristiangramajo015@gmail.com</a></p>
        </div>
    </LayoutPrincipal>
  )
}

export default Offline