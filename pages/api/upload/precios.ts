const formidable = require('formidable');
const XLSX = require('xlsx');
import fs from "fs";
import { armarTablaPrecioJSON } from "../../../src/Helpers";
import { DIRECTORIES, REGEX } from '../../../src/Utils';


export default async function precios(req: any, res: any){
    if(fs.existsSync("/data/excel")){
      const form = new formidable.IncomingForm({ multiples: true });
      form.uploaddir = DIRECTORIES.EXCEL_DIR_PRECIOS;
      form.uploadDir = DIRECTORIES.EXCEL_DIR_PRECIOS;
      form.maxFileSize = 50 * 1024 * 1024;
      form.keepExtensions = true;
      form.parse(req, (err:any, fields:any, files:any) => {

        if(err){
          res.status(500).send({mensaje: "error al parsear / subir / crear archivo"})
        }else{
            if(Array.isArray(files.archivo)){
              files.archivo.forEach((f:any,f_i:number)=>{
                let filepath = f.filepath;
                let new_filepath = DIRECTORIES.EXCEL_DIR_PRECIOS+f.originalFilename;
                let name_file = f.originalFilename.replace(REGEX.DOT_SPREADSHEET,""); 
                let json_file= name_file+".json";
                try {
                    fs.renameSync(filepath, new_filepath);
      
                    let workbox = XLSX.readFile(new_filepath);
                    let workbookSheets = workbox.SheetNames;
                    const sheet = workbookSheets[0];
                    const dataExcel = XLSX.utils.sheet_to_json(workbox.Sheets[sheet])
                    fs.writeFileSync(DIRECTORIES.JSON_DIR_PRECIOS+json_file, JSON.stringify(armarTablaPrecioJSON(dataExcel, name_file, sheet)));
                } catch (error) {
                    console.log("ERROR AL RENOMBRAR / CREAR JSON",error)
                }
              })
            }else{
              let filepath = files.archivo.filepath;
              let new_filepath = DIRECTORIES.EXCEL_DIR_PRECIOS+files.archivo.originalFilename;
              let name_file = files.archivo.originalFilename.replace(REGEX.DOT_SPREADSHEET,"");
              let json_file= name_file+".json";

              let new_json_filepath = DIRECTORIES.JSON_DIR_PRECIOS;
              try {
                  fs.renameSync(filepath, new_filepath);
                  let workbox = XLSX.readFile(new_filepath);
                  let workbookSheets = workbox.SheetNames;
                  const sheet = workbookSheets[0];
                  const dataExcel = XLSX.utils.sheet_to_json(workbox.Sheets[sheet]);
                  
                  fs.writeFileSync(DIRECTORIES.JSON_DIR_PRECIOS+json_file, JSON.stringify(armarTablaPrecioJSON(dataExcel, name_file, sheet)))
              } catch (error) {
                  console.log("ERROR AL RENOMBRAR / CREAR JSON",error)
              }
            }
        }
      });
      res.status(200).send({error: false})
    }else{
      console.log("No existe la carpeta")
    }
}

export const config = {
    api: {
      bodyParser: false,
    },
};

/*ELIMINAR MULTER
  Falta Conectar a la BBDD y actualizar llaves o JSON web tokens del lado del server cada vez que subamos un nuevo horario especifico para cada tipo (diseñar). 
*/