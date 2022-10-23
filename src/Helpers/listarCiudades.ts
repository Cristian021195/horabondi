import { ciudades_horarios } from '../Utils';
import { IOpcionesCiudadesPrecios ,IOpcionesCiudadesHorario} from '../Interfaces';
import { REGEX } from '../Utils';
export function listarCiudades(ruta:string = "", route_text:string = "", ciudades_horarios: IOpcionesCiudadesHorario[]){
    let empresa:string = '';
    let tabla:string = '';
    let opciones:string[] = [''];
  
    if(route_text.match(REGEX.EMPRESAS) !== null){
      empresa = route_text.match(REGEX.EMPRESAS)![0];
    }else{
      empresa = 'ruta';
    }
  
    tabla = empresa+"-"+ruta;
  
    ciudades_horarios.forEach(el=>{
      if(el.tabla === tabla){
        opciones = el.ciudades;
      }
    })
    return opciones;
}

export function listarCiudadesPrecios(ruta:string = "", route_text:string = "", ciudades_horarios: IOpcionesCiudadesPrecios[]){
  let empresa:string = '';
  let tabla:string = '';
  let opciones:string[] = [''];

  if(route_text.match(REGEX.EMPRESAS) !== null){
    empresa = route_text.match(REGEX.EMPRESAS)![0];
  }else{
    empresa = 'ruta';
  }

  tabla = empresa+"-"+ruta;

  ciudades_horarios.forEach(el=>{
    if(el.tabla === tabla){
      opciones = el.ciudades;
    }
  })
  return opciones;
}