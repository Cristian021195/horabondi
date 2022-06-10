import {alerta} from '../alertas.js';
import {alertaRemove} from '../remove-alert.js';
import {feed} from '../feed.js';
export function actualizarPublicaciones(llave){
    alerta('<h6>¡Actualizando Datos, Espere!</h6>', ['amber','darken-3']);
    fetch('/ajax/publicaciones/listado-publicaciones.php')
    .then(publicaciones => {return publicaciones.json()})
    .then(publicaciones => {
        localStorage.setItem('publicaciones', JSON.stringify(publicaciones));
        localStorage.setItem('key_publicaciones', llave.llave);
        //alertaRemove(document.querySelector('.alerta'), '<h6>¡Precios Correctamente!</h6>', ['green','accent-3'],3);
        alertaRemove(document.querySelectorAll('.alerta'), '<h6>¡Datos Actualizados Correctamente!</h6>', ['green','accent-4'],3);
        //feed();
        location.reload();
    }).catch(err=>{
        console.log('working offline');
    })
}