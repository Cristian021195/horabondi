import React from 'react'
import { IReactComponentChild } from '../Interfaces'

export const EmpresasLayout = ({children}:IReactComponentChild) => {
  return (
    <section className='p-0'>
        <div className='col col-md-10 col-lg-8 mx-auto'>
          {children}
        </div>
    </section>
  )
}
 