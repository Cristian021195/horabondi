export function header(menu){
    const $sideNav = document.getElementById('slide-out'); const $topNavbar = document.getElementById('top-navbar');
    $sideNav.innerHTML = `
    <li><div class="user-view">
        <div class="background">
            <img src="/public/img/svg/bus-stop-bg.svg" width="300" id="side-background">
        </div>
            <a href="#user"><img class="circle" src="/public/img/svg/icon-user.svg"></a>
            <div class="glassy"><a href="#name"><span class="white-text name">Bienvenido Usuario</span></a>
            <a href="#email"><span class="white-text email">usuarionuevo@gmail.com</span></a></div>
        </div>
    </li>
    `; 
    $topNavbar.innerHTML = '';
    $sideNav.appendChild(crearSidebar(menu));
    $topNavbar.appendChild(crearNavbar(menu));
    
    const configSideNav = M.Sidenav.init($sideNav);     
    M.AutoInit();
}

function crearSidebar(menu){
    let $btn = document.createElement('button'); $btn.classList.add('btn'); $btn.classList.add('sesion'); $btn.classList.add('modal-trigger'); $btn.classList.add('btn-block'); $btn.setAttribute('data-target', 'modal1');
    const $fragment = document.createDocumentFragment();
    const $ul = document.createElement('ul'); $ul.id = 'slide-out'; $ul.classList.add('sidenav');

    menu.forEach(e => {
        let $ulhh = document.createElement('ul'); $ulhh.classList.add('collapsible');
        let $li = document.createElement('li'); $li.classList.add('bold'); let $anchor = document.createElement('a');
        $anchor.innerHTML = `${e.item.toLocaleUpperCase()} <i class="material-icons">arrow_drop_down</i>`; $anchor.classList.add('collapsible-header'); $anchor.classList.add('waves-effect');
        $li.appendChild($anchor);

        let $div = document.createElement('div'); $div.classList.add('collapsible-body');
        let $ulh = document.createElement('ul');
        
        e.links.forEach(link => {
            let $li = document.createElement('li'); let $anchor = document.createElement('a'); $anchor.textContent = link; $anchor.href = `/${e.item}/${link}`;
            $li.appendChild($anchor);
            $ulh.appendChild($li);
        })

        $div.appendChild($ulh);
        $li.appendChild($div);
        $ulhh.appendChild($li);
        $fragment.appendChild($ulhh);
    })
    $fragment.append($btn);
    return $fragment;
}
function crearNavbar(menu){
    let $btn = document.createElement('button'); $btn.classList.add('btn'); $btn.classList.add('sesion'); $btn.classList.add('modal-trigger');$btn.classList.add('mr-2'); $btn.setAttribute('data-target', 'modal1');
    const $fragment = document.createDocumentFragment();
    $fragment.appendChild($btn);

    menu.forEach((e, i) => {
        let $li = document.createElement('li'); let $anchor = document.createElement('a');
        $anchor.classList.add('dropdown-trigger'); $anchor.setAttribute('data-target', `dropdown${i}`); $anchor.innerHTML = `${e.item.toUpperCase()} <i
        class="material-icons right">arrow_drop_down</i>`;

        let $ul = document.createElement('ul'); $ul.id = `dropdown${i}`; $ul.classList.add('dropdown-content');

        e.links.forEach(link => {
            let $lih = document.createElement('li'); let $ach = document.createElement('a');
            $ach.textContent = link; $ach.href = `/${e.item}/${link}`;
            $lih.appendChild($ach);
            $ul.appendChild($lih);
        })

        $li.appendChild($anchor); $li.appendChild($ul);
        $fragment.appendChild($li);
    })
    return $fragment;
}