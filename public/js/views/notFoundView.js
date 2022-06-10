export function notFoundView(){
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').innerHTML = `
    <div class="container">
        <h2 class="red-text darken-1 center">¡Ruta incorrecta!</h2><br><hr>
        <p class="center grey-text"><b>Por favor, introduzca una ruta valida.</b></p>
    </div>`;
}