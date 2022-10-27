import type { NextPage } from 'next'
import { FormEvent } from 'react';
import { LayoutPrincipal } from '../../src/Layouts';
import { ISSERVER, compartir } from '../../src/Utils';
import {AltaEmpresaForm, AltaUsuarioForm, PublicacionesForm, CrudPublicaciones} from "../../src/Components/Forms"

const Admin: NextPage = () => {

    async function submitHandler(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
    }

  return (
    <LayoutPrincipal title='Admin'>
        <div className='pop-up'>
          <h1>Panel de Administracion</h1>
          <br />
          <section className='row d-flex justify-content-evenly'>
            <article className='col-12 col-md-6 col-lg-3 p-4 m-4 b-shadow'>
                <h2>Alta de Usuario</h2>
                <AltaUsuarioForm/>
            </article>
            <article className='col-12 col-md-6 col-lg-3 p-4 m-4 b-shadow'>
                <h2>Publicaciones</h2>
                <PublicacionesForm/>
            </article>
            <article className='col-12 col-md-6 col-lg-3 p-4 m-4 b-shadow'>
                <h2>Alta de Empresa</h2>
                <AltaEmpresaForm/>
            </article>
            <article className='col-12 p-4 m-4 b-shadow'>
                <h2>Administrador de Publicaciones</h2>
                <CrudPublicaciones/>
            </article>
          </section>
        </div>
    </LayoutPrincipal>
  )
}
/*







*/

export default Admin
