export function alerta(mensaje, colores, tiempo){
    tiempo = tiempo * 1000;
    const $div = document.createElement('div'); $div.classList.add('alerta');

    colores.forEach(color => {
        $div.classList.add(color);
    });
    $div.innerHTML = mensaje;
    document.querySelector('body').appendChild($div);

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