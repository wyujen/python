import { Component , OnInit, OnDestroy} from '@angular/core';
import { ProductsService } from './product.service';
import { Subscription } from 'rxjs'


@Component({
    selector: 'app-products',
    templateUrl: './products.compone.html'
})

export class ProductsComponent implements OnInit, OnDestroy{
    productName = 'A Book';
    isDisabled = true;
    products = [""];
    private productsSubscription!: Subscription 

    constructor(private productsService :ProductsService){
        
        setTimeout(() =>{
        //     this.productName = 'A Tree';
            this.isDisabled = false;
            
        }, 3000);

    }

    ngOnInit(): void {
        this.products = this.productsService.getProducts();
        this.productsSubscription = this.productsService.productsUpdated.subscribe(()=>{
            this.products = this.productsService.getProducts();
        });
    }
    onAddProduct(form:any){
        if (form.valid){
            //this.products.push(form.value.productName);
            this.productsService.addProduct(form.value.productName);
        }
    }

    onRemoveProduct(productName:string){
        this.products = this.products.filter(p => p != productName);
    }

    ngOnDestroy(): void {
        this.productsSubscription.unsubscribe();
    }

}