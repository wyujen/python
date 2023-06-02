import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { ProjectService } from '../project.service';
import { Ut, User, Product } from '../utproject.interface';


@Component({
  selector: 'app-input-project',
  templateUrl: './input-project.component.html',
  styleUrls: ['./input-project.component.css']
})
export class InputProjectComponent implements OnInit  {

  ut!:Ut
  Users: User[] = [];
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
    private _projectService :ProjectService, 
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
