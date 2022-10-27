
import type { NextPage } from 'next'
import { Card } from '../../src/Components/UI';
import { LayoutPrincipal } from '../../src/Layouts';

const Upload: NextPage = () => {
  return (
    <LayoutPrincipal title='Carga de ficheros'>
        <div className='col-12 col-md-6 col-lg-4 mx-auto pop-up'>
            <h1>Carga de Horarios y Listado de Precios</h1>
            <Card color='bg-red-2' link='/uploads/archivos' title='Horarios y Precios'></Card>
        </div>
    </LayoutPrincipal>
  )
}/*<Card color='bg-blue-2' link='/uploads/horarios' title='Horarios'></Card><Card color='bg-red-2' link='/uploads/precios' title='Precios'></Card>*/

export default Upload