import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect, useState } from 'react';
import { getLocalStorage } from '../src/Utils';

export default function Document() {  
  return (
    <Html className='html_tag' lang='es'>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>

            <meta name="application-name" content="Horabondi" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content="Horabondi" />
            <meta name="description" content="App para colectivos urbanos de Tucumán" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="msapplication-TileColor" content="#00838F" />
            <meta name="msapplication-tap-highlight" content="no" />
            <meta name="theme-color" content="#00838F" />

            <link rel="apple-touch-icon" href="/icon.png" />
            <link rel="apple-touch-icon" sizes="192x192" href="/icon-192x192.png" />
            <link rel="apple-touch-icon" sizes="256x256" href="/icon-256x256.png" />
            <link rel="apple-touch-icon" sizes="512x512" href="/icon-512x512.png" />

            <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml"/>
            <link rel="manifest" href="/manifest.json" />
            <link rel="mask-icon" href="/favicon.svg" sizes="any" type="image/svg+xml" color="#00838F" />
            <link rel="shortcut icon" href="/favicon.svg" />
        </Head>      
        <body className="body-scroll">
          <Main />
          <NextScript />
        </body>
    </Html>
  )
}