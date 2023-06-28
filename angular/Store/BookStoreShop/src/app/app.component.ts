import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { Book, BookStore } from './book.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  books$: Observable<Book[]>;

  constructor( private bookStore:BookStore){
    this.books$ = this.bookStore.books$
  }
  ngOnInit(): void {
    

  }
  title = 'BookStoreShop';
}
