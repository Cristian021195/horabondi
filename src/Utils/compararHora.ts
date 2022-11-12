import moment from 'moment'
console.log(moment.utc('04:00:00',"hh:mm:ss").valueOf())
console.log(moment.utc('04:00',"hh:mm").valueOf())

let td = '04:00'; console.log(td.substring(0,5))