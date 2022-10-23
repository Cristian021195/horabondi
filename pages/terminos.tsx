import type { NextPage } from 'next'
import { LayoutPrincipal } from '../src/Layouts';
import { ISSERVER, compartir } from '../src/Utils';


const Contacto: NextPage = () => {

  return (
    <LayoutPrincipal title='Terminos y Condiciones'>
        <div className='col-12 col-md-6 col-lg-5 mx-auto pop-up'>
          <h1>Terminos y Condiciones</h1>
          <br />
          <h2>TÉRMINOS Y CONDICIONES GENERALES DE USO DEL SITIO</h2>
          <p>
          Los presentes Términos y Condiciones Generales de Uso (en adelante, los “Términos y Condiciones”) regulan el acceso y utilización, por parte del Usuario (conforme se define más adelante), de la aplicación web horabondi.com (en adelante, “la Aplicación Web”), así como la contratación de servicios dentro de la misma.<br/>
          La Aplicación Web es propiedad de Cristian Ismael Gramajo (San Luís 1216, San Miguel de Tucumán, Tucumán, Argentina), CUIL 20-39356700-8 y es operada por él y/o por quién él designe (en adelante “los Administradores”, indistintamente).<br/>
          El Usuario (conforme se define más adelante) deberá sujetarse a estos Términos y Condiciones, junto con todas las demás políticas y principios que rigen a la Aplicación Web.<br/>
          CUALQUIER PERSONA QUE NO ACEPTE ESTOS TÉRMINOS Y CONDICIONES, Y LOS PARTICULARES QUE LE RESULTAREN APLICABLES, LOS CUALES TIENEN CARÁCTER DE OBLIGATORIOS, NO DEBERÁ DE UTILIZAR LA APLICACIÓN WEB Y/O CUALQUIER OTRO SERVICIO RELACIONADO CON LA MISMA.<br/>
          El Usuario deberá leer, entender y aceptar todas las condiciones establecidas en los Términos y Condiciones previo a su registro como Usuario de HoraBondi.<br/></p>
          <hr/>
          <h3>CAPACIDAD</h3>
          <p>
          Por medio de la aceptación de los presentes Términos y Condiciones, el Usuario declara: <br/>
          Que es una persona con capacidad suficiente para contratar conforme a la legislación de su país, con el fin de dar plena validez, eficacia y utilidad práctica a todas y cada una de las estipulaciones de los presentes Términos y Condiciones; que asume todas las obligaciones presentadas.<br/>
          El mero hecho de la utilización de la Aplicación Web atribuye a quien lo realice la condición de Usuario de la misma (previamente y en adelante, “el Usuario”) e implica la aceptación de estos Términos y Condiciones en todas y cada una de sus partes. Por otro lado, no podrán utilizar los servicios de la Aplicación Web las personas que no tengan capacidad para contratar, los menores de edad y/o quienes hayan sido suspendidos o inhabilitados por los Administradores para utilizar la Aplicación Web.<br/>
          </p>
          <br/>
          <h3>MODIFICACIONES</h3>
          <p>
            El Usuario deberá leer atenta y comprensivamente los presentes Términos y Condiciones cada vez que acceda a la Aplicación Web, ya que pueden sufrir modificaciones.<br/>
            La Aplicación Web se reserva el derecho de modificar, a su sola discreción, los Términos y Condiciones en cualquier momento,  suspender, cambiar o terminar el Servicio, lo cual se publicará en la Aplicación Web. Toda modificación será comunicada con una antelación de 10 (diez) días a su entrada en vigencia. En caso de no estar de acuerdo con dichas modificaciones, dentro del plazo de 10 (diez) días de comunicada la modificación, el Usuario deberá comunicar vía e-mail a la casilla soporte@horabondi.com que no acepta las mismas; en ese caso quedará disuelto el vínculo contractual y será inhabilitado como Usuario. Vencido este plazo, se considerará que el Usuario acepta los nuevos Términos y Condiciones, los que regirán la relación contractual a partir de su entrada en vigencia.<br/>
          </p>

          <br/>
          <h3>CONDICIONES DE USO</h3>
          <p><strong>Acceso a la Aplicación Web: </strong><br/>
            El acceso a la Aplicación Web y el registro en la misma son gratuitos, salvo en lo relativo al coste de la conexión a través de la red de telecomunicaciones suministrada por el proveedor de acceso contratado (ISP) por el Usuario, que estará a su exclusivo cargo.<br/>
          </p>
          <br/>
          <p><strong>Necesidad de Registro: </strong><br/>
            Por regla general, para el acceso a los contenidos de la Aplicación Web no será necesario el registro del Usuario. No obstante ello, la utilización de determinados servicios estará condicionada al registro previo del Usuario, quien deberá completar todos los campos del formulario de inscripción con datos válidos (en adelante el “Usuario Registrado”). Quien aspire a convertirse en Usuario Registrado deberá verificar que la información que pone a disposición de la Aplicación Web y los Administradores sea exacta, precisa y verdadera (en adelante los “Datos Personales”); asimismo asumirá el compromiso de actualizar los Datos Personales cada vez que los mismos sufran modificaciones. Los Administradores podrán utilizar diversos medios para identificar a los Usuarios Registrados, pero no se responsabilizan por la certeza de los Datos Personales que sus Usuarios Registrados pongan a su disposición. Los Usuarios Registrados garantizan y responden, en cualquier caso, de la veracidad, exactitud, vigencia y autenticidad de los Datos Personales puestos a disposición de los Administradores.<br/>
          </p>

          <br/>
          <p><strong>Obligación de mantener actualizados los Datos Personales: </strong><br/>
            Los Datos Personales introducidos por todo Usuario Registrado en la Aplicación Web, deberán ser exactos, actuales y veraces en todo momento. Los Administradores se reservan el derecho de solicitar algún comprobante y/o dato adicional a efectos de corroborar los Datos Personales, y de suspender temporal y/o definitivamente a aquellos Usuarios Registrados cuyos datos no hayan podido ser confirmados.<br/>
          </p>
          
          <br/>
          <p><strong>Acceso a la cuenta personal y obligación de confidencialidad de la Clave de Seguridad: </strong><br/>
            Para transformarse en Usuario Registrado, el Usuario tendrá acceso a una cuenta personal (&quot;Cuenta&quot;) mediante el ingreso de una cuenta de mail personal, su nombre y apellido y clave de seguridad personal elegida (&quot;Clave de Seguridad&quot;). Esta Clave de Seguridad es personal e intransferible. El Usuario Registrado se obliga a mantener en estricta confidencialidad su Clave de Seguridad. El Usuario Registrado será, en todo caso, responsable por todo daño, perjuicio, lesión o detrimento que del incumplimiento de esta obligación de confidencialidad se genere por cualquier causa.<br/>
            Es posible que un Usuario se registre en la Aplicación Web a través de su cuenta personal en una red social (&quot;Cuenta Personal&quot;), y acceda a la Aplicación Web a través de ella. En este caso, el Usuario consiente expresamente que la Aplicación Web acceda, en cualquier momento, a la información contenida en su Cuenta Personal, que el usuario accede a compartir al momento de registrarse.<br/>
            La Cuenta es personal, única e intransferible, y está prohibido que un mismo Usuario Registrado registre o posea más de una Cuenta. En caso que los Administradores que correspondan, detecte distintas Cuentas que contengan datos coincidentes o relacionados, podrá cancelarlas, suspenderlas o inhabilitarlas, a su sola discreción, siendo el mismo motivo suficiente para dar de baja al Usuario Registrado, incluso en su primer Cuenta. <br/>
          </p>

          <br/>
          <p><strong>Normas generales de utilización de la Aplicación Web: </strong><br/>
            Los principales servicios ofrecidos en la Aplicación Web se dirigen a todo público. En sí es para destacar que hay servicios dentro de la Plataforma (en adelante “Plataforma”) que requieren del uso de medios de pago, documentación y previa registración por parte del Usuario Registrado en caso de contrataciones de: </p>
            <ul className='list-circle'>
              <li>Solicitud de “Becas” o de servicios gratuitos de viaje otorgados por el estado provincial o nacional en caso de estar disponible según el estatus de dicho usuario. En los cuales comparte información con las empresas y entes estatales por medio de la plataforma.</li>
              <li>Paquetes de viajes para estudiantes y trabajadores (“Abonos” mensuales o semanales según la empresa registrada)</li>
            </ul>
            <p>Por otro lado, los servicios de mayor uso en la aplicación los cuales no requieren el previo registro del Usuario, ni tampoco el uso de medios de pagó vinculado a contratación de servicios por parte de otras empresas asociadas o servicios a cambio dentro de la Plataforma son:</p>
            <ul className='list-circle'>
              <li>Consulta de las últimas publicaciones emitidas por la plataforma y de las empresas asociadas a la misma en caso y preferencia del Usuario.</li>
              <li>Consulta de los horarios disponibles y actualizados por parte de las empresas asociadas a la Plataforma.</li>
              <li>Consulta de los precios disponibles y actualizados por parte de las empresas asociadas a la Plataforma.</li>
              <li>Descarga (previamente autorizada por parte del Usuario) de archivos (documentos en formato PDF) asociados a los horarios que dispone la empresa asociada a la Plataforma.</li>
              <li>Donaciones. Es una sección publicitaria para ayudar a aquellas campañas, organizaciones que no dependen del estado, las cuales la Plataforma y sus correspondientes Administradores consideraron ser dispuestas en dicha sección.</li>
            </ul>
          <p>El Usuario y/o el Usuario Registrado, se obliga a utilizar la Aplicación Web y todo su contenido y servicios conforme a lo establecido en la ley, la moral, el orden público y los presentes Términos y Condiciones que en cada caso resulten aplicables. Asimismo, se obliga a hacer un uso adecuado de los servicios y/o contenidos de la Aplicación Web y a no emplearlos para realizar actividades ilícitas o constitutivas de delito, que atenten contra los derechos de terceros y/o que infrinjan la regulación sobre propiedad intelectual e industrial, o cualesquiera otras normas del ordenamiento jurídico que puedan resultar aplicables y, en especial, el principio de buena fe que obliga a actuar leal, correcta y honestamente tanto en los tratos preliminares, celebración y ejecución de todo contrato. </p>

          <br/>
          <p><strong>Contenidos y servicios enlazados a través de la Aplicación Web: </strong><br/>
            El servicio de acceso a la Aplicación Web puede incluir dispositivos técnicos de enlace, directorios e incluso instrumentos de búsqueda que permitan al Usuario acceder a otras páginas y portales de Internet (en adelante, “Sitios Enlazados”). En estos casos los Administradores no serán responsables de los contenidos y servicios suministrados en los Sitios Enlazados.<br/>
            En el supuesto que el Usuario considere que existe un Sitio Enlazado con contenidos ilícitos o inadecuados podrá comunicárselo a los Administradores, sin que en ningún caso esta comunicación conlleve la obligación de los Administradores de retirar el correspondiente enlace.<br/>
            En ningún caso, la existencia de Sitios Enlazados debe presuponer la formalización de acuerdos ni asociación con los responsables o titulares de los mismos, ni la recomendación, promoción o identificación de la Aplicación Web o los Administradores con las manifestaciones, contenidos o servicios proveídos por dichos sitios.<br/>
            Los Administradores no conocen los contenidos y servicios de los Sitios Enlazados y, por tanto, no se hacen responsables por los daños producidos por la ilicitud, calidad, desactualización, indisponibilidad, error e inutilidad de los contenidos y/o servicios de los Sitios Enlazados ni por cualquier otro daño que no les sea directamente imputable.<br/>
          </p>

          <br/>
          <p><strong>Propiedad intelectual e industrial: </strong><br/>
            Todos los contenidos de la Aplicación Web, entendiendo por éstos, a título meramente enunciativo y no taxativo, los textos, fotografías, gráficos, imágenes, iconos, tecnología, software, links y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente, son propiedad intelectual de los Administradores, sin que puedan entenderse cedidos al Usuario ninguno de los derechos de explotación reconocidos por la normativa vigente en materia de propiedad intelectual sobre los mismos.<br/>
          </p>

          <br/>
          <p><strong>Tarifas: </strong><br/>
            Para el apartado &quot;Donaciones&quot; cabe aclarar que La Aplicación Web no es un procesador de pagos. Los pagos son hechos por el Usuario o el Usuario Registrado utilizando los servicios de un tercero. Al usar la Aplicación Web el Usuario y/o el Usuario Registrado aceptan los términos y condiciones del procesador de pagos, que será el único responsable por cualquier asunto relacionado con el pago. Los Administradores se reservan el derecho a cobrar tarifas por cualquier tipo de transacción y/o a cobrar tarifas por encima de las cobradas por el procesador de pagos..<br/>
          </p>

          <br/>
          <p><strong>Privacidad de la información: </strong><br/>
          Para utilizar algunos de los Servicios ofrecidos por los Administradores o la Aplicación Web, los Usuarios que deseen convertirse en Usuarios Registrados, se obligan a facilitar determinados datos de carácter personal prestando su consentimiento para el uso de la Plataforma. Su información personal se procesa y almacena en servidores o medios magnéticos que mantienen altos estándares de seguridad y protección tanto física como tecnológica. Los Administradores de la Aplicación Web se reservan el derecho a hacer uso y ceder a terceros la información personal procesada y almacenada.<br/>
          </p>

          <br/>
          <p><strong>Preguntas frecuentes: </strong><br/>
            Las respuestas a preguntas frecuentes vinculadas a la participación de los Usuarios constituyen una descripción genérica que sólo tiene propósitos de información general. Las respuestas a las preguntas frecuentes no implica en ningún caso asesoramiento legal o impositivo por parte de los Administradores. Estos Términos y Condiciones prevalecerán siempre sobre el contenido de la información relativa a Preguntas Frecuentes.<br/>
          </p>

          <br/>
          <p><strong>Legislación aplicable y jurisdicción competente: </strong><br/>
            Estos Términos y Condiciones se regirán o interpretarán conforme a la legislación de la República Argentina. Los Administradores y el Usuario podrán someter cualquier controversia que pudiera suscitarse de la prestación de los productos o servicios objeto de éstos Términos y Condiciones, a los Juzgados y Tribunales de la Ciudad de San Miguel de Tucumán, Tucumán, Argentina.<br/>
          </p>
          <br/>
          <br/>
          <p>© 2022 Horabondi.</p>
        </div>
    </LayoutPrincipal>
  )
}

export default Contacto
