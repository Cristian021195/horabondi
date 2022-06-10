/*export function cards(data){
    const $card = document.createElement('div'); $card.classList.add('col'); $card.classList.add('s12'); $card.classList.add('m9');

    $card.innerHTML = `
        <div class="card horizontal">
            <div class="card-image hide-on-small-only">
                <img src="${data.img}" width="150px" height="150px">
            </div>
            <div class="card-stacked">
                <div class="card-content">
                    <b class="hide-on-med-only">${data.empresa}</b>
                    <p>${data.info}</p>
                    <small>${data.date}</small>
                </div>
            </div>
        </div>
    `;
    return $card;
    class="grey-text text-darken-2"
}*/

export function cards(data){

    const $container = document.createElement('div'); $container.classList.add('overflow-y');
    if(data.length > 0){
        data.forEach((d,i) => {        
            const $card = document.createElement('div'); $card.classList.add('col'); $card.classList.add('s12'); $card.classList.add('m9');
            const $card_horizontal = document.createElement('div'); $card_horizontal.classList.add('card'); $card_horizontal.classList.add('horizontal');
            const $card_img = document.createElement('div'); $card_img.classList.add('card-image'); $card_img.classList.add('hide-on-small-only');
            const $card_text = document.createElement('div'); $card_text.classList.add('card-stacked');
    
            let impar = i % 2;
    
            $card_img.innerHTML = `<img src="/public/img/svg/${d.empresa}-full.svg" width="150px" height="150px">`;
            $card_text.innerHTML = `
                <div class="card-content">
                    <b class="hide-on-med-and-up">${d.empresa.toUpperCase()}</b>
                    <p>${d.publicacion.substring(0,100)}...</p>
                    <a class="right-align" href="/${d.empresa}/publicaciones/${d.id}">Ir a publicación..</a><br><br>
                    <small>${d.fecha}</small>
                </div>
            `;
    
            
            $card.appendChild($card_horizontal);
            if(impar == 1){
                $card.classList.add('offset-m3');
                $card_horizontal.appendChild($card_text);
                $card_horizontal.appendChild($card_img);
                $card_horizontal.classList.add(`${d.empresa}-right`);
            }else{
                $card_horizontal.appendChild($card_img);
                $card_horizontal.appendChild($card_text);
                $card_horizontal.classList.add(`${d.empresa}-left`);
            }
            $container.appendChild($card);       
        });
        document.getElementById('main').innerHTML = '';
        document.getElementById('main').classList.add('slideOut');
        setTimeout(() => {
            document.getElementById('main').classList.remove('slideOut');
        }, 450);
        document.getElementById('main').appendChild($container);
    }else{
        document.getElementById('main').innerHTML = '<h5 class="center-align">¡No hay publicaciones de esta empresa!</h5>';
    }
}