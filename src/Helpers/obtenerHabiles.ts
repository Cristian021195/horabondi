export function obtenerDiasHabiles(){
    if(new Date().getDay() === 0){
        return  'domingos'
    }else if(new Date().getDay() === 0){
        return 'sabados'
    }else{
        return 'habiles'
    }
}