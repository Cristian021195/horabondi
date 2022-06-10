import {alerta} from './alertas.js';
import {alertaRemove} from './remove-alert.js';
import {feed} from './feed.js';
import {actualizarHorarios} from './updates/actualizar-horarios.js';
import {actualizarPrecios} from './updates/actualizar-precios.js';
import {actualizarPublicaciones} from './updates/actualizar-publicaciones.js';
export function checkUpdate(){
    fetch('/ajax/check-update.php')
    .then(res => {return res.json()})
    .then(res => {
        if(res.length > 0){
            res.forEach(llave => {
                if(llave.nombre == 'key_horarios'){
                    if(llave.llave == localStorage.getItem('key_horarios')){
                    }else{
                        actualizarHorarios(llave);
                    }
                }
                if(llave.nombre == 'key_precios'){
                    if(llave.llave == localStorage.getItem('key_precios')){
                    }else{
                        actualizarPrecios(llave);
                    }
                }
                if(llave.nombre == 'key_publicaciones'){
                    if(llave.llave == localStorage.getItem('key_publicaciones')){
                    }else{
                        actualizarPublicaciones(llave);
                    }
                }
            });
        }else{
            alerta('<h6>¡Error al solicitar datos, sin conexion a internet!</h6>', ['red','darken-3']);
            alertaRemove(document.querySelector('.alerta'), '', ['red','darken-3'],3);
        }
    }).catch(err=>{
        console.log('working offline');
    })
}