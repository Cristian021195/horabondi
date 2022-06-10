export function resultadoPrecios(valores, origen, destino){
    //DOM
    const $container = document.createElement('div'); $container.classList.add('col', 'valign-wrapper', 'bounceIn', 'offset-s4','s6');
    const $span = document.createElement('span'); $span.classList.add('white-text', 'text-darken1', 'pulse');
    

    let result;
    let res;

    valores.forEach(fila => {
        if(fila.id == origen){
            result = fila;
        }
    });

    for (const property in result) {
        if(property == destino){
            res = result[property];
        }
    }

    $span.innerHTML = `<h1>$${res || ''}</h1>`;
    $container.appendChild($span);

    return $container;
}