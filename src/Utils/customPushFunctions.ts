/*import axios from 'axios';
export async function pushPublicacion(publicacion:string, empresa:string, titulo:string, imagen:string, fecha:string, insertedId:number){

    const instance = axios.create({
        baseURL: 'https://onesignal.com/api/v1/notifications',
        timeout: 1000,
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Authorization':'Basic '+process.env.ONE_SIGNAL_KEY
        }
    }); 

    const datos = {data: {
        app_id: "9f895016-5666-4216-a052-13abc5bb0b18",
        data: {mensaje: `Titulo: ${titulo}`},
        contents: {en: publicacion.substring(0, 25) + '...'},
        url: `http://localhost:3000/publicaciones/${insertedId}`,//.insertId
        headings:{en: `Nueva publicacion de: ${empresa}`}
    }}
    return instance.request(datos)
}*/
export function pushPublicacion(publicacion:string, empresa:string, titulo:string, imagen:string, fecha:string, insertedId:number, token:string){
    let headers = new Headers({
        'Accept': 'application/json',
        'Content-Type':'application/json',
        'Authorization':'Basic '+token,
    })

    const datos = {data: {
        app_id: "9f895016-5666-4216-a052-13abc5bb0b18",
        data: {mensaje: `Titulo: ${titulo}`},
        contents: {en: publicacion.substring(0, 25) + '...'},
        url: `http://localhost:3000/publicaciones/${insertedId}`,//.insertId
        headings:{en: `Nueva publicacion de: ${empresa}`}
    }}
    /*try {
        let resp = await fetch('https://onesignal.com/api/v1/notifications', {
            method:'POST',
            headers
        })
        console.log(resp)
    } catch (error) {
        console.log(error)
    }*/
    
    return fetch('https://onesignal.com/api/v1/notifications', {method:'POST',headers, body: JSON.stringify(datos)})
    //return instance.request(datos)
}