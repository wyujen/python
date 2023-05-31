import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Ut } from '../utproject.interface';
import { PRODUCTS, USERS} from '../fakedata';

import { projectService } from '../project.service';

@Component({
  selector: 'app-inputproject',
  templateUrl: './inputproject.component.html',
  styleUrls: ['./inputproject.component.css']
})
export class InputprojectComponent implements OnInit {
  projectForm!: FormGroup;
  ut!:Ut
  products=PRODUCTS;
  users=USERS;
  selectedUserPhoneNumber?: string;
  selectedProductStock?:number
  selectedProductMaterialstock?:number

  constructor(
    private formBuilder: FormBuilder,
    private projectService: projectService
    ) {};


  ngOnInit(): void {
    this.projectForm = this.formBuilder.group({
      
      id: '',
      ordernumber: null,
      pruchasenumber: null,
  
      processingdate: new Date(),
      duedate: new Date(),
  
      product:{
          id: '',
          name: "",
          longid: "",
          productstock: null,
          materialstock: null
          },
      user:{ id:null, name: '', phonenumber: ''},
      quantity:""
      
    });
    
  }

    onSubmit(){
      this.ut = this.projectForm.value
      this.projectService.addUt(this.ut)
    }
}
