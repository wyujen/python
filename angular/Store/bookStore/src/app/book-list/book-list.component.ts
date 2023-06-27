import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../_data/_book.interface';
import { BookService } from '../book.service';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent  {

  @Input() books: ReadonlyArray<Book> = [];
  @Output() add = new EventEmitter<string>();

}
