import { ciudades_horarios } from '../Utils/';

export function obtenerSentidoDefault(ruta:string = "", route_text:string = ""){
    const regex:RegExp = /(exprebus|tesa|gutierrez)/g;
    let empresa:string = '';
    let tabla:string = '';
    let sentido:object = {ns: 'Norte - Sur', sn: 'Sur - Norte'};
  
    if(route_text.match(regex) !== null){
      empresa = route_text.match(regex)![0];
    }else{
      empresa = 'ruta';
    }
  
    tabla = empresa+"-"+ruta;
  
    ciudades_horarios.forEach((op,op_i)=>{
      if(op.tabla === tabla){
        sentido = op.sentido
      }
    })
    return sentido;
}