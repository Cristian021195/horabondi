import type { NextPage } from 'next'
import { LayoutPrincipal } from '../src/Layouts';

const Explicacion: NextPage = () => {

  return (
    <LayoutPrincipal title='Explicacion'>
        <div className='col-12 col-md-6 col-lg-5 mx-auto pop-up'>
          <h1>Explicacion y Analisis</h1>
          <br />
          <h2>MOTIVO DE CREACIÓN</h2>
          <p>
            La razón por la cual hice esta App es porque desde que empecé a usar mucho los colectivos siempre perdía los horarios, entonces tenia que ingresar a las redes sociales (en su mayoría Facebook), buscar la empresa en cuestión y asi la publicación que es una foto donde estaban los horarios, descargarla y tenerla a mano.<br/><br/>
            Pero si no era el horario correcto, tenía que descargar otra publicación o foto más. <br/><br/>
            La otra alternativa era preguntar en grupos de WhatsApp o quizás a algún amigo que tambien viaje. Lo cual no está mal, pero deja de ser practicó cuando no lo tienen, o no están disponibles para ayudarte. <br/><br/>
            Desde entonces nació la idea de hacer una planilla publica de Google Sheets y abrirla al público, que tampoco es mala idea. <br/><br/>
            Aún asi sigue sin ser practico al momento de editarlas o cargarlas, además la mayoría de las personas no tiene hojas de cálculo de Google instaladas, no tiene cuenta de Google iniciada, o simplemente no quieren ingresar a enlaces difíciles de recordar o porque no tienen porque ingresar a enlaces con el riesgo que a veces conlleva hacerlo e ingresar a direcciones web fraudulentas y pueden robar los datos o peor caer en estafas. <br/><br/>
            Desde entonces empecé a analizar la posibilidad de tratar dichos horarios como planillas, como tablas o simplemente datos. <br/><br/>
            Y así surgió la idea de hacerlo aplicación, y que sea web para que no sea tan pesado para los usuarios, además de practico y barato para las empresas.
          </p>
              
          <br/>
          <h2>BENEFICIOS COMO EFECTOS SECUNDARIOS</h2>
          <p>Esta parte será una explicación quizás más aburrida y técnica. <br/>
            El usar los horarios por medio de fotos o redes sociales implica un consumo de datos móviles que a veces no vemos, o simplemente no tenemos.  <br/>
            Analizando medianamente a detalle tenemos que: </p>
          <ul className='list-circle'>
            <li>Cada horario subido por Facebook tiene un peso promedio de <b>300KB</b> a <b>500KB</b></li>
            <li>Dicha publicación con los horarios tiene <b>200</b> &quot;compartidos&quot; en <b>4</b> horas</li>
            <li>A los horarios las empresas suelen actualizarlos cada <b>5</b> o <b>7 meses.</b></li>
            <li>Si asumimos que, con las <b>3</b> empresas más usadas, en los horarios publicados y separados por: <br/><br/>
            <b><i>Días Hábiles, sábados, domingos y feriados</i></b> (como las empresas suelen manejarse). Tendríamos en nuestros dispositivos aproximadamente <b>3MB</b> solo por tener los horarios compartidos por las empresas por medio de redes sociales.
            </li>
            <li>Si asumimos tambien que únicamente ingresamos a las redes sociales a buscar horarios nuestro consumo de datos sube, y si los horarios los obtuvimos por WhatsApp o simplemente sacamos fotos a dichos horarios, el consumo de datos puede llegar a triplicar. </li>
          </ul>
          <p>
            A lo que voy con el análisis es que la aplicación no solo nos permite ahorrar datos en nuestros celulares. También evita congestión de la red móvil. <br/>
            Facebook no tendría que guardar todas las fotos de horarios, precios y publicaciones, y esto trae beneficios hasta energéticos / ecológicos, aunque sea en pequeña escala. <br/>
            En cuanto el uso, podemos no solo ver los horarios, sino consultarlo en base nuestro origen y destino de internes, como asi los precios de cada viaje. 
          </p>
        </div>
    </LayoutPrincipal>
  )
}
/*

<ul className='list-circle'>
                <li>Guardar preferencias de la aplicación, como favoritos, tamaño de fuente y tema.</li>
                <li>Guardar texto que es necesario para el uso offline de la aplicación.</li>
                <li>Cookies de sesión en caso de haberse registrado.</li>
                <li>Datos de cuenta como nombre, email en caso de haberse registrado.</li>
                <li>Texto en el portapapeles de su dispositivo en caso de copiar CVU / CBU en &quot;Donaciones&quot;.</li>
              </ul>

*/
export default Explicacion
