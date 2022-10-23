import { IReactComponentChild } from '../../Interfaces/IReact';
interface Props extends IReactComponentChild{
    titulo:string
    empresa:string
}
export function TitularSeccion({titulo, empresa}:Props){
    return (
      <div className='titular-seccion'>
        <h1>{titulo}</h1>
        <h1 className='titular-seccion-2'>&nbsp;{empresa}</h1>
      </div>
    )
}