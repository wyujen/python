import { Injectable, OnInit } from '@angular/core';
import { BOOKS, TAGS } from './_data/_bookData';
import { Book, Tag } from './_data/_book.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[]= BOOKS;
  private booksUrl = 'api/books'
  private tagsUrl = 'api/tags'
  
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

  getTags():Observable<Tag[]>{
    return this._http.get<Tag[]>(this.tagsUrl)
  }

  genId():Observable<number>{
    const newId = this.books.length > 0 ? Math.max(...this.books.map(book => book.id))+1 : 1
    return of(newId)
  }

  updateBook(book: Book):Observable<any>{
    return this._http.put(this.booksUrl, book, this.httpOptions).pipe(
      tap(()=>{
        console.log("save book")
      })
    )
  }

  addBook(book:Book):Observable<Book>{
    return this._http.post<Book>(this.booksUrl, book, this.httpOptions).pipe(
      tap(response => {
        console.log("書籍已成功添加，服務端回應：", response);
        this.books.push(response)
      }),
      catchError(error => {
        console.error("添加書籍時發生錯誤：", error);
        return throwError(error);
      })
    );
  }

  deleteBook(id:number): Observable<Book>{
    const url = `${this.booksUrl}/${id}`
    return this._http.delete<Book>(url, this.httpOptions)

  }
}