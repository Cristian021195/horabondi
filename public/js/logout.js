import {alertaValidate} from './helpers/alerta-validate.js';
export function logout(){
    const $logout = document.getElementById('logout');
    const $errores = document.getElementById('modal_errores');

    $logout.addEventListener('click', ()=>{

        fetch('/ajax/logout.php')
        .then(data => {return data.json()})
        .then(data => {
            if(!data.error){
                localStorage.removeItem('datos');
                window.location.reload();
            }else{
                alertaValidate($errores,[data.error], ['red','darken-3']);
            }
        })
        .catch(error => {
            alertaValidate($errores,[error], ['red','darken-3']);
        })

    });
}