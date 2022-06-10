export function opcionesDeCiudades(opciones, seleccion, seccion){
    let $options;
    let obj;
    opciones.forEach((tipo, index)=>{
        if(tipo.tipo == seccion){
            tipo.opciones.forEach((tabla)=>{
                if(tabla.tabla == seleccion){
                    if(seccion == 'horarios'){
                        $options = opcionesHorario(tabla.ciudades);
                    }else{
                        $options = opcionesPrecio(tabla.ciudades);
                    }                        
                }
            })
        }/*else if(seccion == 'precios'){
            tipo.opciones.forEach((tabla)=>{
                if(tabla.tabla == seleccion){
                    $options = opcionesPrecio(tabla.ciudades);
                }
            })
        }*/
        
    })
    return $options;
}
function opcionesHorario(ciudades){
    //console.log(ciudades);
    let $fragment = document.createDocumentFragment();
    ciudades.forEach((ciudad, index) => {
        let $option = document.createElement('option'); $option.value = index; $option.textContent = ciudad;
        //html+= `<option value="${index}">${ciudad}</option>`;
        $fragment.appendChild($option);
    })
    return $fragment;
}
function opcionesPrecio(ciudades){
    let $fragment = document.createDocumentFragment();
    ciudades.forEach((ciudad, index) => {
        let $option = document.createElement('option'); $option.value = ciudad; $option.textContent = ciudad;
        $fragment.appendChild($option);
        //html+= `<option value="${ciudad}">${ciudad}</option>`;
    })
    return $fragment;
}