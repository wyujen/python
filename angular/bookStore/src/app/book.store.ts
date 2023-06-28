import { Injectable } from "@angular/core"
import { Book } from "./_data/_book.interface"
import { ComponentStore, tapResponse } from "@ngrx/component-store"

import { Observable, switchMap } from "rxjs"
import { BookService } from "./book.service"


export interface BooksState {
    books: Book[]
}

@Injectable()
export class BookStore extends ComponentStore<BooksState>{
    constructor(private bookService: BookService) {
        super({ books: [] })

        this.getBooksEffect()
    }

    readonly books$: Observable<Book[]> = this.select(state => state.books)
    readonly addBook = this.updater((state, book: Book) => {
        return { ...state, books: [...state.books, book] }
    })

    readonly getBooksEffect = this.effect(trigger$ =>
        trigger$.pipe(
            switchMap(() =>
                this.bookService.getBooks().pipe(
                    tapResponse((books) => this.patchState({ books }),
                        error => { console.log(error) }
                    ))
            ))
    )

    readonly addBookEffect = this.effect((book$: Observable<Book>) =>
        book$.pipe(
            switchMap((book) =>
                this.bookService.addBook(book).pipe(
                    tapResponse(
                        addedBook => this.addBook(addedBook),
                        error => {
                            console.error('Error adding book', error);
                        }
                    )
                ))
        )
    )


}