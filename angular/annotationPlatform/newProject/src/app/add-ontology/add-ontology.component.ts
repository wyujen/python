import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';

import { Item, Shape } from '../_type&data/project.interface';
import { EntiteService } from '../entite.service';


@Component({
  standalone: true,
  imports:[ReactiveFormsModule, NgFor, NgIf, AsyncPipe],
  selector: 'app-add-ontology',
  templateUrl: './add-ontology.component.html',
  styleUrls: ['./add-ontology.component.css']
})
export class AddOntologyComponent implements OnInit {
  
  datasetForm = this._fb.group({
    name:[''],
    descripthon:[''],
    items: this._fb.array([{}])
  })

  items$?: Observable<Item[]>
  shapes$?: Observable<Shape[]>
  constructor(
    private _entiteService: EntiteService,
    private _fb: FormBuilder
    ){}
  ngOnInit(): void {
    this.items$ = this._entiteService.getItems()
    this.shapes$ = this._entiteService.getShapes()
  }

  get items(): FormArray{
    return this.datasetForm.get('items') as FormArray
  }
  addItem(){
    this.items.push(this._fb.group({}))
  }

  removeItem(index: number){
    this.items.removeAt(index)
  }
}
