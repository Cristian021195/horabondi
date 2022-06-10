import {alerta} from '../alertas.js';
import {alertaRemove} from '../remove-alert.js';
import {feed} from '../feed.js';
export function actualizarPrecios(llave){
    alerta('<h6>¡Actualizando Datos, Espere!</h6>', ['amber','darken-3']);
    fetch('/ajax/precios/listado-precios.php')
    .then(precios => {return precios.json()})
    .then(precios => {
        if(precios.length > 0){
            precios.forEach(precio => {
                localStorage.setItem(precio.listado, JSON.stringify(precio.tabla));
            })    
        }                
        localStorage.setItem('key_precios', llave.llave);
        //alertaRemove(document.querySelector('.alerta'), '<h6>¡Precios Correctamente!</h6>', ['green','accent-3'],3);
        alertaRemove(document.querySelectorAll('.alerta'), '<h6>¡Datos Actualizados Correctamente!</h6>', ['green','accent-4'],3);
    }).catch(err=>{
        console.log('working offline');
    })
}