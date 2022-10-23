export function compartir(title='Titulo', text='Texto a compartir', url='/'):boolean{
    if(navigator){    
      if(navigator.share){
        navigator.share({
            title,
            text,
            url
        }).then(()=>{
            return true;
        }).catch((err)=>{
            return false;
        })
      }else{
          return false;
      }
    }else{
      return false;
    }
    return false;
}
export function copiarTexto(texto:string){
  if(window){
    if(navigator){    
      if(navigator.clipboard){
        navigator.clipboard.writeText(texto).then(res=>{alert("¡copiado!")}).catch(()=>{alert("¡Erro al copiar dato!")})
      }else{
        alert('¡no se pudo copiar!')
      }
    }else{
      alert('¡no se pudo copiar!')
    }
  }  
}

//!ISSERVER && navigator.clipboard.writeText("0000003100001575148881").then(()=>alert("¡CVU copiado!"))