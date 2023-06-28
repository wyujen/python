import { Component } from '@angular/core';
import { Book, BookStore } from '../book.store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shop-car',
  templateUrl: './shop-car.component.html',
  styleUrls: ['./shop-car.component.css']
})

export class ShopCarComponent {

  carbook$ : Observable<Book[]>;
  constructor(private bookStore: BookStore) {
    this.carbook$ = this.bookStore.carbook$
  }
}
