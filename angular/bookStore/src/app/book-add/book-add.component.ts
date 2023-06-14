import { Component } from '@angular/core';
import { Book } from '../_data/_book.interface';
import { FormBuilder } from '@angular/forms'
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent {

  newBook!:Book

  bookForm = this._fb.group({
    id:[this._bookService.genId()],
    name:[''],
    writer:[''],
    bookTagId:[]
    
  })

  constructor(
    private _fb : FormBuilder,
    private _bookService : BookService
    ){}

  OnSubmit(){
    this.newBook = this.bookForm.value as Book ;
    
  

  }



}
