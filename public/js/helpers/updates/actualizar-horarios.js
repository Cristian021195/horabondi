import {alerta} from '../alertas.js';
import {alertaRemove} from '../remove-alert.js';
import {feed} from '../feed.js';
export function actualizarHorarios(llave){
    alerta('<h6>¡Actualizando Datos, Espere!</h6>', ['amber','darken-3']);
    fetch('/ajax/horarios/listado-horarios.php')
    .then(horarios => {return horarios.json()})
    .then(horarios => {
        const size_views = horarios[0].length;
        horarios[0].forEach((tabla, indice) =>{
            localStorage.setItem(tabla,  JSON.stringify(horarios[indice + 1]));
        });
        localStorage.setItem('key_horarios', llave.llave);
        //alertaRemove(document.querySelector('.alerta'), '<h6>¡Horarios Actualizados Correctamente!</h6>', ['green','accent-3'],3);
        alertaRemove(document.querySelectorAll('.alerta'), '<h6>¡Datos Actualizados Correctamente!</h6>', ['green','accent-4'],3);
        feed();
    }).catch(err=>{
        console.log('working offline');
    })
}