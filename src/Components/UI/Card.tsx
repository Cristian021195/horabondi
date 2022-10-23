import React from 'react'
import { ActiveLink } from './ActiveLink';

interface ICardProps{
    color: string
    link?:string
    title:string
}


export const Card = ({color, link, title}:ICardProps) => {
  return (
    <div className={'card d-flex justify-content-center align-items-center m-4 '+color}>
        <h2>
            <ActiveLink alias={title} anchor={link || "/"}></ActiveLink>
        </h2>
    </div>
  )
}
