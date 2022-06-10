import {login} from '../login.js';
import {logout} from '../logout.js';
import {header} from '../header.js';
import {menu} from './menu.js';
export function adminOptions(){
    const $modal = document.getElementById('modal1');

    let datos = JSON.parse(localStorage.getItem('datos'));

    if(datos != null || datos != undefined){
        if(datos.tipo == 'super'){
            header(menu[0]);
            document.querySelectorAll('.sesion').forEach(btn => {
                btn.textContent = 'salir';
            });
            $modal.innerHTML = `
            <div id="modal_errores"></div>
            <div class="modal-content center-align">
                <h5>${datos.nombre} ¿Cerrar Sesion?</h5>
                <br>
                <button type="button" class="btn waves-effect waves-light" id="logout">Salir</button>
            </div>
            `;
            logout();
            return true;
        }
    }else{
        header(menu[1]);
        document.querySelectorAll('.sesion').forEach(btn => {
            btn.textContent = 'ingresar';
        });
        $modal.innerHTML = `
        <div id="modal_errores"></div>
        <div class="modal-content">        
            <form id="login">
                <div class="row">                
                    <div class="input-field col s12">
                        <input name="usuario" type="text" class="validate">
                        <label for="usuario">Usuario o Mail</label>
                    </div>
                    <div class="input-field col s12">
                        <input name="contra" type="password" class="validate">
                        <label for="contra">Contraseña</label>
                    </div>
                    <div class="input-field col s12 center-align">
                        <button type="submit" class="btn waves-effect waves-light">¡Ingresar!</button>
                    </div>
                </div>
            </form>
        </div>
        `;
        login();
        return false;
    }
}