import React, { FC, useState } from 'react'
import Head from 'next/head';
import { IMetaTagsRFC } from '../Interfaces/';

export const LayoutPrincipal = ({title = 'HoraBondi', strech='strech', children}:IMetaTagsRFC) => {
  return (
    <>
        <Head>
            <title>{title}</title>
        </Head>
        <main id='main' className={`row container-fluid mx-auto pb-5 ${strech}`}>
            {children}
        </main>
    </>
  )
}


/*import React, { FC, useEffect, useState } from 'react'
import Head from 'next/head';
import { useSession } from '../Hooks';
import { menu, menu_admin } from '../Utils';
import { Footer, Navbar } from '../Components/Layout';
//import { Header } from '../Components/Layout';

interface Props {
    title:string,
    children: React.ReactNode,
    strech?:string
}

export const LayoutPrincipal = ({title = 'HoraBondi', children, strech='strech'}:Props) => {
  const [_menu, _setMenu] = useState(menu);
  const {loginStatus} = useSession();
  useEffect(()=>{
    loginStatus ? _setMenu(menu_admin) : _setMenu(menu)
  },[loginStatus])
  return (
    <>
        <Head>
            <title>{title}</title>
        </Head>
        <Navbar menu_opts={_menu}/>
        <main id='main' className={`row container-fluid mx-auto pb-5 ${strech}`}>
          <div className='pop-up'>
            {children}
          </div>
        </main>
        <Footer/>
    </>
  )//z-i--1
}*/
