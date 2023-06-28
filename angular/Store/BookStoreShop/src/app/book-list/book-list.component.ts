import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, BookStore } from '../book.store';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books$: Observable<Book[]>;

  constructor(private bookStore: BookStore) {
    this.books$ = this.bookStore.books$
  }
  ngOnInit(): void {
  }

  chickbook(e: any, book: Book) {
    console.log(e.target.checked)
    console.log(e)
    if (e.target.checked) {
      this.bookStore.addToCart(book)
    } else { this.bookStore.removeFromCart(book) }
  }
  title = 'BookStoreShop';


}


