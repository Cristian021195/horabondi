import type { NextPage, GetStaticProps, GetStaticPaths} from 'next';
import { useEffect, useState } from 'react';
import { empresas } from '../../../src/Utils/empresas';
//import { EmpresasLayout, TitularSeccion, EmpresaNavbar, Layout } from '../../../src/C';
import { EmpresasLayout, LayoutPrincipal } from '../../../src/Layouts';
import { EmpresaNavbar } from '../../../src/Components/Layout';
import { TitularSeccion } from '../../../src/Components/UI';


interface IEmpresa {
    empresa:string
}

const Empresa: NextPage<IEmpresa> = ({empresa}) => {

    /*const [isFav, setIsFav] = useState<Boolean>(false);

    useEffect(()=>{
    },[])*/
  return (
    <>
      <LayoutPrincipal title={empresa} strech='no-strech'>
        <EmpresasLayout>
          <div className='responsive-seccion'>
            <TitularSeccion titulo="Bienvenido a" empresa={empresa+""}/>
            <EmpresaNavbar bg_color='--cyan-8'/>
          </div>
        </EmpresasLayout>
      </LayoutPrincipal>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    return {
        paths: empresas.map(empresa=>({//son las rutas generadas en build time (son el n° de paginas que se crearan)
            params:{empresa: empresa.alias}//necesitas el id:string 
        })),
        //fallback: false , cuando solicita un id no especificado, muestra 404
        // "bloking | undefined | null" no va a haber fallback, si la pagina no existe da 404
        fallback:'blocking' //nos deja pasar al getStaticsProps y este a su vez nos traeria el 152 o 404 o redireccion si no existe en la api
        //de esta manera si existe en la api el n de pokemon, se crea la pagina estatica
    }
}
export const getStaticProps: GetStaticProps = async ({params})=>{
    const { empresa } = params as {empresa:string}

    return {
        props: {
            empresa
        },
        revalidate: 86400
    }
}

export default Empresa