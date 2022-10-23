import type { NextPage } from 'next'
import { DragArea } from '../../src/Components/Input'
import { LayoutPrincipal } from '../../src/Layouts'


const Horarios: NextPage = () => {
  return (
    <LayoutPrincipal title='Carga Horarios'>
        <div className='col-12 col-md-6 col-lg-4 mx-auto pop-up'>
            <h1>Carga de Horarios</h1>
            <div className='p-4 b-shadow'>
                <h2>Arrastar archivos</h2>
                <p>Debe arrastrar o seleccionar los archivos de horarios en formato <strong>xlsx, xls, ods, csv</strong>.</p>
                <DragArea acceptType='.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
                  url="/horarios"/>
                <br/>
                <div className="drag-title">
                    <h3>Arrastre o seleccione su archivo</h3>
                </div>
                <small>
                      Recuerde subir archivos en formato .xlsx, .xls, .ods. <br/>
                      El nombre del archivo como de la hoja debe tener la siguiente estructura: &nbsp;
                      <b>empresa-ruta-diasDeSemana-direccion</b>, por ejemplo: exprebus-38-habiles-ns
                </small>
                <br/><br/>
                <small>¿Problemas para cargar archivos? Envianos un mail: <a href="mailto:soporte@horabondi.com">soporte@horabondi.com</a>, 
                si es posible adjuntando una captura de pantalla</small>
            <br/>
        </div>
        </div>
    </LayoutPrincipal>
  )
}

export default Horarios
