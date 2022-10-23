export interface IDataForm {
    hora:string,
    origen:string,
    destino:string,
    tipo:string,
    sentido_string:string;
}

interface IError {
    error: boolean | undefined
}
export interface IReqRes {
    error?: boolean,
    data?: IError,
    message?:string
}