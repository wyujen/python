import { Component } from '@angular/core';

@Component({
    selector: 'app-products',
    templateUrl: './products.compone.html'
})

export class ProductsComponent{
    productName = 'A Book';
    isDisabled = true;
    products = ['book', 'tree'];

    constructor(){
        setTimeout(() =>{
        //     this.productName = 'A Tree';
            this.isDisabled = false;
        }, 300);

    }

    onAddProduct(){
        this.products.push(this.productName);

    }

    onRemoveProduct(productName:string){
        this.products = this.products.filter(p => p != productName);
    }


}