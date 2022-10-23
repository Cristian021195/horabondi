import { REGEX } from '../Utils/regex';
export function crearNombreHorario(empresa:string,ruta:string,dias:string, opciones: string[], sentidoDefault:object, origen:string, destino:string ): string[]{
    let ciudad_origen:string = '';
    let ciudad_destino:string = '';
    let sentido: string = '';
  
  
    if(origen?.match(REGEX.SENTIDO)){//todos norte sur, sur norte, este oeste...
      origen = origen?.match(REGEX.SENTIDO)![0];
      sentido = origen;
    }else{
      ciudad_origen = opciones.filter((e)=>e===origen)[0] || "";
      ciudad_destino = opciones.filter((e)=>e===destino)[0] || "";
  
      if(opciones.findIndex((e)=>e===origen) > opciones.findIndex((e)=>e===destino)){
        sentido = Object.keys(sentidoDefault)[1];
      }else if(opciones.findIndex((e)=>e===origen) == opciones.findIndex((e)=>e===destino)){
        //throw new Error("¡no pueden ser mismo origen y destino!");
      }else{
        sentido = Object.keys(sentidoDefault)[0];
      }
    }
    return [empresa, ruta, dias, sentido];
  
}