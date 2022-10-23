import { IReactComponentChild } from "./IReact";

export interface IMetaTagsRFC extends IReactComponentChild{
    title: string,
    strech?:string
}

export interface IMenuItem extends IReactComponentChild{
    anchor: string,
    alias: string,
    dropdown?: boolean,
    icon?: any,
}