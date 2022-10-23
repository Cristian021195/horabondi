import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import { pool } from "../../../config/db";
import { OkPacket } from 'mysql2';

export default NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID+"",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET+""
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID+"",
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET+""
        })
        
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            try {
                const data = await pool.query<OkPacket[]>("SELECT * FROM usuarios WHERE email = ?;",[user?.email]);
                if(data[0].length === 0){
                    const insert = await pool.query<OkPacket>("INSERT INTO usuarios (email, name, image) VALUES (?,?,?);",
                        [user?.email, user?.name, user?.image]);
                    if(insert[0].affectedRows > 0){
                        console.log('ok')
                    }else{
                        console.log('err')
                    }
                }
                return true;
            } catch (error) {
                console.log(error)
                return false;
            }
        },
        /*
        async redirect({ url, baseUrl }) {
          return baseUrl
        },*/
        async session({ session, user, token }) {
            return session
        },
    },
    pages: {
        signIn: "/login",
    },
    secret: process.env.JWT_SECRET
})