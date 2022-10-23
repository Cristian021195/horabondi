export function armarTablaPrecioJSON(dataExcel:any[], name_file:string, sheet:string){
    let data_file = name_file;
    let data_body: any[];

    data_body = dataExcel;
  
    return {data_file, data_body, data_validity: sheet}
}