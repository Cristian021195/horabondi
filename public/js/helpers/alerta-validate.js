export function alertaValidate(reference, errores, colores){
    reference.innerHTML = '';
    let tiempo = errores.length * 1500;
    const $div = document.createElement('div'); $div.classList.add('validate');

    $div.addEventListener('click', ()=>{
        esconder($div);
    })

    if(document.querySelector('.horarios') != null){
        document.querySelector('.horarios').classList.add('out');
        setTimeout(() => {
            document.querySelector('.horarios').classList.remove('horarios');    
        }, 450);        
    }    

    colores.forEach(color => {
        $div.classList.add(color);
    });

    errores.forEach((error, indice) => {
        if(errores.length == indice){
            $div.innerHTML += error;
        }else{
            $div.innerHTML += error+'<br>';
        }
        
    })    
    //document.getElementById('errores').appendChild($div);
    reference.appendChild($div);

    if(!isNaN(tiempo)){
        setTimeout(() => {
            //$div.remove();
            $div.classList.add('out');
        }, tiempo);
    
        setTimeout(() => {
            $div.remove();
        }, tiempo+450);
    }
}

function esconder($div){
    if($div != null){
        $div.classList.add('out');
        setTimeout(() => {
            $div.remove();
        }, 450);
    }
}