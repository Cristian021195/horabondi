import React from 'react'
import moment from "moment";
import { REGEX } from '../../Utils';
import { IDataHorario, IDataForm } from '../../Interfaces';
import { filtrarPorTipo } from '../../Helpers';

interface Props {
    datosHorario:IDataHorario,
    dataForm:IDataForm,
    styleClass?:string[]
}


/*Los cambios que hicimos parten porque cargamos las planillas mas rapido con formato de texto hh:mm, solo habia que cambiar en moment utc a hh:mm y en los td de la tabla dinamica agregar ? amntes de replace*/

export const DynamicTable = ({datosHorario, dataForm, styleClass=['']}:Props) => {
    let hora_utc:number = moment.utc(dataForm.hora,"hh:mm").valueOf();
    let origen_i:number; let origen_hs_utc:number[]; let origen_string:string[];
    let destino_i:number; let destino_hs_utc:number[]; let destino_string:string[];
    let total_size:number; let new_header:string[] | undefined; let new_body:any; let expreso_arr:any = [];
    let indices:number[] = [];

    if(datosHorario === null){
        return (<>
                    <h3 className='text-center'>Sin datos</h3>
                    <ul className='list-square'>
                        <li><i>El horario no está disponible por parte de la empresa</i></li>
                        <li><i>Verifique la hora</i></li>
                        <li><i>Verifique que está en la empresa correcta</i></li>
                    </ul>
                    
                </>)
    }else{

        if(dataForm.origen.match(REGEX.SENTIDO)){
            new_header = datosHorario?.data_header?.map(nh=>nh.toUpperCase());
            new_body = datosHorario?.data_body;
            new_body = filtrarPorTipo(dataForm, new_body);
        }else{

            origen_i = datosHorario.data_header?.findIndex((e)=>e===dataForm.origen) || 0;
            destino_i = datosHorario.data_header?.findIndex((e)=>e===dataForm.destino) || 0;

            origen_string = datosHorario.data_body?.map((e,e_i)=>e[origen_i]) || [];
            destino_string = datosHorario.data_body?.map((e,e_i)=>e[destino_i]) || [];//hasta aqui ok dos arreglos de horarios en strings[]

            origen_hs_utc =  datosHorario.data_body?.map((e,e_i)=>moment.utc(e[origen_i], "hh:mm").valueOf()) || [];//hasta aqui ok conversion de ms array
            destino_hs_utc = datosHorario.data_body?.map((e,e_i)=>moment.utc(e[destino_i], "hh:mm").valueOf()) || [];

            total_size = origen_string.length;

            datosHorario.data_body?.forEach((db:string[],db_i:number)=>expreso_arr.push(db[total_size-1]))
            
            let cut_size = origen_hs_utc.findIndex((ohs, ohs_i)=>ohs>=hora_utc);
            let origen_string_cut = origen_string.slice(origen_hs_utc.findIndex((ohs, ohs_i)=>ohs>=hora_utc));
            let destino_string_cut = destino_string.slice(origen_hs_utc.findIndex((ohs, ohs_i)=>ohs>=hora_utc));
            let expreso_arr_cut = expreso_arr.slice(cut_size);//array de expresos


            //obtenemos los indices del segundo array, que ahora manda.
            if(dataForm.sentido_string === 'ns' || dataForm.sentido_string === 'oe'){
                destino_string_cut.forEach((ha,hai)=>{
                    if(ha.length > 1){
                        indices.push(hai);
                    }
                })
            }else if(dataForm.sentido_string === 'sn' || dataForm.sentido_string === 'eo'){
                origen_string_cut.forEach((ha,hai)=>{
                    if(ha.length > 1){
                        indices.push(hai);
                    }
                })
            }

            //ahora hacemos un arreglo nuevo con los cuts.            
            new_body = indices.map((asd,asdq)=>{
                return [origen_string_cut[asd], destino_string_cut[asd], expreso_arr_cut[asd]]
            })
            new_header = [dataForm.origen, dataForm.destino, "expreso"]?.map(nh=>nh.toUpperCase());
            new_body = filtrarPorTipo(dataForm, new_body);
        }
        
        return (<table className={styleClass.join(' ')}>
                    <TableHeader data_header={new_header}></TableHeader>
                    <TableBody data_body={new_body}></TableBody>
                </table>
        )    
    }
}

export const TableBody = ({data_body}:IDataHorario) => {
    return (
        <tbody>
            {
                data_body?.map((tr:[], tr_i:number)=>{
                return (
                    <tr key={tr_i}>
                        {
                            tr?.map((td:string, td_i:number)=>{
                                return (<td key={td_i}>{td?.replace(REGEX.SPACE_BLANK ," ").substring(0,5)}</td>)
                            })
                        }
                    </tr>)
                })
            }
        </tbody>
    )
}

export const TableHeader = ({data_header}:IDataHorario) => {
        return (
            <thead>
                <tr>
                    {data_header?.map((th,th_i)=><th key={th_i}>{th}</th>)}
                </tr>
            </thead>
        )
}
