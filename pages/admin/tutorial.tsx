import type { NextPage } from 'next'
import { LayoutPrincipal } from '../../src/Layouts';

const Tutorial: NextPage = () => {

  return (
    <LayoutPrincipal title='Tutorial'>
        <div className='col-12 col-md-6 col-lg-5 mx-auto pop-up'>
          <h1>Tutorial</h1>
            <br />
            <h2>CREACION DE PLANILLA DE HORARIOS</h2>
            <p>
              El siguiente tutorial lo haremos tomando como ejemplo el horario de la empresa Exprebus, el cual corresponde al horario de dia sabado, de origen norte y destino sur, que hace recorrido por la ruta 38, y a su vez tiene una fecha de vigencia:<br/>
              Recomendamos seguir el tutorial con la aplicación de hojas de calculo de Excel, si es posible en versiones posteriores a la 2013.
            </p><br/>
            <h3>Pasos para la creacion del archivo</h3>
              <ul className='list-circle'>
                <li>Abrir Excel, y seleccionar &quot;Libro en blanco&quot; ó &quot;hoja de calculo nueva en blanco &quot;.</li>
                <li>En la parte baja del programa aparecen la seccion de &quot;hojas&quot;, alli haremos doble click sobre &quot;Hoja1&quot; o la hoja que se nos haya creado por defecto.</li>
                <li>
                  Cambiamos el nombre de la hoja por la fecha en la cual entrará en vigencia dicho horario. y tiene que tener el siguiente formato: &nbsp;
                  <b>Dia</b>-<b>Mes</b>-<b>Año</b> DD-MM-AAAA, en numeros.
                </li>
                <li>Aún el archivo no tiene nombre, para agregarle nombre debemos seleccionar la opcion de: <b>Archivo &gt; Guardar</b>, o presionando <b>CNTRL + G</b> si tenemos nuestro Excel en español.</li>
                <li>El nombre del archivo tiene que tener la siguiente estructura: 
                  <br/>
                  <b>Empresa</b> - <b>Ruta</b> - <b>Dias del recorrido</b> - <b>Sentido del recorrido</b>.xlsx (como formato de preferencia)
                </li>
              </ul>
              por ejemplo, el archivo quedaria con el siguiente nombre: <b>exprebus-38-sabados-ns.xlsx</b>
              <br/>

              <h3>Pasos para la carga de datos:</h3>
              Personalemente desconozco la forma en la que la empresa hace las planillas, cargar hora de viaje en cada celda es muy tedioso y lleva tiempo, tratare de explicar la manera en la cual yo cargue dichos horarios.
              <ul className='list-circle'>
                <li>Los horarios definen en la primer fila las ciudades, con origen a la izquierda y destino a la derecha, y agregando un campo que define un tipo especial de viaje <b>(expreso)</b></li>
                <table className='table-standard mt-2'>
                  <tr>
                    <th>tucuman</th><th>famailla</th><th>monteros</th><th>alberdi</th><th>...</th><th>la cocha</th><th>rio huacra</th><th>expreso</th>
                  </tr>
                </table>
                <li>La celdas que definen <b>expreso</b> solo tendran que llenarse con <b>si</b> ó <b>no</b>.</li>
                <li>
                  Para llenar el horario, lo hacemos tomando cuidad por ciudad, por ejemplo, el primer colectivo de san miguel sale a las 05:30 AM entonces ponemos
                  la primer celda abajo 05:30:00.
                </li>
                <li>
                  Supongamos que hasta las 12hs salen colectivos de San Miguel con 15 minutos de frecuencia, para llenarlo de manera facil, luego de escribir el horario base, seleccionamos la celda de abajo
                  y en la barra de funciones <b>ƒ×</b> escribimos por ejemplo <b>=<span className='text-blue-7'>A2</span>+15/1440</b>
                </li>
                <li>
                  De esta manera estamos haciendo referencia a la celda principal, diciendole que nuestra segunda celda tendra un valor de 15 minutos mas. 
                  Y si luego arrastramos con el simbolo &#10010; hacia abajo, se llenaran hasta donde queramos las celdas inferiores con los horarios correspondientes de 15 mintos.
                </li>
                <li>
                  Un consejo es hacer el paso anterior donde haya igual frecuencia, si por ejemplo luego de las 12hs la frecuencia pasa a ser de 30min es mejor escribir dicha celda a mano, y luego volver a escribir dicha funcion. <b>=<span className='text-blue-7'>A(n)</span>+30/1440</b>
                </li>
                <li>
                  Luego de repetir el proceso por las diferenctes columnas (ciudades) veremos que obiamente nos quedan celdas en blanco. Puede pasar, ya que 
                  no siempre los colectivos tienen todas las ciudades de destino.
                </li>
                <li>
                  El software no nos permite tener tener columnas en blanco, por lo tanto debemos hacer lo siguiente: <br />
                  Seleccionamos el rectangulo desde el borde superior izquierdo, al borde inferior derecho, seleccionando toda la planilla.
                </li>
                <li>
                  Presionamos <b>F5</b>, y se nos desplegara una ventana que dice <b>Ir a</b>. Luego, <b>Especial &gt; Celdas en Blanco &gt; Aceptar </b>, escribimos <b>* </b>(simbolo asterisco),
                  Una vez llenada la primer celda hacemos: <b>CNTRL + ENTER</b> ↳ <br/>De esta manera se llenaran todas las celdas en blanco con caracteres validos para que el programa pueda transformarlos.
                </li>
                <li>
                  Al final, para que sea formato de texto, y no valores / celdas auto referenciadas con otras. 
                  Lo que hacemos es seleccionar toda la planilla (el rectangulo de la primer columna arriba a la izquierda, y ultima abajo a derecha), 
                  luego la copiamos, hacemos click derecho, y la pegamos con la opcion especial de pegado &quot;Valores&quot;
                </li>
              </ul>
              <p>De esta manera queda lista la planilla para subirse al sistema, y asi actualizar los datos para los clientes.</p>
              <br/>

              <hr />
              <h2>CREACION DE PLANILLA DE PRECIOS</h2>
              <p>
                La Aplicación Web no necesita de registro para muchas de sus funciones. Aún asi a nosotros nos gustaría que cada usuario este registrado para tener acceso a todas las funciones correspondientes.<br/><br/>
                Mas allá de esto, tenemos que informarte que los datos almacenados serán pura y exclusivamente para:
              </p><br/>
                <ul className='list-circle'>
                  <li>Guardar preferencias de la aplicación, como favoritos, tamaño de fuente y tema.</li>
                  <li>Guardar texto que es necesario para el uso offline de la aplicación.</li>
                  <li>Cookies de sesión en caso de haberse registrado.</li>
                  <li>Datos de cuenta como nombre, email en caso de haberse registrado.</li>
                  <li>Texto en el portapapeles de su dispositivo en caso de copiar CVU / CBU en &quot;Donaciones&quot;.</li>
                </ul>
                <br/>
                <p>
                  En el caso del apartado de &quot;Donaciones&quot;, se harán uso de procesadores de pago de servicios externos, por lo tanto, los datos que uses no serán procesados ni guardados por nuestro servicio.
                </p>
                <br/>
                <p>
                  La Aplicación Web es de uso personal, no funciona como blog, ni como red social, por lo tanto, no podrás ver quienes están registrados, comentarios de otros usuarios, a lo único que estarás habilitado es a la función de &quot;Compartir&quot; la app en caso de alguien necesitarla.
                </p>
        </div>
    </LayoutPrincipal>
  )
}

export default Tutorial
