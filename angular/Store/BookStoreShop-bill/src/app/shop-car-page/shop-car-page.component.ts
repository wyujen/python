import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, BookStore } from '../book.store';

@Component({
  selector: 'app-shop-car-page',
  templateUrl: './shop-car-page.component.html',
  styleUrls: ['./shop-car-page.component.css']
})
export class ShopCarPageComponent {
  carbook$ : Observable<Book[]>;
  constructor(private bookStore: BookStore) {
    this.carbook$ = this.bookStore.carbook$
  }

}
