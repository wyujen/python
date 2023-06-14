import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Book } from '../_data/_book.interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  Books?: Book[];
  constructor(
    private _bookService: BookService
  ){}
  ngOnInit(): void {
    this._bookService.getBooks().subscribe(books => this.Books = books);
  }


}
