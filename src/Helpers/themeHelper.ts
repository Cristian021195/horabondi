
import { ISSERVER } from '../Utils/isServer';
export const ThemeHelper = (tema:string, fuente:string)=>{
    if(!ISSERVER){
        if(tema === 'dark'){
            document.body?.classList.add('dark'); document.body?.classList.remove('light');
        }else{
            document.body?.classList.remove('dark');
        }

        if(fuente=== 'large'){
            document.body?.classList.add('large'); document.body?.classList.remove('small');
        }else if(fuente=== 'small'){
            document.body?.classList.add('small'); document.body?.classList.remove('large');
        }else{
            document.body?.classList.remove('small'); document.body?.classList.remove('large');
        }
    }
}