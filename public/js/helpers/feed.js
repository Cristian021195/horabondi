import {cards} from './cards.js';
export function feed(){
    if(localStorage.getItem('publicaciones') != null){
        let publicaciones = JSON.parse(localStorage.getItem('publicaciones'));
        if(publicaciones.length > 0){        
            cards(publicaciones);
        }else{
            fetch('/app/ajax/check-update.php')
            .then(res => {return res.text()})
            .then(res => {
                if(res == localStorage.getItem('key_version')){
    
                }else{
                    alerta('<h6>¡Actualizando Horarios, Espere!</h6>', ['amber','darken-3']);
                    fetch('/app/ajax/horarios/listado-horarios.php')
                    .then(horarios => {return horarios.json()})
                    .then(horarios => {
                        const size_views = horarios[0].length;
                        horarios[0].forEach((tabla, indice) =>{
                            localStorage.setItem(tabla,  JSON.stringify(horarios[indice + 1]));
                        });
                        localStorage.setItem('key_version', res);
                        alertaRemove(document.querySelector('.alerta'), '<h6>¡Horarios Actualizados Correctamente!</h6>', ['green','accent-3'],3);
    
                        let publicaciones = JSON.parse(localStorage.getItem('publicaciones'));
                        cards(publicaciones);
                    })
                }
            })
            /*fetch('/ajax/publicaciones/listado-publicaciones.php')
            .then(res => {return res.json()})
            .then(res => {
                cards(res);
            });*/
        }
    }
}