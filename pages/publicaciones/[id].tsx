import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image';
import { pool } from '../../config/db';
import { IPublicacionRow } from '../../src/Interfaces';
import { LayoutPrincipal } from '../../src/Layouts';
import { compartir } from '../../src/Utils';

const Publicacion: NextPage = ({publicacion}:any) => {

  return (
    <LayoutPrincipal title='Donaciones'>
        <section className='col-12 col-md-6 col-lg-5 mx-auto pop-up'>
          <h1>Publicación #{publicacion?.id}</h1>
          <br />
          <article className='p-2'>
            <h2>{publicacion?.titulo}</h2>
            <p>{publicacion?.publicacion}</p>
            <div className='text-center'>
                <Image priority src={publicacion?.imagen} alt="me" width="320" height="240" onError={()=>"/svg/icon.svg"}/>
            </div>
            <div className='text-end text-grey-5'>
                <button className='btn p-1 bg-blue-2 mb-4' onClick={()=>compartir(publicacion?.titulo+"",'Compartir publicacion',window.location.href)}>Compartir ✉</button><br/>
                <i><small>{`${publicacion?.empresa} - ${publicacion?.fecha}`}</small></i>              
            </div>
          </article>
        </section>
    </LayoutPrincipal>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const data = await pool.query<IPublicacionRow[]>("SELECT * FROM publicaciones;")
    const rows = data[0]; //const ex_arr = [{params:{id: '2'}},{params:{id: '3'}},{params:{id: '5'}}]

    return {
        //paths: ex_arr,
        paths: rows.map((r)=>({params:{id:`${r.id}`}})),
        //fallback: false , cuando solicita un id no especificado, muestra 404
        // "bloking | undefined | null" no va a haber fallback, si la pagina no existe da 404
        fallback:false //nos deja pasar al getStaticsProps y este a su vez nos traeria el 152 o 404 o redireccion si no existe en la api
        //de esta manera si existe en la api el n de pokemon, se crea la pagina estatica
    }
}
export const getStaticProps: GetStaticProps = async ({params})=>{//GET STATICS PROPS, NO PODEMOS HACER FETCH DE API INTERNA, DIRECTAMENTE CONSULTAMOS A BBDD
    const { id } = params as {id:string}
    //const _publicacion = await fetch('http://localhost:3000/api/publicacion/'+id)//no funciona con axios//const publicacion = await _publicacion.json();
    const _publicacion = await pool.query<IPublicacionRow[]>("SELECT * FROM publicaciones WHERE id = ?;", [id])
    const publicacion = _publicacion[0][0];

    if(!publicacion){
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

  return {
    props: {
        publicacion: JSON.parse(JSON.stringify(publicacion))
    },
    revalidate: 86400
  }
}

export default Publicacion
