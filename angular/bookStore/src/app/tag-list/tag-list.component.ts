import { Component, OnInit } from '@angular/core';
import { Book, Tag } from '../_data/_book.interface';
import { BookService } from '../book.service';
import { forkJoin, map } from 'rxjs';
@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {

  tags?: Tag[]
  

  constructor(
    private _bookService: BookService
  ){}
  ngOnInit(): void {
    forkJoin({
      books: this._bookService.getBooks(),
      tags: this._bookService.getTags()
    }).pipe(
      map(results => {
        const {books, tags} = results;
    
        
        tags.forEach(tag => {
          tag.tagBooks = books.filter(book => book.bookTagId.includes(tag.id));
        });
    
        return tags;
      })
    ).subscribe(tags => {
      this.tags = tags;
    });
    
    

    
  }

}
