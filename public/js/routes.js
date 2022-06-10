import {tablaDinamica} from './helpers/tablas/tabla-dinamica.js';
import {resultadoHorario} from './helpers/dynamic-table.js';
import {resultadoPrecios} from './helpers/resultado-precios.js';
import {resultadoHorarioTotal} from './helpers/resultado-horario-total.js';
import {alertaValidate} from './helpers/alerta-validate.js';
import {horarios} from './horarios.js';
import {impresion} from './impresion.js'
import {buscarPrecio} from './helpers/precios.js';
import {feed} from './helpers/feed.js';
import {opciones} from './helpers/ciudades.js';
import {opcionesDeCiudades} from './helpers/opciones-ciudades.js';
import {cards} from './helpers/cards.js';
import { modoNoche } from './helpers/modoNoche.js';
import {user} from './helpers/user.js';
import { notFoundView } from './views/notFoundView.js';
import { serverError } from './views/serverError.js';
import { checkUpdate } from './helpers/checkupdate.js';
export function routes(){
    //VARIABLES PARA FORMULARIO
    const empresas = [
        {
            sentido: 'ns',
            ciudades: [
                'tucuman',
                'famailla',
                'monteros',
                'concepcion',
                'aguilares',
                'santa ana',
                'alberdi',
                'la cocha',
                'los pizarros',
                'rio huacra'
            ]
        },
        {
            sentido: 'eo',
            ciudades: [
                'monteagudo',
                'medinas',
                'trinidad',
                'concepcion'
            ]
        }
    ]
    //RUTAS
    page('/:empresa/impresion', impresiones);
    page('/:empresa/horarios', horarioAB);
    page('', inicio); 
    page('/:empresa/precios', precios);      
    /*page('/hora-bondi/administracion/horarios', admHorario);*/
    page('/administracion/precio', admPrecio);
    page('/administracion/publicaciones', admPublicacion);
    page('/administracion/crud-publicaciones', admPublicaciones);
    page('/extra/configuracion', configuracion);
    page('/extra/contacto', contacto);
    page('/administracion/publicaciones/eliminar/:id', eliminarPublicacion);
    page('/administracion/publicaciones/editar/:id', editarPublicacion);
    page('/:empresa/publicaciones', publicaciones);
    page('/:empresa/publicaciones/:id', publicacion);
    ///hora-bondi/administracion/publicaciones
    page('*', notfound);
    page();

    function notfound(){
        setTitleAndColor('Error 404');
        document.getElementById('main').innerHTML = '';
        document.getElementById('main').innerHTML = `
        <div class="container">
            <h2 class="red-text darken-1 center">¡Ruta incorrecta!</h2><br><hr>
            <p class="center grey-text"><b>Por favor, introduzca una ruta valida.</b></p>
        </div>`;
        animacion();
    }

    function configuracion(){

        setTitleAndColor('Configuracion');
        document.getElementById('main').innerHTML = '';
        document.getElementById('main').innerHTML = `
        <form id="configuracion">
            <div id="errores"></div>
            <div class="input-field col offset-s3 s6">
            <select name="nightmode">
                <option value="" disabled selected>Modo Noche</option>
                <option value="true">habilitado</option>
                <option value="false">deshabilitado</option>
            </select>
            </div>
            <div class="input-field col s12 center-align">
                <button type="submit" class="btn waves-effect waves-light">Guardar</button>
            </div>
        </form>
        `;

        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems, {});

        const $form = document.getElementById('configuracion');
        $form.addEventListener('submit',e=>{
            e.preventDefault();
            let datos = new FormData($form);
            let config = Object.fromEntries(datos.entries());
            localStorage.setItem('configuracion', JSON.stringify(config));
            modoNoche();
        })
        animacion();
    }

    function contacto(){
        setTitleAndColor('Contacto');

        document.getElementById('main').innerHTML = '';
        document.getElementById('main').innerHTML = `
        <div class="container">
            <h2 class="text-blue lighten-1 center">Contacto <i class="material-icons">contact_mail</i></h2>
            <h4 class="center"><a href="https://www.facebook.com/cristianismael.gramajo" target="_blank">Facebook <i class="fab fa-facebook-square" aria-hidden="true"></i></a></h4>
            <h4 class="center"><a href="https://twitter.com/Cristian021195" target="_blank">Twitter <i class="fab fa-twitter-square" aria-hidden="true"></i></a></h4>
            <h4 class="center"><a href="mailto:cristiangramajo015@gmail.com" target="_blank">Gmail <i class="fas fa-envelope-square" aria-hidden="true"></i></a></h4>
            <p class="center"><button class="waves-effect waves-light btn" id="compartir">Compartir <i class="material-icons">share</i></button></p>
            <br>
            <hr>
            <p class="center grey-text"><b><i class="fas fa-user-tie" aria-hidden="true"></i> Cristian Ismael Gramajo - Todos los derechos reservados - Aguilares Tucumán.</b></p>
        </div>`;

        const $compartir = document.getElementById('compartir');
        $compartir.addEventListener('click', compartir)

        function compartir(){
            if('share' in navigator){
                navigator.share({
                    title: '¡Comparte HoraBondi a un amigo!',
                    text: '',
                    url: location.origin
                }).then(()=>{
                    M.toast({html: '¡Compartido!'})
                }).catch(err=>{
                    console.log(err.message || 'error');
                })
            }else{
                M.toast({html: 'Este navegador no soporta la opcion Compartir'})
            }
        }
        animacion();
    }


    function impresiones(empresa){
        setTitleAndColor(empresa.params.empresa);        

        //DOM GLOBALES
        const $body = document.getElementsByTagName('body')[0];
        const $clone_body = $body.cloneNode(true);
        const $impresion = impresion(empresa.params.empresa, empresas);

        document.getElementById('main').innerHTML = '';
        document.getElementById('main').appendChild($impresion);
        const $errores = document.getElementById('errores');

        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems, {});

        $impresion.addEventListener('submit',(e)=>{
            e.preventDefault();
            const datos = new FormData($impresion);

            let seccionA = null;
            let seccionB = null;
            const errores = [];
            if(datos.get('ruta') == null){
                errores.push(`<b>¡Error!</b> ¡Seleccionar ruta!`);
            }
            if(datos.get('dias') == null){
                errores.push(`<b>¡Error!</b> ¡Seleccionar dias!`);
            }

            if(empresa.params.empresa == 'gutierrez'){
                seccionA = localStorage.getItem(`vista-${empresa.params.empresa.substr(0,3)}-${datos.get('ruta')}-${datos.get('dias')}-eo`);
                seccionB = localStorage.getItem(`vista-${empresa.params.empresa.substr(0,3)}-${datos.get('ruta')}-${datos.get('dias')}-oe`);
            }else{
                seccionA = localStorage.getItem(`vista-${empresa.params.empresa.substr(0,3)}-${datos.get('ruta')}-${datos.get('dias')}-ns`);
                seccionB = localStorage.getItem(`vista-${empresa.params.empresa.substr(0,3)}-${datos.get('ruta')}-${datos.get('dias')}-sn`);
            }
            if(seccionA == null && seccionB == null){
                errores.push('<b>¡Alerta!</b> ¡Los horarios aun no estan disponibles!');
                alertaValidate($errores,errores, ['orange','darken-1']);
            }else{
                let $tabla1 = tablaDinamica(seccionA, `${empresa.params.empresa.toUpperCase()} (${datos.get('dias').toUpperCase()}) , RUTA: ${datos.get('ruta')}`);
                let $tabla2 = tablaDinamica(seccionB, `${empresa.params.empresa.toUpperCase()} (${datos.get('dias').toUpperCase()}) , RUTA: ${datos.get('ruta')}`);
                $body.appendChild($tabla1); $body.appendChild($tabla2);
                document.getElementsByTagName('main')[0].style.display = 'none';
                document.getElementById('navbar-fixed').style.display = 'none';
                document.getElementById('slide-out').style.display = 'none';

                window.print();
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    setTimeout(() => {
                        document.querySelectorAll('.corte').forEach(corte=>corte.remove());
                        document.getElementsByTagName('main')[0].style.display = 'block';
                        document.getElementById('navbar-fixed').style.display = 'block';
                        document.getElementById('slide-out').style.display = 'block';
                    }, 1000);
                }
            }
            //auxiliares
        })

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) == false) {//expresion regular evalua navegador
            window.addEventListener('afterprint', (e)=>{
                document.querySelectorAll('.corte').forEach(corte=>corte.remove());
                document.getElementsByTagName('main')[0].style.display = 'block';
                document.getElementById('navbar-fixed').style.display = 'block';
                document.getElementById('slide-out').style.display = 'block';
            })
        }
        animacion();
    }


    function eliminarPublicacion(id){
        user().then(res=>{
            if(res){
                let datos = new FormData(); datos.append('id', id.params.id);
                fetch('/ajax/publicaciones/eliminar-publicacion.php', {
                    method:'POST',
                    body: datos
                })
                .then(res =>{return res.json()})
                .then(res => {
                    if(!res.error){
                        alertify.success('¡Publicacion eliminada!');
                    }else{
                        alertify.error('¡Error!');
                    }
                });
            }else{
                alertify.error('¡Sin permisos!');
            }
        }).catch(err=>{console.error(err); alertify.error('¡Error de servidor!');});
    }
    function editarPublicacion(id){
        user().then(res=>{
            if(res){
                let datos = new FormData(); datos.append('id', id.params.id);
                fetch('/ajax/publicaciones/obtener-publicacion.php', {
                    method:'POST',
                    body: datos
                })
                .then(res =>{return res.json()})
                .then(res => {
                    if(res.length > 0){
                        admPublicaion(res[0]);
                    }else{
                        alertify.error('¡Error al traer publicacion!');
                    }
                });
            }else{
                alertify.error('¡Sin permisos!');
            }
        }).catch(err=>{console.error(err); alertify.error('¡Error de servidor!');});
    }

    function admPublicaciones(){
        user().then(res=>{
            if(res){
                adminOptions('administracion');
                document.getElementById('main').innerHTML = '';
                const $row = document.createElement('div'); $row.classList.add('row'); 
                const $div = document.createElement('div'); $div.classList.add('table-responsive'); $div.innerHTML = '';
                fetch('/ajax/publicaciones/listado-publicaciones.php')
                .then(res => {return res.json()})
                .then(res => {
                    $div.innerHTML = `<table>
                                        <thead>
                                            <tr><th>EMPRESA</th><th>PUBLICACION</th><th>ELIMINAR</th></tr>
                                        </thead>
                                        <tbody>
                                            ${res.map(dat=>`<tr><td>${dat.empresa}</td><td>${dat.publicacion}</td><td><button class="eliminar" data-id="${dat.id}">🗑️</button></td></tr>`)}
                                        </tbody>
                                        </table>`;

                }).catch+(err=>{
                    alert('¡Error de servidor o conexion bbdd!');
                })
                $row.appendChild($div);
                document.getElementById('main').appendChild($row);
                $row.addEventListener('click', (e)=>{
                    if(e.target.classList.contains('eliminar')){
                        let id_eliminar = e.target.dataset.id;
                        let datos = new FormData();
                        datos.append('id', id_eliminar);
                        fetch('/ajax/publicaciones/eliminar-publicacion.php', {
                            method:'POST',
                            body: datos
                        })
                        .then(res=>res.json())
                        .then(res=>{
                            if(!res.error){
                                e.target.parentNode.parentNode.remove();
                            }else{
                                alert('error al eliminar')
                            }
                        }).catch(err=>{
                            alert('¡Error de servidor o conexion bbdd!');
                        })
                    }
                })
                animacion();
            }else{
                adminOptions('Error 404');
                notFoundView();
                animacion();
            }
        }).catch(err=>{console.error(err); serverError();animacion();})
    }

    function publicaciones(empresa){
        setTitleAndColor(empresa.params.empresa);
        let posteos = JSON.parse(localStorage.getItem('publicaciones'));
        let posts = posteos.reverse();
        let filter_posts = posts.filter(post => post.empresa == empresa.params.empresa);
        cards(filter_posts);
    }

    function publicacion(empresa){
        let posteo;
        setTitleAndColor(empresa.params.empresa);
        document.getElementById('main').innerHTML = '';

        let posteos = JSON.parse(localStorage.getItem('publicaciones'));

        posteos.forEach(post => {
            if(post.id == empresa.params.id){
                posteo = post;
            }
        })

        if(posteo.empresa == empresa.params.empresa){
            document.getElementById('main').innerHTML = `
            <div class="col s12">
            <div class="card">
                <div class="card-image">
                    <img src="/public/img/svg/${posteo.empresa}-full.svg" width="150px" height="150px">
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <p>${posteo.publicacion}</p>
                        <br>
                        <i>Publicado el: ${posteo.fecha}</i>
                    </div>
                </div>
            </div>
            </div>
            `;
        }else{
            document.getElementById('main').innerHTML = `
            <div class="container">
                <h2 class="red-text darken-1 center">¡Recurso no valido!</h2><br><hr>
                <p class="center grey-text"><b>Por favor, introduzca una ruta valida.</b></p>
            </div>`;
        }        
        animacion();
    }

    function inicio(){
        //user().then(res=>console.log('sesion?',res))
        adminOptions('Hora Bondi');
        feed();
    }
    function admPrecio(){
        user().then(res=>{
            if(res){
                adminOptions('administracion'); document.getElementById('main').innerHTML = '';
                const $row = document.createElement('div'); $row.classList.add('row'); const $modal = document.getElementById('modal2');
                $modal.innerHTML = `
                    <div id="modal_errores"></div>
                    <div class="modal-content">
                        <form id="login">
                                <div class="row">
                                    <div class="input-field col s6 offset-s3">
                                    <select>
                                        <option value="oficial">Oficial</option>
                                        <option value="exprebus">Exprebus</option>
                                        <option value="tesa">Tesa</option>
                                        <option value="gutierrez">Gutierrez</option>
                                    </select>
                                    <label>Empresa</label>
                                    <div class="input-field col s6 offset-s3">
                                    <select>
                                        <option value="38">38</option>
                                        <option value="301">301</option>
                                        <option value="329">329</option>
                                        <option value="329">65</option>
                                    </select>
                                    <label>Rutas</label>
                                </div>
                                <div class="input-field col s12 center-align">
                                    <button type="submit" class="btn waves-effect waves-light">¡Buscar!</button>
                                </div>
                            </div>
                        </form>
                    </div>`;
                $row.innerHTML = `
                    <div class="col s12 center-align">
                        <button class="btn modal-trigger mr-2" data-target="modal2">Buscar Empresa</button>
                    </div>`;
                document.getElementById('main').appendChild($row);
                var elems = document.querySelectorAll('select');
                var instances = M.FormSelect.init(elems, {});
                animacion();
            }else{
                setTitleAndColor('Error 404');
                notFoundView();
                animacion();
            }
        }).catch(err=>{console.error(err); serverError();animacion();})
        
    }

    function admPublicacion(publicacion){
        user().then(res=>{
            if(res){
                adminOptions('administracion');
                document.getElementById('main').innerHTML = '';
                const $row = document.createElement('div'); $row.classList.add('row');
                            // Math.PI > 4 ? "Sip" : "Nop";
                $row.innerHTML = `
                    <form class="col s12" id="publicacion">
                        <div class="row">
                            <div id="errores"></div>
                            <div class="input-field col s6 offset-s3">
                                <select name="empresa" id="empresa">
                                    <option value="oficial">Oficial</option>
                                    <option value="exprebus">Exprebus</option>
                                    <option value="tesa">Tesa</option>
                                    <option value="gutierrez">Gutierrez</option>
                                </select>
                                <label>Empresa</label>
                            </div>
                            <div class="input-field col s12">
                                <textarea name="publicacion" id="publicacion" class="materialize-textarea" maxlength="255">${publicacion.publicacion != undefined ? publicacion.publicacion : ''}</textarea>
                                <label for="publicacion">Publicacion</label>
                            </div>
                            <div class="input-field col s12 center-align">
                                <input type="hidden" name="id" value="${publicacion.id != undefined ? publicacion.id : publicacion.id}">
                                <button type="submit" class="btn waves-effect waves-light">¡Publicar!</button>
                            </div>
                        </div>
                    </form>
                `;
                document.getElementById('main').appendChild($row);
                const $errores = document.getElementById('errores');
                var elems = document.querySelectorAll('select');
                var instances = M.FormSelect.init(elems, {});

                const $publicacion = document.getElementById('publicacion');
                $publicacion.addEventListener('submit', (e)=>{
                    e.preventDefault();
                    const datos = new FormData($publicacion);

                    fetch('/ajax/publicaciones/cargar-publicacion.php', {
                        method:'POST',
                        body:datos
                    })
                    .then(res => {return res.json()})
                    .then(res => {
                        if(!res.error){
                            localStorage.setItem('key_publicaciones', res.key_publicaciones);

                            const publicaciones = JSON.parse(localStorage.getItem('publicaciones'));
                            const _publicaciones = [];
                            publicaciones.forEach(pub => {
                                if(pub.id == res.id){
                                    pub.id = res.id; pub.empresa = res.empresa; pub.publicacion = res.publicacion;
                                    _publicaciones.push(pub);
                                }else{
                                    _publicaciones.push(pub);
                                }
                            })
                            localStorage.setItem('publicaciones', JSON.stringify(_publicaciones));
                            checkUpdate();
                            alert('¡Publicacion creada!');

                            //inicio();
                        }else{
                            alertaValidate($errores,[res.mensaje], ['red','darken-3']);
                        }
                    }).catch(err=>{
                        alert('Error de servidor / conexion con bbdd');
                    });
                });
                animacion();
            }else{
                setTitleAndColor('Error 404');
                notFoundView();
                animacion();
            }
        });        
    }
    function precios(empresa){
        setTitleAndColor(empresa.params.empresa);
        //DOM GLOBALES
        const $precios = buscarPrecio(empresa.params.empresa, empresas);
        const $main = document.getElementById('main');
        $main.innerHTML = '';
        $main.appendChild($precios);

        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems, {});
        const $errores = document.getElementById('errores');
        animacion();

        document.getElementById('ruta').addEventListener('change', (e)=>{
            let seleccion = `${empresa.params.empresa}-${e.target.value}`;
            document.getElementById('origen').innerHTML = ''; document.getElementById('destino').innerHTML = '';
            
            document.getElementById('origen').appendChild(opcionesDeCiudades(opciones, seleccion, 'precios'))
            document.getElementById('destino').appendChild(opcionesDeCiudades(opciones, seleccion, 'precios'));
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, {});
        });

        $precios.addEventListener('submit', (e)=>{
            e.preventDefault();

            const datos = new FormData($precios);
            //auxiliares
            let origen_text = datos.get('origen');
            let destino_text = datos.get('destino');

            const errores = [];

            let empresa = datos.get('empresa');
            let ruta = datos.get('ruta');
            let tabla = '';
            let valores;

            //VALIDACIONES
            if(ruta == null){
                errores.push('<b>¡Error!</b> ¡Seleccionar ruta!');
            }
            if(origen_text == null){
                errores.push('<b>¡Error!</b> ¡ingresar un origen!');
            }
            if(destino_text == null){
                errores.push('<b>¡Error!</b> ¡ingresar un origen!');
            }
            if(origen_text == destino_text){
                errores.push('<b>¡Error!</b> ¡No pueden usar mismo origen y destino!');
            }


            if(errores.length == 0){                
                tabla = `${empresa}-${ruta}-precio`;
                valores = JSON.parse(localStorage.getItem(tabla));
                if(valores != null){
                    if($precios.nextElementSibling != null){
                        $precios.nextElementSibling.remove();
                    }                    
                    //document.getElementById('precios').insertAdjacentElement('afterend',resultadoPrecios(valores, origen_text, destino_text));
                    let html = `
                        <div class="col s12"><h4>Precio: </h4></div>
                        <div class="col s12" id="precio1"></div>
                        <div class="col s12"><h4>Precio Abono: </h4></div>
                        <div class="col s12" id="precio2"></div>
                    `;
                    let $row_center = document.createElement('div'); $row_center.classList.add('row','center-align','row-center'); $row_center.innerHTML = html; 
                    const configuracion = JSON.parse(localStorage.getItem('configuracion'));
                    if(configuracion !== null && configuracion.nightmode==='true'){
                        $row_center.classList.add('noche');
                    }


                    $precios.insertAdjacentElement('afterend',$row_center);
                    
                    $main.querySelector('#precio1').appendChild(resultadoPrecios(valores, origen_text, destino_text));
                    $main.querySelector('#precio2').appendChild(resultadoPrecios(valores, origen_text, destino_text));
                }else{
                    alertaValidate($errores,['<b>¡Error!</b> ¡El listado de precios no esta disponible, actualize la aplicación!'], ['red','darken-3']);
                }
            }else{
                alertaValidate($errores,errores, ['red','darken-3']);
            }


        });
    }

    function horarioAB(empresa){
        setTitleAndColor(empresa.params.empresa);
        //DOM GLOBALES
        const $horarios = horarios(empresa.params.empresa, empresas);

        document.getElementById('main').innerHTML = '';
        document.getElementById('main').appendChild($horarios);

        const $errores = document.getElementById('errores');


        document.getElementById('ruta').addEventListener('change', (e)=>{
            let seleccion = `${empresa.params.empresa}-${e.target.value}`;
            document.getElementById('grupo_origen').innerHTML = ''; document.getElementById('grupo_destino').innerHTML = '';

            document.getElementById('grupo_origen').appendChild(opcionesDeCiudades(opciones, seleccion, 'horarios'))
            document.getElementById('grupo_destino').appendChild(opcionesDeCiudades(opciones, seleccion, 'horarios'));
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, {});
        });

        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems, {});
        animacion();


        $horarios.addEventListener('submit', (e)=>{
            e.preventDefault();
            const datos = new FormData($horarios);
            const $secondSection = document.getElementById('sectionSecond');
            $secondSection.innerHTML = '';

            //auxiliares
            let origen_val = parseInt(datos.get('origen'));
            let origen_text = datos.get('origen');

            let destino_val = parseInt(datos.get('destino'));
            let destino_text = datos.get('destino');
            const errores = [];

            let sentido = datos.get('sentido');
            let empresa = datos.get('empresa');
            let hora = datos.get('hora');
            let tipo = datos.get('tipo');
            let ruta = datos.get('ruta');
            let dias = datos.get('dias');
            let tabla = '';
            let horario;

            //auxiliares de tabla
            let ciudades = [];
            let ciudades_lenght;
            let horarios_arr = [];
            let horarios_origen = [];
            let horarios_destino = [];

            //VALIDACIONES
            if(dias == null){
                errores.push('<b>¡Error!</b> ¡Seleccionar dias!');
            }
            if(ruta == null){
                errores.push('<b>¡Error!</b> ¡Seleccionar ruta!');
            }
            if(origen_text == null){
                errores.push('<b>¡Error!</b> ¡ingresar un origen!');
            }
            if(origen_text != null && destino_text == null){
                if((origen_text != 'defecto_ns' && origen_text != 'defecto_sn' && origen_text != 'defecto_eo' && origen_text != 'defecto_oe')){
                    errores.push('<b>¡Error!</b> ¡Debe ingresar un destino!');
                }                
            }
            if(tipo == null){
                errores.push('<b>¡Error!</b> ¡Ingresar el tipo de viaje!');
            }
            if(origen_val === destino_val){
                errores.push('<b>¡Error!</b> ¡No pueden usar mismo origen y destino!');
            }
            if(hora == ''){
                hora = '00:00';
            }

            //console.log(hora);


            if(errores.length == 0){
                //EVALUAMOS DIRECCION - de esta manera podemos elegir a que archivo .json hacer dicha consulta.
                if((origen_text != 'defecto_ns' && origen_text != 'defecto_sn' && origen_text != 'defecto_eo' && origen_text != 'defecto_oe')){
                    if(origen_val === destino_val){
                        alertaValidate($errores,'<b>¡Error!</b> ¡No pueden usar mismo origen y destino!', ['red','darken-3'], 3);
                    }else if(origen_val < destino_val){
                        if(sentido == 'ns'){
                            sentido = 'ns';
                        }else{
                            sentido = 'eo';
                        }
                    }else{
                        if(sentido == 'ns'){
                            sentido = 'sn';
                        }else{
                            sentido = 'oe';
                        }
                    }
                }else{
                    if(origen_text == 'defecto_ns'){
                        sentido = 'ns';
                    }else if(origen_text == 'defecto_sn'){
                        sentido = 'sn';
                    }else if(origen_text == 'defecto_eo'){
                        sentido = 'eo';
                    }else if(origen_text == 'defecto_oe'){
                        sentido = 'oe';
                    }
                }
                
                tabla = `vista-${empresa}-${ruta}-${dias}-${sentido}`;
                horario = JSON.parse(localStorage.getItem(tabla));

                if(horario != null){
                    ciudades = Object.keys(horario[0]).map(th=>{return th.toUpperCase()});
                    ciudades_lenght = Object.keys(ciudades).length;
                    
                    horario.forEach(row => {
                        let fila_hora = [];
                        for(const data in row) {
                            fila_hora.push(row[data]);
                        }
                        horarios_arr.push(fila_hora);
                    });//console.log(tabla, horario);   //console.log(horarios_arr, ciudades[ciudades_lenght - origen_val - 2], ciudades[ciudades_lenght - destino_val - 2]);

                    horarios_arr.forEach(hora => {
                        if(tipo == 'todos'){
                            if(sentido == 'sn' || sentido == 'oe'){
                                horarios_origen.push(hora[ciudades_lenght - origen_val - 2]); horarios_destino.push(hora[ciudades_lenght - destino_val - 2]);
                            }else{
                                horarios_origen.push(hora[origen_val]); horarios_destino.push(hora[destino_val]);
                            }                        
                        }else if(hora[hora.length - 1] == tipo){
                            if(sentido == 'sn' || sentido == 'oe'){
                                horarios_origen.push(hora[ciudades_lenght - origen_val - 2]); horarios_destino.push(hora[ciudades_lenght - destino_val - 2]);
                            }else{
                                horarios_origen.push(hora[origen_val]); horarios_destino.push(hora[destino_val]);
                            }
                        }
                    })
                    if(!isNaN(origen_val)){
                        $secondSection.classList.add('horarios');
                        if(sentido == 'sn' || sentido == 'oe'){
                            $secondSection.appendChild(resultadoHorario(horarios_origen, horarios_destino, hora, ciudades[ciudades_lenght - origen_val - 2], ciudades[ciudades_lenght - destino_val - 2], empresa));
                        }else{
                            $secondSection.appendChild(resultadoHorario(horarios_origen, horarios_destino, hora, ciudades[origen_val], ciudades[destino_val], empresa));
                        }                    
                    }else{
                        $secondSection.classList.add('horarios');
                        $secondSection.appendChild(resultadoHorarioTotal(horarios_arr, ciudades, hora, tipo, sentido, empresa));
                    }
                }else{
                    alertaValidate($errores,['<b>¡Error!</b> ¡El horario no esta disponible, actualize la aplicación!'], ['red','darken-3']);
                }
            }else{
                alertaValidate($errores,errores, ['red','darken-3']);
            }
        })
    }
    function animacion(){
        document.getElementById('main').classList.add('slideOut'); document.getElementById('main').classList.add('sombreado');
        setTimeout(() => {
            document.getElementById('main').classList.remove('slideOut');
        }, 500);
    }
    function setTitleAndColor(empresa){
        const $topbar = document.getElementById('theme-color');
        const $navbar = document.getElementById('navbar');
        document.querySelector('.brand-logo').textContent = empresa;

        $topbar.removeAttribute('content');
        $navbar.removeAttribute('class');
        $navbar.classList.add('nav-wrapper'); $navbar.classList.add('darken-1');

        if(empresa == 'exprebus'){
            $topbar.setAttribute('content', '#fb8c00'); // 4caf50
            $navbar.classList.add('orange');
        }else if(empresa == 'tesa' || empresa == 'oficial'){
            $topbar.setAttribute('content', '#43a047');
            $navbar.classList.add('green');
        }else if(empresa == 'gutierrez'){
            $topbar.setAttribute('content', '#1e88e5');
            $navbar.classList.add('blue');
        }else{
            $topbar.setAttribute('content', '#43a047');
            $navbar.classList.add('green');
        }
    }
    function adminOptions(seccion){
        const $topbar = document.getElementById('theme-color');
        const $navbar = document.getElementById('navbar');

        $topbar.removeAttribute('content');
        $navbar.removeAttribute('class');
        $navbar.classList.add('nav-wrapper'); $navbar.classList.add('darken-1');

        document.querySelector('.brand-logo').textContent = seccion;
        $topbar.setAttribute('content', '#43a047');
        $navbar.classList.add('green');
    }
}