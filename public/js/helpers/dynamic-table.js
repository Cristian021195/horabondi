export function resultadoHorario(horarios_origen, horarios_destino, hora, origen, destino){
    const $table = document.createElement('table'); $table.classList.add('striped'); $table.classList.add('centered'); $table.classList.add('bounceIn');
    const $thead = document.createElement('thead'); const $tbody = document.createElement('tbody');

    let hora_cond = Date.parse(`01/01/2020 ${hora}:00`);

    $thead.innerHTML = `<tr><th>${origen}</th><th>${destino}</th></tr>`;

    horarios_origen.forEach((horario_origen, indice) => {
        let hora_origen = new Date(horario_origen);
        let hora_destino = new Date(horarios_destino[indice]);

        if(horarios_destino[indice] != null){
            if(hora_cond <= Date.parse(horario_origen)){
                let $tr = document.createElement('tr');
                $tr.innerHTML = `<td>${hora_origen.getHours() < 10 ? '0'+hora_origen.getHours() : '' + hora_origen.getHours()}:${hora_origen.getMinutes() < 10 ? '0'+hora_origen.getMinutes() : '' + hora_origen.getMinutes()}</td>
                <td>${hora_destino.getHours() < 10 ? '0'+hora_destino.getHours() : '' + hora_destino.getHours()}:${hora_destino.getMinutes() < 10 ? '0'+hora_destino.getMinutes() : '' + hora_destino.getMinutes()}</td>`;
                $tbody.appendChild($tr);
            }
        }        
    });



    $table.appendChild($thead);
    $table.appendChild($tbody);
    return $table;
}