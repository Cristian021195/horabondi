import React, { FC, useState } from "react";
import { UPLOAD } from '../../Api/upload';
import { IReqRes } from '../../Interfaces';
import {Loader, Toast} from '../Others';

interface IAcceptType{
    acceptType:string,
    url: string
}
interface IFileInfo{
    name:string
}



export function DragArea({acceptType, url}:IAcceptType) {
  const arr_aux:any = [];
  const [fileData, setFileData] = useState<IFileInfo[]>([{name:''}]);
  const [fileName, setFileName] = useState<any[]>(["Subir 📂"]);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<IReqRes>({})
  const [error, setError] = useState<any>(null)

  
  function submitHandler(e: React.FormEvent<HTMLFormElement>):void {
    e.preventDefault();
    let datos = new FormData(e.currentTarget)
    
    setLoading(true)
    UPLOAD.post(url, datos).then((res:IReqRes)=>{
      if(res.data?.error == false){
        setFileName(["Subir 📂"]); setDisabled(true); setData(res)
        alert('Archivos cargados correctamente')
      }else{
        setError(res)
      }
    }).catch(error=>{
      setError(error)
    }).finally(()=>{
      setLoading(false)
    })
    e.currentTarget.reset();    
  }

  const changeImage = (e:any) => {
    e.target.files.length > 0 ? setDisabled(false) : setDisabled(true);
    for(let i=0;i<e.target.files.length;i++){
        arr_aux.push(e.target.files[i].name + "📊")
    }
    setFileName(arr_aux);
  };
  return (//
    <>
      {error ? <Toast color='var(--red-3)' clipboard={error?.toString()}><p>{error?.toString()}</p></Toast> : <></>}
      <div className="mb-4">
          {loading ? <div className="d-flex justify-content-center"><Loader/></div> : <></>}
          <div className={`drag-active d-flex`}>
              <br />
              <form className="w-100" onSubmit={(e:any)=>submitHandler(e)}>
                  <label htmlFor="archivo" className="label-file cursor-pointer d-flex mb-4 justify-content-center">
                      {fileName.map((fn,fn_i)=>{
                          return <React.Fragment key={fn_i}>{fn}<br/></React.Fragment>
                      })}
                  </label>
                  <div className="d-flex justify-content-center">
                    <input className="drag-area dashed h-100" name="archivo" id="archivo" type="file" accept={acceptType} multiple onChange={(e) => {changeImage(e);}}/>
                  </div>
                  <div className="d-flex justify-content-between">
                      <input type="submit" className={`btn p-2 mt-4 ${disabled ? 'bg-grey-4' : 'bg-blue-3'}`} disabled={disabled} value="Subir Archivos"/>
                      <input type="reset" value="Limpiar" className="btn bg-red-2 p-2 mt-4" onClick={()=>{setFileName(["Subir 📂"]); setDisabled(true)}}/>
                  </div>

              </form>
              <div className="">
                    
              </div>
          </div>
      </div>
    </>
  );
}