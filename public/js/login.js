import {alertaValidate} from './helpers/alerta-validate.js';
export function login(){
    const $login = document.getElementById('login');
    const $errores = document.getElementById('modal_errores');

    $login.addEventListener('submit', (e)=>{
        e.preventDefault();

        const datos = new FormData($login);
        loguear(datos);
    });

    async function loguear(datos){
        try{//bloque de ejecucion
            let respuesta = await fetch('/ajax/login.php',{
                method: 'POST',
                body: datos
            });//guardamos la respuesta de fetch que demora en respuesta
            let data = await respuesta.json();//la respuesta es convertida a json
            if(!data.error){
                datosDeUsuario(data.datos);
                window.location.reload();
            }else{
                alertaValidate($errores,[data.error], ['red','darken-3']);
            }
        }
        catch(error){//bloque de errores
            alertaValidate($errores,[error], ['red','darken-3']);
        }  
    }
    function datosDeUsuario(dato){
        localStorage.setItem('datos', JSON.stringify(dato));
    }
}