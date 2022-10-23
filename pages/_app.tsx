import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Footer, Navbar } from '../src/Components/Layout'
import { useEffect, useState } from 'react'
import { CHECK_LOGIN } from '../src/Api'
import { menu_admin, menu } from '../src/Utils'
import { useSession } from '../src/Hooks/useSession';
import {QueryClient, QueryClientProvider} from "react-query";
import { ThemeProvider } from 'next-themes'

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {

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