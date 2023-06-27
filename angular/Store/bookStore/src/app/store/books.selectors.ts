import { createFeatureSelector } from '@ngrx/store';
import { Book } from '../_data/_book.interface';

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');

