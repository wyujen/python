import { createReducer, on } from '@ngrx/store';

import { BooksActions, BooksApiActions } from './book.action';
import { Book } from '../_data/_book.interface';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
    initialState,
    on(BooksApiActions.retrievedBookList, (_state, { books }) =>  books),
    on(BooksActions.addBook, (state, { book }) => [...state, book])
);

