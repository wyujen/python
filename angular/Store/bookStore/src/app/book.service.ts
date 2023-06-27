import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './_data/_book.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private booksUrl = 'api/books'; 
  constructor(private http: HttpClient) { }

  getbooks(): Observable<Array<Book>> {
    return this.http
      .get<Book[]>(this.booksUrl)
      
  }
}

