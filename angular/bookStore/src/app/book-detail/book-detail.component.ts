import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BookService } from '../book.service';
import { Book } from '../_data/_book.interface';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  id?: number;
  book?: Book

  constructor(
    private route: ActivatedRoute,
    private _bookService: BookService,
    private location: Location
    ){}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id") || '')
    this._bookService.getBook(this.id).subscribe(book => this.book = book)
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


}
