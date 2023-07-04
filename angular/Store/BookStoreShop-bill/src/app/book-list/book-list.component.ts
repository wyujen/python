import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Book, BookStore } from '../book.store';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books$: Observable<Book[]>;
  carBooks$: Observable<Book[]>;

  constructor(private bookStore: BookStore) {
    this.books$ = this.bookStore.books$
    this.carBooks$ = this.bookStore.carbook$
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

  getCheckedValue(bookId:string):Observable<boolean>{
    return this.carBooks$.pipe(
      map(books =>books.some(book=>book.id ===bookId))
    )
  }


}


