import { Component } from '@angular/core';
import { Book } from '../_data/_book.interface';
import { ComponentStore } from '@ngrx/component-store';
import { BookStore } from '../book.store';

@Component({
  selector: 'app-book-list2',
  templateUrl: './book-list2.component.html',
  styleUrls: ['./book-list2.component.css'],
  providers:[BookStore]
})
export class BookList2Component {

  books$ = this.bookStore.books$

  constructor(private readonly bookStore:BookStore){}
  // readonly books$ = this.componentStore.select(state => state.books)

  // constructor(private readonly componentStore: ComponentStore<{ books: Book[] }>) { }

  // ngOnInit() {
  //   this.componentStore.setState({ books: [] })
  // }
}
