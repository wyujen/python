import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Ut } from '../utproject.interface';
import { PRODUCTS, USERS} from '../fakedata';

import { projectService } from '../project.service';

@Component({
  selector: 'app-inputproject',
  templateUrl: './inputproject.component.html',
  styleUrls: ['./inputproject.component.css']
})
export class InputprojectComponent {
  projectForm!: FormGroup;
  ut!:Ut
  products=PRODUCTS;
  users=USERS;
  constructor(
    private formBuilder: FormBuilder,
    private projectService: projectService
    ) {
      this.projectForm = this.formBuilder.group({
      
        id: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
        ordernumber: '',
        pruchasenumber: '',
    
        processingdate: new Date(),
        duedate: new Date(),
    
        product:this.formBuilder.group({
            id: ['',Validators.required],
            name: "",
            longid: "",
            productstock: null,
            materialstock: null
            }),
        user: this.formBuilder.group({ 
          id:['',Validators.required],
          name: '',
          phonenumber: ''}),
        quantity:['',Validators.required]
        
      });

      this.projectForm.controls['id'].valueChanges.subscribe(value => {
        this.projectForm.controls['id'].setValue(String(value), { emitEvent: false });
      });
    };


  
    onSubmit(){
      this.ut = this.projectForm.value
      this.projectService.addUt(this.ut)
    }

}
