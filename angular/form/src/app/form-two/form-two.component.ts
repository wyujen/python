import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { projectService } from '../project.service';
import { Ut, User, Product } from '../utproject.interface';


@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.css']
})
export class FormTwoComponent implements OnInit {
  
  ut!:Ut
  Users: User[] = [];
  Products!: Product[];
  



  projectForm = this._fb.group({
    id: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(5)]],
    ordernumber: [''],
    pruchasenumber: [''],

    processingdate: [''],
    duedate: [''],

    quantity:[0,Validators.min(1)],
    product: this._fb.group({
      id: [0],
      name: [''],
      longid: [''],
      productstock: [0],
      materialstock: [0]
    }),
    user:this._fb.group({
      id:[0],
      name: [''],
      phonenumber: ['']
    }),
  })

  constructor(
    private _projectService :projectService, 
    private _fb :FormBuilder
    ){}
  onSubmit(){
    this.ut = this.projectForm.value as Ut
    this._projectService.addUt(this.ut)
  }
  
  ngOnInit() {
    this.getusers();
    this.getproducts();
  }
  getusers():void{
    this.Users =this._projectService.getUsers()
      
  }

  getproducts():void{
    this.Products = this._projectService.getProducts()
      
  }

}
