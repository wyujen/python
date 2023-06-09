export interface Movie{
    id: number;
    name: string;
    tagid:number[];
}
export interface Tag{
    id: number;
    name: string;
}

export interface MovieOutput{
    id: number;
    name: string;
    tags:string[];

}

export interface TagOutput{
    id: number;
    name: string;
    movies:string[];
}
