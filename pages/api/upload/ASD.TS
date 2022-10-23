const formidable = require('formidable');
const XLSX = require('xlsx');
import fs from "fs";
import { pool } from "../../../config/db";
import { DIRECTORIES, REGEX } from '../../../src/Utils';
import { v4 as uuidv4 } from 'uuid';

function armarTablaJSON(dataExcel:object[]){
  let data_header: string[];
  let data_body: any[];

  data_header = Object.keys(dataExcel[0]);
  data_body = dataExcel.map((dE, dE_i)=> Object.values(dE))

  return {data_header, data_body}
}

interface Props {
  fieldCount: number,
  affectedRows: number,
  insertId: number,
  info: string,
  serverStatus: number,
  warningStatus: number,
}

export default async function excel(req: any, res: any){
    if(fs.existsSync("/data/excel")){
      const form = new formidable.IncomingForm({ multiples: true });
      form.uploaddir = DIRECTORIES.EXCEL_DIR_HORARIOS;
      form.uploadDir = DIRECTORIES.EXCEL_DIR_HORARIOS;
      form.maxFileSize = 50 * 1024 * 1024;
      form.keepExtensions = true;
      form.parse(req, (err:any, fields:any, files:any) => {

        if(err){
          res.status(500).send({mensaje: "error al parsear / subir / crear archivo"})
        }else{
            if(Array.isArray(files.archivo)){
              files.archivo.forEach(async(f:any,f_i:number)=>{
                let filepath = f.filepath;
                let new_filepath = DIRECTORIES.EXCEL_DIR_HORARIOS+f.originalFilename;
                let name_file = f.originalFilename.replace(REGEX.DOT_SPREADSHEET,""); 
                let json_file= name_file+".json";

                try {
                    fs.renameSync(filepath, new_filepath);
      
                    let workbox = XLSX.readFile(new_filepath);
                    let workbookSheets = workbox.SheetNames;
                    const sheet = workbookSheets[0];
                    const dataExcel = XLSX.utils.sheet_to_json(workbox.Sheets[sheet])
                    fs.writeFileSync(DIRECTORIES.JSON_DIR_HORARIOS+json_file, JSON.stringify(dataExcel))

                    //DESCOMENTAR MAS ADELANTE
                    /*let data:Props | any = await pool.query("UPDATE llaves SET llave = ? WHERE archivo = ?", [uuidv4(), name_file]);
                    if(data[0].affectedRows > 1){
                      console.log('Se editaron las llaves correctamente')
                    }else{
                      let insert:any = await pool.query("INSERT INTO `llaves` (llave, archivo) VALUES (?, ?)", [uuidv4(), name_file]);
                      if(insert[0].affectedRows > 0){
                        console.log('se cargaron las llaves correctamente')
                      }else{
                        console.log('Error al cargar llaves')
                      }
                    }*/

                } catch (error) {
                    console.log("ERROR AL RENOMBRAR / CREAR JSON",error)
                }
              })
            }else{

              let filepath = files.archivo.filepath;
              let new_filepath = DIRECTORIES.EXCEL_DIR_HORARIOS+files.archivo.originalFilename;
              let name_file = files.archivo.originalFilename.replace(REGEX.DOT_SPREADSHEET,"");
              let json_file= name_file+".json";

              let new_json_filepath = DIRECTORIES.JSON_DIR_HORARIOS;
              
              /*if(REGEX.PRECIO.test(name_file)){
                new_filepath = DIRECTORIES.EXCEL_DIR_PRECIOS+files.archivo.originalFilename;
                new_json_filepath = DIRECTORIES.JSON_DIR_PRECIOS;
              }*/
              //D:\PRACTICAS WEB\NEXT\horabondi\data\excel\exprebus-38-precio.xlsx - newfilepath

              try {
                  fs.renameSync(filepath, new_filepath);
                  let workbox = XLSX.readFile(new_filepath);
                  let workbookSheets = workbox.SheetNames;
                  const sheet = workbookSheets[0];
                  const dataExcel = XLSX.utils.sheet_to_json(workbox.Sheets[sheet])
                  
                  
                  fs.writeFileSync(new_json_filepath+json_file, JSON.stringify(armarTablaJSON(dataExcel)))

                  //DESCOMENTAR LINEA MAS ADELANTE
                  /*pool.query("UPDATE llaves SET llave = ? WHERE archivo = ?", [uuidv4(), name_file]).then((data:any)=>{
                    if(data[0].affectedRows > 1){
                      console.log('Se editaron las llaves correctamente')
                    }else{
                      pool.query("INSERT INTO `llaves` (llave, archivo) VALUES (?, ?)", [uuidv4(), name_file]).then((insert:any)=>{
                        if(insert[0].affectedRows > 0){
                          console.log('se cargaron las llaves correctamente')
                        }else{
                          console.log('Error al cargar llaves')
                        }
                      })                      
                    }
                  })*/

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