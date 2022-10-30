import { NextResponse, NextRequest } from "next/server";
import { verify } from "./src/Helpers";
import { spawn } from "child_process";
import { NextApiRequest, NextApiResponse } from "next";

const PUBLIC_FILE = /\.(.*)$/
export default async function middleware(req:NextRequest){
    const {cookies} = req;
    const token = cookies?.get('token');


    if(token !== undefined){
        try {
            await verify(token, process.env.SECRET_KEY as string)
            return NextResponse.next();
        } catch (error) {
            return NextResponse.redirect(new URL('/login', req.url));
        }
    }else{
        return NextResponse.redirect(new URL('/login', req.url));
    }
}

export const config = {//http://localhost:3000/empresas/exprebus/horarios
    matcher: ['/admin/:path*', '/uploads/:path*', '/api/generador/:path*'],
}


/*if(req.url?.includes('/admin')){
    if(token !== undefined){
        try {
            await verify(token, process.env.SECRET_KEY as string)
            return NextResponse.next();
        } catch (error) {
            return NextResponse.redirect(new URL('/login', req.url));
        }
    }else{
        return NextResponse.redirect(new URL('/login', req.url));
    }
}*/

/*if(req.url?.includes('/empresas')){
    console.log('ENTRO EN EMPRESAS')
}

if(req.url?.includes('/empresas/exprebus/precios')){
    console.log('ENTRO EN EMPRESAS PRECIOS')
}*/

/*if (req.nextUrl.pathname.startsWith("/_next") || req.nextUrl.pathname.startsWith("/api") || req.nextUrl.pathname.startsWith("/static") || req.nextUrl.pathname.includes(".") ){
    return NextResponse.next();
}
if (PUBLIC_FILE.test(req.nextUrl.pathname)){
    return NextResponse.next();
}*/
