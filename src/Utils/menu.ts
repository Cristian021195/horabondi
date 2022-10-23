import {IMenuItem} from "../Interfaces";
//import { faHome, faBus, faAddressCard, faGear, faArrowRightFromBracket, IconDefinition, faHandHoldingHeart, faUpload, faTable } from '@fortawesome/free-solid-svg-icons'
export const menu: IMenuItem[] = [ 
    {
        anchor: "/",
        alias:"Inicio",
    },
    {
        anchor: "/empresas",
        alias:"Horarios y Precios",
    },
    {
        anchor: "/contacto",
        alias:"Contacto",
    },
    {
        anchor: "/configuracion",
        alias:"Configuración",
    },
    {
        anchor: "/login",
        alias:"Sesión",
    },
    {
        anchor: "/donaciones",
        alias:"Donaciones y Publicidad",
    }
]
export const menu_admin: IMenuItem[] = [ 
    {
        anchor: "/",
        alias:"Inicio",
    },
    {
        anchor: "/empresas",
        alias:"Horarios y Precios",
    },
    {
        anchor: "/contacto",
        alias:"Contacto",
    },
    {
        anchor: "/configuracion",
        alias:"Configuración",
    },
    {
        anchor: "/login",
        alias:"Sesion",
    },
    {
        anchor: "/donaciones",
        alias:"Donaciones y Publicidad",
    },
    {
        anchor: "/uploads",
        alias:"Carga de Archivos",
    },
    {
        anchor: "/admin",
        alias:"Panel Admin",
    },

]

export const menu_visitor: IMenuItem[] = [ 
    {
        anchor: "/",
        alias:"Inicio",
    },
    {
        anchor: "/empresas",
        alias:"Horarios y Precios",
    },
    {
        anchor: "/contacto",
        alias:"Contacto",
    },
    {
        anchor: "/configuracion",
        alias:"Configuración",
    },
    {
        anchor: "/login",
        alias:"Sesion",
    },
    {
        anchor: "/donaciones",
        alias:"Donaciones y Publicidad",
    }
]
//export const menu_icons:IconDefinition[] = [faHome, faBus, faAddressCard, faGear, faArrowRightFromBracket, faHandHoldingHeart];
//export const menu_icons_admin:IconDefinition[] = [faHome, faBus, faAddressCard, faGear, faArrowRightFromBracket, faHandHoldingHeart, faUpload, faTable];
//export const menu_icons_visitor:IconDefinition[] = [faHome, faBus, faAddressCard, faGear, faArrowRightFromBracket, faHandHoldingHeart, faUpload, faTable];