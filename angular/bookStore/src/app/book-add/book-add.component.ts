import { Component, OnInit } from '@angular/core';
import { Book, Tag } from '../_data/_book.interface';
import { FormBuilder, Validators } from '@angular/forms'
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
    name: ['',Validators.required],
    writer: ['',Validators.required],
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
      this.bookForm.get('id')?.setValue(id);
      console.log("id====> ", id)
    })
    this._bookService.getTags().subscribe(tags => this.tags = tags)


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
  tagCheckbox(tagId: number){
    console.log(this.bookForm.value.bookTagId);
    console.log(tagId)
    let bookTagId = this.bookForm.value.bookTagId||[];

    if (!this.bookForm.value.bookTagId!.includes(tagId)){
      bookTagId.push(tagId);
      bookTagId.sort()
      this.bookForm.controls['bookTagId'].setValue(bookTagId)
      console.log("if",bookTagId);

    }else if (this.bookForm.value.bookTagId!.includes(tagId)){
  
      bookTagId = bookTagId.filter((tag) => tag !== tagId)
      this.bookForm.controls['bookTagId'].setValue(bookTagId)
      console.log("else if ",bookTagId)
    }
  }
  

}


