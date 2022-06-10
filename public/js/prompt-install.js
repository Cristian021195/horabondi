export function promptInstall(){
    const $instalar = document.getElementById("instalar");

    $instalar.addEventListener('click', ()=>{instalar()})

    let bipEvent = null;
    window.addEventListener("beforeinstallprompt", event => {
        bipEvent = event;
        console.log("BIP");
        $instalar.style.display = "block";
    });
    function instalar() {
        if (bipEvent) bipEvent.prompt();    
    }

    window.addEventListener('appinstalled', function() {
        $instalar.style.display = "none";
    });
    
}
