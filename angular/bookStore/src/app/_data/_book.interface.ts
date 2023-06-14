export interface Book{
    id:number;
    name:string;
    writer:string;
    bookTagId:number[]
}

export interface Tag{
    id:number;
    name:string;
}
