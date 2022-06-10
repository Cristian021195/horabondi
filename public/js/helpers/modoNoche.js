export function modoNoche(){
    const $main = document.getElementById('main');
    const $body = document.getElementById('body');
    const $top_navbar = document.getElementById('top-navbar');
    const $slide_out = document.getElementById('slide-out');
    const $side_background = document.getElementById('side-background');

    const configuracion = JSON.parse(localStorage.getItem('configuracion'));
    if(configuracion !== null && configuracion.nightmode==='true'){
        $main.classList.add('noche');
        $body.style.cssText = `background-image: url('/public/img/svg/city-background-night.svg');`;//background-image: url('/public/img/svg/city-background.svg');
        $body.style.backgroundColor = '#000';
        $top_navbar.classList.add('navbar-noche');
        $slide_out.classList.add('sidenav-noche');
        $side_background.setAttribute('src','/public/img/svg/bus-stop-bg-nm.svg');
        return false;
    }else{
        $main.classList.remove('noche');
        $body.style.backgroundColor = 'white';
        $body.style.cssText = `background-image: url('/public/img/svg/city-background.svg');`;
        $top_navbar.classList.remove('navbar-noche');
        $slide_out.classList.remove('sidenav-noche');
        $side_background.setAttribute('src','/public/img/svg/bus-stop-bg.svg');
        return true;
    }
}
