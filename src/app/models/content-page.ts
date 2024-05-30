export enum Modules{
    About = "about",
    Servicios = "servicios",
    Portafolios = "portafolios",
    Team = "team",
    Features = "features"
}

export enum MessageType{
    Success = "success",
    Error = "error",
    Question = "question",
    Info = "info",
    Warning = "warning"
}

export interface contentApp{
    language: string,
    visible:number,
    text: string,
    title: string
}

export interface ModuleApp{
    name: string,
    content: contentApp
}

export interface SettingApp{
    companyname: string,
    modules: ModuleApp[]
}

export class FormContactFields {
    
    Location:string | undefined;
    Email:string | undefined;
    Telefono: string | undefined;
    
    constructor(){}

}
export interface Contact{
    fullname:string;
    email:string;
    subject:string;
    message:string;
}
