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
                    'monteros',
                    'concepcion',
                    'aguilares',
                    'alberdi',
                    'la cocha',
                    'los pizarros',
                ]
            },
            {
                tabla: 'gutierrez-329',
                ruta:329,
                sentido:{eo: 'Este - Oeste', oe: 'Oeste - Este'},
                ciudades: [
                    'monteagudo',
                    'medinas',
                    'trinidad',
                    'concepcion'
                ]
            }
]