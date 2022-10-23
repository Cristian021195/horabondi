import React, {useState, useEffect} from 'react'
import { IResultadoPrecio } from '../../Interfaces'

export const OrigenDestinoBarInfo = ({origen, destino, precio, children}:IResultadoPrecio) => {

    if(isNaN(precio)){
        return (
            <div className="d-flex justify-content-around align-items-center pop-up">
                <div className='d-flex align-items-center pl-2 pr-2 mt-5 mb-5' style={{backgroundColor:'rgba(0,0,0,0.1)', borderRadius:'1em', height:'3em'}}>
                    {children}
                </div>
            </div>
        )
    }else{
        return (
            <div className="d-flex justify-content-around align-items-center pop-up">
                <div className='d-flex align-items-center pl-2 pr-2 mt-5 mb-5' style={{backgroundColor:'rgba(0,0,0,0.1)', borderRadius:'1em', height:'3em'}}>
                    <p className='first-uppercase'> <b>{origen}</b></p>
                    <div className="pulse m-4 d-flex justify-content-center align-items-center text-center">
                        <h2>${precio}</h2>
                    </div>
                    <p className='first-uppercase'> <b>{destino}</b></p>
                </div>
            </div>
        )
    }
}
