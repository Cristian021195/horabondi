import type { NextPage } from 'next'
import { empresas } from '../../src/Utils/empresas';
import { EmpresaCard } from '../../src/Components/UI';
import { LayoutPrincipal } from '../../src/Layouts/LayoutPrincipal';
const Empresas: NextPage = () => {
  return (
    <LayoutPrincipal title='Empresas'>
        <div className='col-12 col-md-6 col-lg-10 mx-auto pop-up'>
          <h1>Empresas</h1>
          <div className="d-flex justify-content-center mb-4">
            <span className='i-shadow p-2'><span className='text-cyan-7'>🔎︎</span>
              <input type="text" name="empresas" id="empresas" disabled placeholder='Buscar Empresa..' className='ml-4 cyan-i'/>
            </span>
          </div>
          <div className='row justify-content-center'>
            {
                empresas.map((e, e_i)=>{
                    return <EmpresaCard descripcion={e.descripcion+""} nombre={e.nombre} key={e_i} color={e.color} alias={e.alias} anchor={e.anchor} img={e.img} precios={e.precios}/>
                })
            }
          </div>
        </div>
    </LayoutPrincipal>
  )
}

export default Empresas
