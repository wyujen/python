export interface User{
    id: number
    name: string;
    phonenumber:string;
}
export interface Product{
    id: number;
    name:string;
    longid:string;
    
    productstock:number;
    materialstock:number;
}

export interface Ut{
id: number;
ordernumber: number;
pruchasenumber: number;

processingdate: Date;
duedate: Date;

product:Product;
user:User
quantity:number
}