export function buscarPrecio(empresa, empresas){
    //VARIABLES DOM    
    const $form = document.createElement('form'); $form.id = 'precios';

    //VARIABLES GLOBALES
    let options = [];
    let rutas;
    let main_dir;

    if(empresa == 'exprebus'){
        main_dir = 'ns';
        rutas = ['38', '301'];
    }else if(empresa == 'tesa'){
        main_dir = 'ns';
        rutas = ['38'];
    }else if(empresa == 'gutierrez'){
        main_dir = 'eo';
        rutas = ['329'];
    }

    empresas.forEach(empr => {
        if(empr.sentido == main_dir){
          options = empr.ciudades;
        }
    });

    //FILTRADO POR EMPRESA
    if(empresa == 'tesa'){
        options = options.filter(elem => elem !== 'santa ana' && elem !== 'rio huacra');
    }

    $form.innerHTML = `
    
    <div id="errores"></div>
    <div class="input-field col s2">
        <h6>Ruta</h6>
    </div>
    <div class="input-field col s4">
        <select name="ruta" id="ruta">
            <option value="" disabled selected>Ruta</option>
            ${opcionesDeRutas(rutas)}
        </select>
    </div>

    <div class="input-field col s2">
        <h6>Origen</h6>
    </div>
    <div class="input-field col s4">
        <select name="origen" id="origen">
        </select>
    </div>

    <div class="input-field col s2">
        <h6>Destino</h6>
    </div>
    <div class="input-field col s4">
        <select name="destino" id="destino">
        </select>
    </div>

    <div class="input-field col s6 center-align">
        <input value="${empresa.substring(0,3)}" type="hidden" name="empresa">
        <button type="submit" class="btn waves-effect waves-light">¡Buscar!</button>
    </div>
    
    `;

    /*
    <div class="input-field col s12 center-align">
      <input type="submit" class="waves-effect waves-light btn" value="¡Buscar!">
    </div>
    */

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
        html+= `<option value="${ciudad}">${ciudad}</option>`
    })
    return html;
}