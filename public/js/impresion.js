import {opciones} from './helpers/ciudades.js';
export function impresion(empresa, empresas){
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
    const $form = document.createElement('form'); $form.id = 'impresion';

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
    <div class="input-field col s12 center-align">
      <button type="submit" class="btn waves-effect waves-light">IMPRIMIR <i class="material-icons">local_printshop</i></button>
    </div>
    <div id="sectionSecond"></div>
    `;
    return $form;
}


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