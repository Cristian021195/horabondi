import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Footer, Navbar } from '../src/Components/Layout'
import { useEffect, useState } from 'react'
import { CHECK_LOGIN } from '../src/Api'
import { menu_admin, menu } from '../src/Utils'
import { useSession } from '../src/Hooks/useSession';
import {QueryClient, QueryClientProvider} from "react-query";
import { ThemeProvider } from 'next-themes'
import { Toast } from '../src/Components/Others'
import { useNetStat } from '../src/Hooks'

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
 const {netStat} = useNetStat();
  const [_menu, _setMenu] = useState(menu);
  const {loginStatus} = useSession();
  useEffect(()=>{
    loginStatus ? _setMenu(menu_admin) : _setMenu(menu)
  },[loginStatus])

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <ThemeProvider enableSystem={false}>
        <Navbar menu_opts={_menu}/>
        {!netStat && <Toast color='var(--red-2)' close_color='var(--grey-8)'><h3 className='text-grey-1'>Sin conexion</h3></Toast>}
        <Component {...pageProps}/>
        <Footer/>
    </ThemeProvider>
    </QueryClientProvider>
    </>
  )
}

export default MyApp




/*
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Footer, Navbar, ThemeLayout } from '../src/Components/Layout'
import { useEffect, useState } from 'react'
import { CHECK_LOGIN } from '../src/Api'
import { menu_admin, menu } from '../src/Utils'
import { useSession } from '../src/Hooks/useSession';
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import { useNetStat } from '../src/Hooks/useNetStat';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [_menu, _setMenu] = useState(menu);
  const {loginStatus} = useSession();
  useEffect(()=>{
    loginStatus ? _setMenu(menu_admin) : _setMenu(menu)
  },[loginStatus])
  
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <>
      <ThemeLayout>
        <Component {...pageProps}/>
      </ThemeLayout>
    </>
  )
}*/