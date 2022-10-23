import {IEmpresaItem} from "../Interfaces";
export const switch_empresas = {
    EXPREBUS: 'exprebus',
    TESA: 'tesa',
    GUTIERREZ: 'gutierrez',
}
export const empresas: IEmpresaItem[] = [
    {
        anchor:"exprebus/informacion",
        alias:"Exprebus",
        nombre:"exprebus",
        precios:true,
        img:'/svg/exprebus-full.svg',
        color:'--orange-3',
        descripcion:'Actualmente la empresa más usada en la provincia, tiene mayores recorridos y suele ser la más barata en pasajes y abonos mensuales. No reciben débito en terminal.',
        informacion: {
            direccion:"Terminal Tucumán, Av. Brígido Terán 250 Boleteria 63-64, T4000 San Miguel de Tucumán, Tucumán, Argentina.",
            telefono:[
                "+543814211830"
            ],
            mail:[
                "exprebus@gmail.com"
            ],
            provincia:[
                "Tucumán"
            ],
            website:[
                ""
            ],
            redes:[
                "https://www.facebook.com/EXPREBUS/"
            ],
            stars:3.7
        }
    },
    {
        anchor: "tesa/informacion",
        alias:"Tesa",
        nombre:"tesa",
        precios:false,
        img:"/svg/tesa-full.svg",
        color:'--green-3',
        descripcion:'Es la primer opción elegida por muchos, por comodidad y calidad del servicio vale el precio. Reciben débito en la terminal para abonar el viaje.',
        informacion: {
            direccion:"Estación Central, Av. Brígido Terán 250 Local 76, T4000 San Miguel de Tucumán, Tucumán, Argentina.",
            telefono:[
                "+543814227989"
            ],
            mail:[
                "tesa@gmail.com"
            ],
            provincia:[
                "Tucumán"
            ],
            website:[
                ""
            ],
            redes:[
                "https://www.facebook.com/TesaTransporteEjecutivoSA"
            ],
            stars:4.1
        }
    },
    {
        anchor:"gutierrez/informacion",
        alias:"Gutierrez",
        nombre:"gutierrez",
        precios:true,
        img:'/svg/gutierrez-full.svg',
        color:'--blue-2',
        descripcion:'Empresa del sur Tucumano, aún en expansión, actualmente tiene viajes desde Los Sarmientos a Concepción, viajes cortos y mas rápidos que otras empresas. No reciben débito.',
        informacion: {
            direccion:"Chacabuco 349, T4146 Concepción, Concepción, Tucumán, Argentina.",
            telefono:[
                "+543865425784"
            ],
            mail:[
                "gutierrez@gmail.com"
            ],
            provincia:[
                "Tucumán"
            ],
            website:[
                ""
            ],
            redes:[
                "https://www.facebook.com/gutierrezhermanos"
            ],
            stars:4.1
        }
    }
]