import { IOpcionesCiudadesHorario } from "../Interfaces";

export const ciudades_horarios:IOpcionesCiudadesHorario[] = [
            {
                tabla: 'exprebus-38',
                ruta:38,
                sentido:{ns: 'Norte - Sur', sn: 'Sur - Norte'},
                ciudades: [
                    'tucuman',
                    'famailla',
                    'monteros',
                    'concepcion',
                    'aguilares',
                    'santa ana',
                    'alberdi',
                    'la cocha',
                    'los pizarros',
                    'rio huacra'
                ]
            },
            {
                tabla: 'exprebus-301',
                ruta:301,
                sentido:{ns: 'Norte - Sur', sn: 'Sur - Norte'},
                ciudades: [
                    'tucuman',
                    'lules',
                    'famailla',
                    'fronterita',
                    'monteros',
                    'rio seco',
                    'santa lucia',
                    'caceres',
                    'sgto moya',
                    'concepcion'
                ]
            },
            {
                tabla: 'tesa-38',
                ruta:38,
                sentido:{ns: 'Norte - Sur', sn: 'Sur - Norte'},
                ciudades: [
                    'tucuman',
                    'famailla',
                    'rio colorado',
                    'monteros',
                    'concepcion',
                    'aguilares',
                    'santa ana',
                    'alberdi',
                    'la cocha',
                    'los pizarros',
                ]
            },
            {
                tabla: 'gutierrez-65',
                ruta:65,
                sentido:{eo: 'Este - Oeste', oe: 'Oeste - Este'},
                ciudades: [
                    'monteagudo',
                    'medinas',
                    'trinidad',
                    'concepcion',
                    'terminal'
                ]
            },
            {
                tabla: 'gutierrez-301',
                ruta:301,
                sentido:{eo: 'Este - Oeste', oe: 'Oeste - Este'},
                ciudades: [
                    'concepcion',
                    'aguilares',
                    'los sarmientos',
                    'monte bello',
                ]
            },
            {
                tabla: 'gutierrez-agudos',
                ruta:'agudos',
                sentido:{ns: 'Norte - Sur', sn: 'Sur - Norte'},
                ciudades: [
                    'agudos',
                    'medinas',
                    'aguilares',
                ]
            },
            {
                tabla: 'gutierrez-calera',
                ruta:'calera',
                sentido:{ns: 'Norte - Sur', sn: 'Sur - Norte'},
                ciudades: [
                    'terminal',
                    'concepcion',
                    'alto verde',
                    'la calera'
                ]
            },
            {
                tabla: 'gutierrez-piedragrande',
                ruta:'piedragrande',
                sentido:{ns: 'Norte - Sur', sn: 'Sur - Norte'},
                ciudades: [
                    'terminal',
                    'concepcion',
                    'el molino',
                    'alpachiri',
                    'piedra grande'
                ]
            }
]