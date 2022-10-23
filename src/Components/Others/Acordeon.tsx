import Image from 'next/image';
import React, { useState } from 'react'
import { IReactComponentChild } from '../../Interfaces/IReact';
interface IFaqProps extends IReactComponentChild{
    title:string,
    content?:string,
    image?:string
}
export const Acordeon = ({title, content, image='', children}:IFaqProps) => {
    const [hide, setHide] = useState<boolean>(true)
    return (
      <article className='pl-2 pr-2 i-shadow mb-4'>
        <div className='d-flex justify-content-between align-items-center'>
            <div>
                <h4>{title+""}</h4>
            </div>
            <div>
                <button onClick={()=>setHide(!hide)} className={hide ? 'btn bg-yellow-8 pl-1 pr-1 rotate-left' : 'btn bg-yellow-8 pl-1 pr-1 rotate-right'}>▼</button>
            </div>
        </div>
        <div className={hide ? 'd-none p-2' : ' p-2'}>
            {image !== '' && <Image priority src={image} alt="me" width="150" height="100" onError={()=>"/svg/icon.svg"}/>}            
            {children}
        </div>
      </article>
    )//<p>{content+""}</p>
}
