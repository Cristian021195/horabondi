export function serverError(){
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').innerHTML = `
    <div class="container">
        <h2 class="red-text darken-1 center">¡Error de servidor!</h2><br><hr>
        <p class="center grey-text"><b>Notifique a la administracion y vuelva a intentarlo mas tarde.. :(</b></p>
    </div>`;
}