import { useRouter } from 'next/router';
import { LayoutPrincipal } from '../../../../src/Layouts';
import { EmpresaNavbar } from '../../../../src/Components/Layout';
import { HorarioForm } from '../../../../src/Components/Forms';
import { EmpresasLayout } from '../../../../src/Layouts';
import { TitularSeccion } from '../../../../src/Components/UI';
import Image from 'next/image';


const Informacion = () => {
    const router = useRouter();
  return (
    <LayoutPrincipal title={router.query.empresa+" informacion"} strech='no-strech'>
        <EmpresasLayout>
          <TitularSeccion titulo='informacion y horarios' empresa={router.query.empresa+""}/>
          <EmpresaNavbar></EmpresaNavbar>
          <div className='scroll-all vh-100 pop-up'>
            <section className='p-2'>
              <article>
              </article>
              <article>
                <h3>Contacto {router.query.empresa+""}</h3>
                <ul>
                  <li>
                    <strong>Direccion: </strong>
                    Terminal Tucumán, Av. Brígido Terán 250 Boleteria 63-64, T4000 San Miguel de Tucumán, Tucumán
                  </li>
                  <li>
                    <strong>Telefono/s: </strong>
                    <a href="tel:+543814211830">3814211830</a>
                  </li>
                  <li>
                    <strong>Mail/s:</strong>
                    <a href="mailto:exprebustucuman@gmail.com"></a>
                  </li>
                  <li>
                    <strong>Provincia/s: </strong>Tucumán
                  </li>
                  <li>
                    <strong>Sitio oficial: </strong>no disponible
                  </li>
                  <li>
                    <strong>Redes Sociales: </strong>
                    <a href='https://www.facebook.com/EXPREBUS/'>Facebook</a>                    
                  </li>
                  <li>
                    <strong>Google Stars: </strong>
                    3.7 ⭐
                  </li>
                </ul>
              </article>
            </section>
          </div>
        </EmpresasLayout>
    </LayoutPrincipal>
  )
}

export default Informacion;