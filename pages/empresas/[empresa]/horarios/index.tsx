import { useRouter } from 'next/router';
import {TitularSeccion } from '../../../../src/Components/UI';
import { LayoutPrincipal, EmpresasLayout } from '../../../../src/Layouts';
import { EmpresaNavbar } from '../../../../src/Components/Layout';
import { HorarioForm } from '../../../../src/Components/Forms';


const Horarios = () => {
    const router = useRouter();
  return (
    <LayoutPrincipal title={router.query.empresa+" horarios"} strech='no-strech'>
      <EmpresasLayout>
        <TitularSeccion titulo='horarios' empresa={router.query.empresa+""}/>
        <EmpresaNavbar></EmpresaNavbar>
        <div className='pop-up'>
          <HorarioForm route={router.asPath}></HorarioForm>
        </div>
      </EmpresasLayout>
    </LayoutPrincipal>
  )
}

export default Horarios;