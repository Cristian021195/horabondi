import { useState, useEffect } from "react";
import { listarRutas } from "../Helpers";
import { REGEX } from "../Utils";

export function useViajeData({route}:any){
    const [empresa, setEmpresa] = useState(route?.match(REGEX.EMPRESAS))
    const [rutas, setRutas] = useState<any[]>(listarRutas(route));  
    const [opciones, setOpciones] = useState<string[]>([''])
    const [ruta, setRuta] = useState<string>("")
    const [dataForm, setDataForm] = useState<any>({})
    const [minimize, setMinimize] = useState<boolean>(false)
    const [keys, setKeys] = useState<string[]>([""]);
    const [vigencia, setVigencia] = useState<string>("");


    return {
        empresa,
        rutas,
        opciones,
        ruta,
        dataForm,
        minimize,
        keys,
        vigencia,
        setEmpresa,
        setRutas,
        setRuta,
        setOpciones,
        setDataForm,
        setMinimize,
        setKeys,
        setVigencia
    }
}



