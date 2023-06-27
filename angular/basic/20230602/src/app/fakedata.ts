import {Ut, User, Product } from './utproject.interface'

export const USERS: User[] = [

{ id:1, name: 'James', phonenumber: '0912345678'},
{ id:2, name: 'Emily', phonenumber: '0987654321'},
{ id:3, name: 'Michael', phonenumber: '0923456789'},
{ id:4, name: 'Olivia', phonenumber: '0976543210'},
{ id:5, name: 'Benjamin', phonenumber: '0901234567'},

]

export const PRODUCTS: Product[] =[
    {
    id: 1,
    name: "螺絲",
    longid: "A12B4",
    productstock: 546,
    materialstock: 732
    },
    {
    id: 2,
    name: "螺帽",
    longid: "C56D8",
    productstock: 987,
    materialstock: 456
    },
    {
    id: 3,
    name: "齒輪",
    longid: "E34F6",
    productstock: 234,
    materialstock: 789
    },
    {
    id: 4,
    name: "電路板",
    longid: "G78H9",
    productstock: 678,
    materialstock: 123
    },
    {
    id: 5,
    name: "氣壓馬達",
    longid: "I90J1",
    productstock: 321,
    materialstock: 567
    }

]

export const UTS: Ut[]= [
    {
    
    id: '00001',
    
    ordernumber: '12354',
    pruchasenumber: '54321',

    processingdate: '2022-05-31',
    duedate: '2022-06-15',

    product:{
        id: 2,
        name: "螺帽",
        longid: "C56D8",
        productstock: 987,
        materialstock: 456
        },
    user:{ id:5, name: 'Benjamin', phonenumber: '0901234567'},
    quantity:12345
    },
    
]