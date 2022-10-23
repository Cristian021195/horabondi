import { IDataForm } from "../Interfaces";

export function filtrarPorTipo(dataForm:IDataForm, new_body:any){
    if(dataForm.tipo === 'comun'){
        new_body = new_body.filter((nb:any,nb_i:number)=>{
            if(nb[nb.length - 1] === 'no'){
                return nb;
            }
        })
    }else if(dataForm.tipo === 'expreso'){
        new_body = new_body.filter((nb:any,nb_i:number)=>{
            if(nb[nb.length - 1] === 'si'){
                return nb;
            }
        })
    }

    return new_body;
}
