import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../_data/_book.interface';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { BookCompontentStore } from '../book.componentStore';

@Component({
  selector: 'app-book-detail2',
  templateUrl: './book-detail2.component.html',
  styleUrls: ['./book-detail2.component.css']
})
export class BookDetail2Component implements OnInit {

  book$?: Observable<Book>
  book?: any

  bookForm = this._fb.group({
    id:[0],
    name: [''],
    writer: [''],
    bookTagId: [[] as number[]]
  
    })

  constructor(
    private _fb: FormBuilder,
    private _bookCS: BookCompontentStore) { }


  ngOnInit(): void {

    this.book$ = this._bookCS.bookDetail$
    this.book$.subscribe((book) => this.book = book)
    this.setFormvalue()
  }

  setFormvalue(){
    this.bookForm.patchValue({
      id: this.book?.id,
      name: this.book?.name,
      writer: this.book?.writer,
      bookTagId: this.book?.bookTagId
    });
  }

  detailsave(){
    const book: Book = this.bookForm.value as Book
    this._bookCS.updatebook(book)
  }

  deletebook(){
    const book: Book = this.bookForm.value as Book
    this._bookCS.deleteOnebook(book)
    console.log('del')
    
  }

  
  
}
