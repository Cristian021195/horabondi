import type { NextPage } from 'next'
import Link from 'next/link'
import { DragArea } from '../../src/Components/Input'
import { LayoutPrincipal } from '../../src/Layouts'



const Archivos: NextPage = () => {
  return (
    <LayoutPrincipal title='Carga Archivos'>
        <div className='col-12 col-md-6 col-lg-4 mx-auto pop-up'>
            <h1>Carga de Archivos</h1>
            <div className='p-4 b-shadow'>
                <h2>Arrastar archivos</h2>
                <p>Debe arrastrar o seleccionar los archivos de horarios en formato <strong>xlsx, xls, ods, csv</strong>.</p>
                <DragArea acceptType='.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
                url="/archivos"/>
                <br/>
                <div className="drag-title">
                    <h3>Arrastre o seleccione su archivo</h3>
                </div>
                <small>
                      Recuerde subir archivos en formato <b>.xlsx, .xls, .ods. </b><br/>
                      El nombre del archivo como de la hoja debe tener la siguiente estructura: &nbsp;<br/><br/>
                      <b>Si es un archivo de horario: </b><br/>
                      <b>empresa-ruta-diasDeSemana-direccion</b>, por ejemplo: <i>exprebus-38-habiles-ns</i><br/><br/>
                      <b>Si es un archivo de precios: </b><br/>
                      <b>empresa-ruta-</b>precio, por ejemplo: <i>exprebus-38-precio</i>
                </small>
                <br/><br/>
                <small>Si tenes dudas de como hacer la planilla, te dejamos un tutorial con pasos, y tambien un video explicativo de todo esto: <Link href='/admin/tutorial'>
                  <a className='btn bg-blue-3 p-1'>Tutorial</a></Link></small>
                <br/><br/>
                <small>¿Problemas para cargar archivos? Envianos un mail: <a href="mailto:cristiangramajo015@gmail.com">cristiangramajo015@gmail.com</a>, 
                si es posible adjuntando una captura de pantalla</small>
            <br/>
        </div>
        </div>
    </LayoutPrincipal>
  )
}

export default Archivos
