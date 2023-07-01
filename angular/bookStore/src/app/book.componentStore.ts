import { Injectable } from "@angular/core"
import { Book } from "./_data/_book.interface"
import { ComponentStore } from "@ngrx/component-store"

import { Observable, from, mergeMap, switchMap, tap, withLatestFrom } from "rxjs"
import { BookService } from "./book.service"



export interface BooksState {
    BookEntires: Record<string, Book>
    BookDetailValue: boolean
    BookDetailEdit: [] | Book[]
    DeleteBookSelect: number[] | []
}

@Injectable({
    providedIn: 'root'
})

export class BookCompontentStore extends ComponentStore<BooksState>{
    constructor(private _bookService: BookService) {
        super({
            BookEntires: {},
            BookDetailValue: false,
            BookDetailEdit: [],
            DeleteBookSelect: []
        })
        this.loadbook()
    }
    // ==========sele==
    readonly books$: Observable<Book[]> = this.select(state => Object.values(state.BookEntires))
    readonly bookDetail$: Observable<Book> = this.select(state => state.BookDetailEdit[0])
    readonly bookDetailValue$: Observable<boolean> = this.select(state => state.BookDetailValue)
    readonly deleteBookSelect$: Observable<number[]> = this.select(state => state.DeleteBookSelect)
    // ==sele==========


    // ==========up====

    readonly addbook = this.updater((state, books: Book[]) => {
        const nextBookEntires = { ...state.BookEntires }
        books.map((book) => {
            nextBookEntires[book.id] = book
            // console.log(nextBookEntires)
        })
        return { ...state, BookEntires: nextBookEntires }
    })

    readonly setBookDetail = this.updater((state, book: Book[]) => {
        const nextBookDailEdit = book

        return { ...state, BookDetailValue: true, BookDetailEdit: nextBookDailEdit }
    })

    readonly resetBookDetailValue = this.updater((state) => {
        return { ...state, BookDetailValue: false }
    })

    readonly setDeleteBook = this.updater((state)=>{
        return {...state}
    })


    // ====up==========


    // ==========eff===

    readonly loadbook = this.effect((void$: Observable<void>) => {
        return void$.pipe(
            tap(() => {
                this._bookService.getBooks().subscribe(book => this.addbook(book))
            })
        )
    })

    readonly updatebook = this.effect((void$: Observable<void>) => {
        return void$.pipe(
            switchMap(() => this.bookDetail$),
            switchMap((book) => this._bookService.updateBook(book)),
            tap(() => this.loadbook())

        )
    })

    readonly deletebook = this.effect((void$: Observable<void>) => {
        return void$.pipe()})
            // withLatestFrom(this.deleteBookSelect$),
            // switchMap((bookIds: number[]) => from(bookIds).pipe(
            //     switchMap((bookId: number) => this._bookService.deleteBook(bookId))

    readonly deletebooks = this.effect((book$: Observable<Book>) =>{
        return book$.pipe(
            tap((book) =>{
                console.log(book)
            }
            
            ) 
        )
    })

    //==eff============

    detailUpdateBook(book: Book) {
        this.setBookDetail([book])
        this.updatebook()
        this.resetBookDetailValue()
    }

}