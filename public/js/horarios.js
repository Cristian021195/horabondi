import {opciones} from './helpers/ciudades.js';
export function horarios(empresa, empresas){
    //VARIABLES Y LOGICA PRINCIPAL
    let options = [];
    let main_dir;
    let text_dir;
    let rutas;

    if(empresa == 'exprebus'){
      main_dir = ['n','s'];
      text_dir = ['Norte', 'Sur'];
      rutas = ['38', '301'];
    }else if(empresa == 'tesa'){
      main_dir = ['n','s'];
      text_dir = ['Norte', 'Sur'];
      rutas = ['38'];
    }else if(empresa == 'gutierrez'){
      main_dir = ['e','o'];
      text_dir = ['Este', 'Oeste'];
      rutas = ['329'];
    }

    empresas.forEach(empr => {
        if(empr.sentido == main_dir[0]+main_dir[1]){
          options = empr.ciudades;
        }
    });

    //FILTRADO POR EMPRESA
    if(empresa == 'tesa'){
      options = options.filter(elem => elem !== 'santa ana' && elem !== 'rio huacra');
    }else if(empresa == 'exprebus'){}

    //CREACION DE FORMULARIO
    const $form = document.createElement('form'); $form.id = 'horarios';

    $form.innerHTML = `

    <div id="errores"></div>
    <div class="input-field col s6">
      <select name="dias">
        <option value="" disabled selected>Dias</option>
        <option value="hab">habiles</option>
        <option value="sab">sabados</option>
        <option value="dom">domingos y feriados</option>
      </select>
    </div>
  
    <div class="input-field col s6">
        <select name="ruta" id="ruta">
          <option value="" disabled selected>Ruta</option>
          ${opcionesDeRutas(rutas)}
        </select>
    </div>

    <div class="input-field col s6">
        <select name="origen" id="origen">
            <option value="" disabled selected>Origen</option>
            <option value="defecto_${main_dir[0]}${main_dir[1]}">${text_dir[0]} - ${text_dir[1]}</option>
            <option value="defecto_${main_dir[1]}${main_dir[0]}">${text_dir[1]} - ${text_dir[0]}</option>
            <optgroup id="grupo_origen" class="hide" label=" "></optgroup>
        </select>
    </div>

    <div class="input-field col s6">
        <select name="destino" id="destino">
            <option value="" disabled selected>Destino</option>
            <optgroup id="grupo_destino" class="hide" label=" "></optgroup>
        </select>
    </div>

    <div class="input-field col s6">
        <select name="tipo">
            <option value="" disabled selected>Tipo de Viaje</option>
            <option value="todos">Todos</option>
            <option value="comun">Comun</option>
            <option value="expreso">Expreso</option>
        </select>
    </div>
    <div class="input-field col s3">
        <h6>Horario</h6>
    </div>
    <div class="input-field col s3">
      <input type="time" name="hora" value="00:00:00" class="validate">
      <input value="${empresa.substring(0,3)}" type="hidden" name="empresa">
      <input value="${main_dir[0]}${main_dir[1]}" type="hidden" name="sentido">
    </div>
    
    <div class="input-field col s12 center-align">
      <button type="submit" class="btn waves-effect waves-light">¡Buscar!</button>
    </div>
    <div id="sectionSecond"></div>
    `;
    return $form;
}

//style="color:#4a4c4e;"
function opcionesDeRutas(rutas){
    let html = '';
    rutas.forEach(ruta => {
        html+= `<option value="${ruta}">${ruta}</option>`
    })
    return html;
}

function opcionesDeCiudades(ciudades){
    let html = '';
    ciudades.forEach((ciudad, index) => {
        html+= `<option value="${index}">${ciudad}</option>`
    })
    return html;
}