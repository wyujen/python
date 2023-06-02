import { Component } from '@angular/core';
import { Ut, User, Product } from '../utproject.interface';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-fir',
  templateUrl: './fir.component.html',
  styleUrls: ['./fir.component.css']
})
export class FirComponent {
  ut!:Ut
  Users!: User[];
  Products!: Product[];
  
  projectForm = this._fb.group({
    id: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(5)]],
    ordernumber: ['',Validators.required],
    pruchasenumber: ['',Validators.required],

    processingdate: ['',Validators.required],
    duedate: ['',Validators.required],

    quantity:[0,Validators.min(1)],
    
    product: this._fb.group({
      id: [0],
      name: ['',Validators.required],
      longid: [''],
      productstock: [0],
      materialstock: [0]
    }),
    user:this._fb.group({
      id:[0],
      name: ['',Validators.required],
      phonenumber: ['']
    }),
  })

  constructor(
    
    private _fb :FormBuilder
    ){}

    onSubmit(){
      
    }

}
