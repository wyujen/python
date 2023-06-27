export interface Book{
    id:string;
    
    name:string;
    writer:string;
    bookTagId:number[]
}

export interface BasicBook {
    id:number
    name:string
}

export interface Tag{
    id:number;
    name:string;
    tagBooks?: Book[]; 
    
}

export interface TagList{
    id:number;
    name:string;
    tagBooks: Book[]; 
    

}
