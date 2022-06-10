export async function user(){

    let resp = await fetch('/ajax/check-session.php');
    let data = await resp.json();
    if(data.session == true && JSON.parse(localStorage.getItem('datos')) != null){
        if(JSON.parse(localStorage.getItem('datos')).tipo === 'super'){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }

    /*if(JSON.parse(localStorage.getItem('datos')) != null){
        if(JSON.parse(localStorage.getItem('datos')).tipo === 'super'){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }*/
}