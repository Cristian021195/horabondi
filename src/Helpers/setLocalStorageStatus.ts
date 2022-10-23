import { ISSERVER } from "../Utils";

export const setLocalStorageStatusString = (state:any, name:string)=>{
    if(!ISSERVER){
      localStorage.setItem(name, state.value);
    }
}

export const setLocalStorageStatusObject = (state:any, name:string)=>{
    if(!ISSERVER){
      localStorage.setItem(name, JSON.stringify(state.value));
    }
}

export const removeLocalStorageStatus = (name:string)=>{
  if(!ISSERVER){
    localStorage.removeItem(name);
  }
}

export const getLocalStorageObject = (name:string)=>{
  if(!ISSERVER){
    JSON.parse(localStorage.getItem(name)!);
  }
}

export const getLocalStorageString = (name:string)=>{
  if(!ISSERVER){
    localStorage.getItem(name)!;
  }
}