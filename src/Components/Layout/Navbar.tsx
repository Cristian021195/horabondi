import Image from 'next/image'
import React, {useState} from 'react'
import { IMenuItem } from '../../Interfaces'
import { ISSERVER} from '../../Utils'
import { ActiveLinkIcon } from '../UI'
//import { useWindowSize } from '../../Hooks';
interface IMenuOpts{
    menu_opts:IMenuItem[]
}
export const Navbar = ({menu_opts}:IMenuOpts) => {
    const [menuToggle, setMenuToggle] = useState(true);
    if(!ISSERVER){menuToggle ? document.body.style.overflowY='scroll' : document.body.style.overflowY='hidden';}
    return (
        <>
        <nav id='menu-top' className='p-4 d-none d-sm-block bg-cyan-9'>
            <ul className='m-0 d-flex'> 
            {
                menu_opts.map((m,m_i)=>{
                return (
                    <li key={m_i} className='ml-2'>                  
                        <ActiveLinkIcon alias={m.alias} anchor={m.anchor}></ActiveLinkIcon>
                    </li>
                )
                })
            }
            </ul>
        </nav>
        <aside className={menuToggle ? 'w-100 vh-100 right-to-left z-i-1' : 'left-to-right w-100 vh-100 z-i-1'} style={{position:'absolute', top:0}}>
            <nav id='sidebar' className={menuToggle ? `z-i-7 vh-100 w-80 d-sm-none right-to-left bg-cyan-9`: `z-i-7 vh-100 w-80 left-to-right bg-cyan-9`}>
                <div>
                <Image src='/svg/bus-stop.svg' alt='Parada colectivos SVG' width="100vw" height="50%" layout='responsive' priority={true}/>
                </div>
                <ul className='pl-4'>
                <h3 className='text-grey-2'>HoraBondi</h3>
                {
                    menu_opts.map((m,m_i)=>{
                    return (
                        <li key={m_i} className='mb-3'>
                            <ActiveLinkIcon alias={m.alias} anchor={m.anchor}></ActiveLinkIcon>
                        </li>
                    )
                    })
                }
                </ul>
            </nav>
            <div className={menuToggle ? 'd-none' : 'w-100 vh-100'} style={{position:'absolute', backdropFilter:'blur(0.7px)'}} onClick={()=>{setMenuToggle(!menuToggle)}}></div>
        </aside>      
        <button type='button'
            className={menuToggle ? `z-i-8 bubble d-sm-none rotate-right bg-yellow-8` : `z-i-8 bubble d-sm-none rotate-left bg-yellow-8`} onClick={()=>{setMenuToggle(!menuToggle)}}>
            <span className='v-align-middle' style={{transform:'rotate(270deg)'}}>▲</span>
        </button>
        </>
    )
}
