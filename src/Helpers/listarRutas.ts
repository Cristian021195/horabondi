import { switch_empresas } from "../Utils/empresas";

export function listarRutas(route_text:string):Array<string>{
    const regex:RegExp = /(exprebus|tesa|gutierrez)/g;
    let empresa:string = '';
  
    if(route_text?.match(regex) !== null){
      empresa = route_text?.match(regex)![0];
    }else{
      empresa = 'ruta';
    }
  
    switch (empresa) {
      case switch_empresas.EXPREBUS:{
        return ["38","301"]
      }
      case switch_empresas.TESA:{
        return ["38","301"]
      }
      case switch_empresas.GUTIERREZ:{
        return ["65", "piedragrande", "calera", "agudos", "301"]//quitamos 329
      }  
      default:{
        return ['ruta']
      }
    }
  }