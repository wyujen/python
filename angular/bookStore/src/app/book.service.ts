import { Injectable, OnInit } from '@angular/core';
import { BOOKS, TAGS } from './_data/_bookData';
import { Book, Tag } from './_data/_book.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[]= BOOKS;
  private booksUrl = 'api/books'
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private _http: HttpClient,
    
  ) { }

  getBooks():Observable<Book[]> {
    return this._http.get<Book[]>(this.booksUrl)
  }

  getBook(id:number):Observable<Book>{
    const url = `${this.booksUrl}/${id}`;
    return this._http.get<Book>(url)
    
  }

  genId():number{
    
    return this.books.length > 0 ? Math.max(...this.books.map(book => book.id))+1:1;
  }

  updateBook(book: Book):Observable<any>{
    return this._http.put(this.booksUrl, book, this.httpOptions)
  }

}
