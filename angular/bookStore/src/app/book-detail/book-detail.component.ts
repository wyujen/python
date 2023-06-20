import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BookService } from '../book.service';
import { Book, Tag } from '../_data/_book.interface';
import { combineLatest, forkJoin } from 'rxjs';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  @Input() oneBook?: Book 
  id?: number;
  book?: Book
  tags?: Tag[]
  booktagname?:string[];

  constructor(
    private route: ActivatedRoute,
    private _bookService: BookService,
    private location: Location
    ){}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id") || '')
    
    forkJoin({
      book: this._bookService.getBook(this.id),
      tags: this._bookService.getTags()
    }).subscribe(results => {
      this.book = results.book;
      this.tags = results.tags;
      this.booktagname = results.book.bookTagId?.map(id => results.tags.find(tag => tag.id === id)?.name || '')||[];
    });
    
  }

  goBack() {
    this.location.back();
  }
  
  save(){
    if(this.book){
      this._bookService.updateBook(this.book)
        .subscribe(()=> this.goBack())
    }
  }

  delete(){
    if (this.book){
      this._bookService.deleteBook(this.book.id)
        .subscribe(()=> this.goBack())
    }
  }
}
