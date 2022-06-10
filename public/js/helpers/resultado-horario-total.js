export function resultadoHorarioTotal(horarios_arr, ciudades, hora, tipo, sentido, empresa){

    if(hora.length == 5){
        hora = hora+':00';
    }    

    const $trh = document.createElement('tr');
    const $table = document.createElement('table'); $table.classList.add('salteado','centered','bounceIn', `${empresa}-hover`);
    const $thead = document.createElement('thead'); const $tbody = document.createElement('tbody');

    let hora_cond = Date.parse(`01/01/2020 ${hora}`);
    let ult_col = ciudades.length - 1;

    let extremo;
    if(sentido == 'ns' || sentido == 'eo'){
        extremo = 0;
    }else if(sentido == 'sn' || sentido == 'oe'){
        extremo = ult_col - 1; //porque esta la columna expreso
    }

    ciudades.forEach(ciudad=>{
        const $th = document.createElement('th'); $th.textContent = ciudad; //$th.setAttribute('style','background-color: rgba(255,255,255,1); opacity: none; z-index: 1000')
        $trh.appendChild($th);
    })
    $thead.appendChild($trh);

    horarios_arr.forEach((horario_arr) => {
        let $tr = document.createElement('tr');

        if(hora != '00:00:00'){
            horario_arr.forEach((horario, indice) => {
                if(Date.parse(horario_arr[extremo]) > hora_cond){
                    let $td = document.createElement('td');
                    if(tipo == 'todos'){                    
                        if(indice < ult_col){
                            let hora = new Date(horario);
                            $td.setAttribute('title', ciudades[indice]);
                            if(horario == null){
                                $td.textContent = '';
                            }else{
                                $td.textContent = `${hora.getHours() < 10 ? '0'+hora.getHours() : '' + hora.getHours()}:${hora.getMinutes() < 10 ? '0'+hora.getMinutes() : '' + hora.getMinutes()}`;
                            }                
                            $tr.appendChild($td);
                        }else{
                            $td.textContent = horario;
                            $tr.appendChild($td);
                        }
                    }else{
                        if(horario_arr[ult_col] == tipo){
                            if(indice < ult_col){
                                let hora = new Date(horario);
                                $td.setAttribute('title', ciudades[indice]);
                                if(horario == null){
                                    $td.textContent = '';
                                }else{
                                    $td.textContent = `${hora.getHours() < 10 ? '0'+hora.getHours() : '' + hora.getHours()}:${hora.getMinutes() < 10 ? '0'+hora.getMinutes() : '' + hora.getMinutes()}`;
                                }                
                                $tr.appendChild($td);
                            }else{
                                $td.textContent = horario;
                                $tr.appendChild($td);
                            }
                        }
                    }
                }  
            })
        }else{
            horario_arr.forEach((horario, indice) => {
                let $td = document.createElement('td');
                if(tipo == 'todos'){                    
                    if(indice < ult_col){
                        let hora = new Date(horario);
                        $td.setAttribute('title', ciudades[indice]);
                        if(horario == null){
                            $td.textContent = '';
                        }else{
                            $td.textContent = `${hora.getHours() < 10 ? '0'+hora.getHours() : '' + hora.getHours()}:${hora.getMinutes() < 10 ? '0'+hora.getMinutes() : '' + hora.getMinutes()}`;
                        }                
                        $tr.appendChild($td);
                    }else{
                        $td.textContent = horario;
                        $tr.appendChild($td);
                    }
                }else{
                    if(horario_arr[ult_col] == tipo){
                        if(indice < ult_col){
                            let hora = new Date(horario);
                            $td.setAttribute('title', ciudades[indice]);
                            if(horario == null){
                                $td.textContent = '';
                            }else{
                                $td.textContent = `${hora.getHours() < 10 ? '0'+hora.getHours() : '' + hora.getHours()}:${hora.getMinutes() < 10 ? '0'+hora.getMinutes() : '' + hora.getMinutes()}`;
                            }                
                            $tr.appendChild($td);
                        }else{
                            $td.textContent = horario;
                            $tr.appendChild($td);
                        }
                    }
                }
            })
        }
        
        $tbody.appendChild($tr);
    });

    $table.appendChild($thead);
    $table.appendChild($tbody);
    return $table;
}