import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable, of, switchMap, tap } from 'rxjs';

export interface Book {
  id: string;
  name: string;
}

const fakeBooks: Book[] = [
  { id: '1', name: '三國演義' },
  { id: '2', name: '天龍' }
]

export interface BookCsState {
  bookEnties: Record<string, Book>
  shopcar: Record<string, Book>
}

@Injectable({
  providedIn: 'root'
})
export class BookStore extends ComponentStore<BookCsState> {

  constructor() {
    super({
      bookEnties: {},
      shopcar: {}
    })
    this.loadBooks$()
  }
  // ==========select==
  readonly books$: Observable<Book[]> = this.select(state => Object.values(state.bookEnties))
  readonly carbook$: Observable<Book[]> = this.select(state => Object.values(state.shopcar))
  // ==select==========

  // ==========updater==
  readonly addBooks = this.updater((currentState, newBooks: Book[]) => {
    // 將書本轉成物件
    const newBookEntries = newBooks.reduce((entries, book) => ({ ...entries, [book.id]: book }), {});
    // 合併新書和當前書
    const mergedBookEntries = { ...currentState.bookEnties, ...newBookEntries };
    // 返回新的狀態
    return {
      ...currentState,
      bookEnties: mergedBookEntries
    };
  });

  readonly addToCart = this.updater((currentState, book: Book) => {
    // console.log(book)
    return {
      ...currentState,
      shopcar: {
        ...currentState.shopcar,
        [book.id]: book
      }
    };
  });

  readonly removeFromCart = this.updater((currentState, book: Book) => {
    console.log('de====>',book)
    let newShopcar = { ...currentState.shopcar };
    delete newShopcar[book.id];
    return {
      ...currentState,
      shopcar: newShopcar
    };
  });

  // ==updater==========

  // ==========effect==
  readonly loadBooks$ = this.effect((trigger$: Observable<void>) => {
    return trigger$.pipe(
      switchMap(() =>
        // 用 of 模擬一個異步請求，實際使用中可能會是一個真正的 HTTP 請求
        of(fakeBooks).pipe(
          tap(books => this.addBooks(books)),
        )
      )
    )
  });
  // ==effect==========
};


  // private convertArrayToRecord(books: Book[]): Record<string, Book> {
  //   return books.reduce((acc, book) => ({
  //     ...acc,
  //     [book.id]: book
  //   }), {});
  // }
