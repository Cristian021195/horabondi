export function existeSW(){
    if('serviceWorker' in navigator){
        return navigator.serviceWorker.register('/sw.js')
        .then((swReg)=>{
            console.log('¡Service worker registrado!')
        }).catch(e=>{console.log(e)
        });
    }else{
        return new Error();
    }
}