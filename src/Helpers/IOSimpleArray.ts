export function IOSimpleArray(value:any, array:any[]){//si es con react, devolver el array y setValue
    let aux = [...array]

    if(aux.some((e)=>e===value)){
        aux = aux.filter((v)=>v!==value)
    }else{
        aux.push(value)
    }

    return aux;
}