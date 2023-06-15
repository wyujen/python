import { Component, OnInit } from '@angular/core';
import { Book, Tag } from '../_data/_book.interface';
import { FormBuilder } from '@angular/forms'
import { Location } from '@angular/common';
import { BookService } from '../book.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  tags!: Tag[]
  newBook!: Book

  newId!: number

  bookForm = this._fb.group({
    id:[0],
    name: [''],
    writer: [''],
    bookTagId: [[] as number[]]

  })

  constructor(
    private _fb: FormBuilder,
    private _bookService: BookService,
    private location: Location,

  ) { }


  ngOnInit(): void {
    this._bookService.genId().subscribe(id => {
      this.newId = id
      console.log("id====> ", id)
    })
    this._bookService.getBooks().subscribe(tags => this.tags = tags)


  }
  goBack() {
    this.location.back();

  }
  OnSubmit() {
    
    this.newBook = this.bookForm.value as Book;
    this.newBook.id = this.newId
    console.log("OnSubmit 被調用了",this.newBook);
    this._bookService.addBook(this.newBook).subscribe(() => {
      console.log("書籍已成功添加");
      this.goBack()
    });

  }
  
  

}
