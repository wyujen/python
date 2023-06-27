import { Component , OnInit} from '@angular/core';
import { Ut, User, Product } from '../utproject.interface';
import {  FormBuilder, Validators } from '@angular/forms';
import { ProjectServiceService } from '../project-service.service';

@Component({
  selector: 'app-input-project',
  templateUrl: './input-project.component.html',
  styleUrls: ['./input-project.component.css']
})
export class InputProjectComponent implements OnInit{

  ut!: Ut
  Users!:User[]
  Products!: Product[];

  projectForm = this._fb.group({
    id:['',[Validators.required,Validators.minLength(5),Validators.maxLength(5)]],
    ordernumber: ['',Validators.required],
    pruchasenumber: ['',Validators.required],

    processingdate: ['',Validators.required],
    duedate: ['',Validators.required],

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

    quantity:[0,[Validators.required, Validators.min(1)]],
  })
  constructor(
    private _fb :FormBuilder,
    private _projectService: ProjectServiceService
    ){}

    ngOnInit(): void {
      this.getusers()
      this.getproducts()
    }

    onSubmit(){
      this.ut = this.projectForm.value as Ut
      this._projectService.addUt(this.ut)
    }

    getusers():void{
      this.Users =this._projectService.getUsers()
    }

    getproducts():void{
      this.Products = this._projectService.getProducts()
  
    }
  


}
