import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { concatMap, from, interval, of } from 'rxjs';
import { Book, Tag } from '../_data/_book.interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  Books?: Book[];
  tags?: Tag[];
  tempDelete?:Book[]

  
  constructor(
    private _bookService: BookService,
    private cdr: ChangeDetectorRef
  ){}
  ngOnInit(): void {
    this._bookService.getBooks().subscribe(books => this.Books = books);
    this._bookService.getTags().subscribe(tags => this.tags = tags);
    
  }

  detailsave(book:Book){
    console.log(book)
    this._bookService.updateBook(book).subscribe()
  }

  detaildelete(book:Book){
    console.log(book)
    this._bookService.deleteBook(book.id).subscribe()
    this._bookService.getBooks().subscribe(books => this.Books = books);
  }

  tempdelete(book:Book[]){
    console.log('father',book)
    this.tempDelete = book
  }

  lotdelete(){
    if(this.tempDelete){
      from(this.tempDelete).pipe(
      concatMap(book => this._bookService.deleteBook(book.id))
    ).subscribe(() => {
      this._bookService.getBooks().subscribe(books => this.Books = books);
      
    });
    console.log("11111")
  }}
    


  

}
