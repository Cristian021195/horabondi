import { useRouter } from 'next/router';
import {TitularSeccion } from '../../../../src/Components/UI';
import { LayoutPrincipal, EmpresasLayout } from '../../../../src/Layouts';
import { EmpresaNavbar } from '../../../../src/Components/Layout';
import { HorarioForm, PreciosForm } from '../../../../src/Components/Forms';


const MenuId = () => {
    const router = useRouter();
  return (
    <LayoutPrincipal title={router.query.empresa+" precios"} strech='no-strech'>
      <EmpresasLayout>
        <div className='responsive-seccion'>
          <TitularSeccion titulo='precios' empresa={router.query.empresa+""}/>
          <EmpresaNavbar></EmpresaNavbar>
        </div>
        <div className='pop-up'>
          <PreciosForm route={router.asPath}></PreciosForm>
        </div>
      </EmpresasLayout>
    </LayoutPrincipal>
  )
}

export default MenuId;