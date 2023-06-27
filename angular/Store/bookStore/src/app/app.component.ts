import { Component, OnInit } from '@angular/core';
import { selectBooks } from './store/books.selectors';
import { Store } from '@ngrx/store';
import { BookService } from './book.service';
import { BooksApiActions } from './store/book.action';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bookStore';
  books$ = this.store.select(selectBooks);
  

  constructor(
    private store: Store,
    private booksService: BookService){}
  ngOnInit(): void {
    this.booksService
      .getbooks()
      .subscribe(
        (books) => this.store.dispatch(BooksApiActions.retrievedBookList({ books })),
        
        )
      
  }
  

  
}
