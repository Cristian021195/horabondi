import {SignJWT, jwtVerify, type JWTPayload} from 'jose';

interface IUserPayloadJWT{
    email?:string,
    tipo?:string,
    contra?:string
}

export async function sign(payload: IUserPayloadJWT, secret: string): Promise<string> {
    const iat = Math.floor(Date.now() / 1000);
    const exp = iat + 24 * 3600; // one day

    return new SignJWT({...payload})
        .setProtectedHeader({alg: 'HS256', typ: 'JWT'})
        .setExpirationTime(exp)
        .setIssuedAt(iat)
        .setNotBefore(iat)
        .sign(new TextEncoder().encode(secret));
}

export async function verify(token: string, secret: string): Promise<any> {
    const {payload} = await jwtVerify(token, new TextEncoder().encode(secret));
    // run some checks on the returned payload, perhaps you expect some specific values

   // if its all good, return it, or perhaps just return a boolean
    return payload;
}