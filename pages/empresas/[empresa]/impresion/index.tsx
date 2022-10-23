import { useRouter } from 'next/router';
import {TitularSeccion } from '../../../../src/Components/UI';
import { LayoutPrincipal, EmpresasLayout } from '../../../../src/Layouts';
import { EmpresaNavbar } from '../../../../src/Components/Layout';
import { ImpresionForm } from '../../../../src/Components/Forms';


const Impresion = () => {
    const router = useRouter();
  return (
    <LayoutPrincipal title={router.query.empresa+" impresion"} strech='no-strech'>
      <EmpresasLayout>
        <TitularSeccion titulo='impresion' empresa={router.query.empresa+""}/>
        <EmpresaNavbar></EmpresaNavbar>
        <div className='pop-up'>
          <ImpresionForm route={router.asPath}/>
        </div>
      </EmpresasLayout>
    </LayoutPrincipal>
  )
}
export default Impresion;