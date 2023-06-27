import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Book } from '../_data/_book.interface';
import { BooksActions } from '../store/book.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  newBook: Partial<Book> = {};

  bookForm = this._fb.group({
    id:[0],
    name: ['',Validators.required],
    writer: ['',Validators.required],
    bookTagId: [[] as number[]]
    
  })
    constructor(
      private _fb: FormBuilder,
      private store :Store) { }
  
    addBook(event: Event) {
      event.preventDefault();
      this.store.dispatch(BooksActions.addBook({ book: this.newBook as Book }));
      this.newBook = {};
  }
}
