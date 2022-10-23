import React, {useState} from 'react'

export const InputTime = () => {
const [hora, setHora] = useState<string>(`${new Date().getHours().toString().length === 1 ? "0"+new Date().getHours() : new Date().getHours()}:${new Date().getMinutes().toString().length === 1 ? "0"+new Date().getMinutes() : new Date().getMinutes() }`);
return (
  <div className='d-flex justify-content-center'>↳<input type="time" name="hora" id="hora" value={hora} style={{border:'1px solid #E0E0E0', borderRadius:'0.2em', marginLeft:'1em'}}
  onChange={(e)=>{setHora(e.target.value)}}/></div>
)
}
