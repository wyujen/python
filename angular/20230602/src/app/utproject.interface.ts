export interface User{
    id: number;
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
id: string;
ordernumber: string;
pruchasenumber: string;

processingdate: string;
duedate: string;

product:Product;
user:User
quantity:number;
}