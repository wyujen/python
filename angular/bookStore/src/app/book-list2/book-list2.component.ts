import { Component, OnInit } from '@angular/core';
import { BookCompontentStore } from '../book.componentStore';
import { Observable } from 'rxjs';
import { Book } from '../_data/_book.interface';

@Component({
  selector: 'app-book-list2',
  templateUrl: './book-list2.component.html',
  styleUrls: ['./book-list2.component.css']
})
export class BookList2Component implements OnInit {

  books$?: Observable<Book[]>
  bookDetailValue$?: Observable<boolean>
  constructor(private _bookCS: BookCompontentStore){}
  
  ngOnInit(): void {
    this.books$ = this._bookCS.books$
    this.bookDetailValue$ = this._bookCS.bookDetailValue$
  }

  setDetail(book: Book): void {
    this._bookCS.setBookDetail([book])
  }

}
