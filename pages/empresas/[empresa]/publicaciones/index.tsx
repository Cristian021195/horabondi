import { useRouter } from 'next/router';
import { EmpresaNavbar } from '../../../../src/Components/Layout';
import { EmpresasLayout, LayoutPrincipal } from '../../../../src/Layouts';
import { CardPublicacion, TitularSeccion } from '../../../../src/Components/UI';
import { PUBLICACIONES } from '../../../../src/Api';
import { IPublicacion } from '../../../../src/Interfaces/IPublicacion';
import { useEffect, useState } from 'react';

const Publicaciones = () => {
    const router = useRouter();
    const [publicaciones, setPublicaciones] = useState<any>();
    useEffect(()=>{
      if(router.query.empresa !== undefined){
        PUBLICACIONES.get(router.query.empresa+"").then(res=>{setPublicaciones(res.data)}).catch((err)=>{setPublicaciones(null)})
      }
    },[router.query.empresa])

    
  return (
    <LayoutPrincipal title={router.query.empresa+" publicaciones"} strech='no-strech'>
      <EmpresasLayout>
        <div className='responsive-seccion'>
          <TitularSeccion titulo="publicaciones" empresa={router.query.empresa+""}/>
          <EmpresaNavbar></EmpresaNavbar>
        </div>
        <div className='scroll-all vh-100 pop-up'>
          <section className='p-4 row d-flex justify-content-evenly'>
            {
              publicaciones ? publicaciones?.map((p:IPublicacion,p_i:number)=><CardPublicacion key={p_i} titulo={p.titulo} publicacion={p.publicacion} fecha={p.fecha} id={p.id}></CardPublicacion>) : <h3 className='text-yellow-8 text-center'>¡Sin datos!</h3>
            }
          </section>
        </div>
      </EmpresasLayout>
    </LayoutPrincipal>
  )
}
//data?.data.map((p:IPublicacion,p_i:number)=><CardPublicacion key={p_i} titulo={p.titulo} publicacion={p.publicacion} fecha={p.fecha} id={p.id}></CardPublicacion>)
export default Publicaciones;