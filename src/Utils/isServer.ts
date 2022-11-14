export const ISSERVER = typeof window === "undefined";

export function createLocalStorage (name:string, init:any ,parse:boolean){
    if(!ISSERVER){
        if(parse){
            localStorage.setItem(name, JSON.stringify(init))
            return JSON.stringify(init);
        }else{
            localStorage.setItem(name, init)
            return init;
        }
    }else{
        return undefined
    }    
}

export function getLocalStorage (name:string, parse:boolean, default_value:any){
    if(!ISSERVER){
        if(localStorage.getItem(name) && localStorage.getItem(name) !== 'undefined'){
            if(parse){
                return JSON.parse(localStorage.getItem(name)!);
            }else{
                return localStorage.getItem(name);
            }
        }else{
            return default_value;
        }
    }else{
        return undefined
    }
}