export function alertaRemove($alerta, html, colores, duracion){
for(let i = 0; i < $alerta.length; i++){
    removeItem($alerta[i], html, colores, duracion);
}
    /*duracion = duracion*1000;
    const tiempo = 450;
    setTimeout(() => {
        $alerta.classList.add('out');
    }, tiempo);

    setTimeout(() => {
        $alerta.innerHTML = html;
        $alerta.removeAttribute('class'); $alerta.classList.add('alerta');
        colores.forEach(color => {
            $alerta.classList.add(color);
        });
    }, tiempo*2);

    setTimeout(() => {
        $alerta.classList.add('out');
    }, tiempo*2 + duracion);

    setTimeout(() => {
        $alerta.remove();
    }, tiempo*3 + duracion);*/
}

function removeItem($alerta, html, colores, duracion){
    duracion = duracion*1000;
    const tiempo = 450;
    setTimeout(() => {
        $alerta.classList.add('out');
    }, tiempo);

    setTimeout(() => {
        $alerta.innerHTML = html;
        $alerta.removeAttribute('class'); $alerta.classList.add('alerta');
        colores.forEach(color => {
            $alerta.classList.add(color);
        });
    }, tiempo*2);

    setTimeout(() => {
        $alerta.classList.add('out');
    }, tiempo*2 + duracion);

    setTimeout(() => {
        $alerta.remove();
    }, tiempo*3 + duracion);
}