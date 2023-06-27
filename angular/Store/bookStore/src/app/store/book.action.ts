import { createActionGroup, props } from '@ngrx/store';
import { Book } from '../_data/_book.interface';

export const BooksActions = createActionGroup({
    source: 'Books',
    events: {
        'Add Book': props<{ book: Book }>(),
    },
});
export const BooksApiActions = createActionGroup({
    source: 'Books API',
    events: {
        'Retrieved Book List': props<{ books: ReadonlyArray<Book> }>(),
    },
});