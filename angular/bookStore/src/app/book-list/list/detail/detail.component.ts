import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Book, Tag } from 'src/app/_data/_book.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnChanges {

  @Input() book?: Book;
  @Input() tags?: Tag[];

  @Output() detailSave = new EventEmitter();
  @Output() detailDelete = new EventEmitter();

  bookForm = this._fb.group({
    id:[0],
    name: ['',Validators.required],
    writer: ['',Validators.required],
    bookTagId: [[] as number[]]
  
    })

  constructor (private _fb: FormBuilder){}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['book'] && changes['book'].currentValue) {
      this.bookForm.patchValue({
        id: this.book?.id,
        name: this.book?.name,
        writer: this.book?.writer,
        bookTagId: this.book?.bookTagId
      });
    }}

  detailsave(){

    this.detailSave.emit(this.bookForm.value);
    console.log('update-ch')
    
  }

  detaildelect(){
    this.detailDelete.emit(this.book)
    console.log('delete-ch')
    
  }

  tagchick(id:number){
    return this.book?.bookTagId.includes(id)
  }

  checkboxselect(id:number){
    console.log('checkbox', id)
    
    if (!this.book?.bookTagId.includes(id)){
      this.book?.bookTagId.push(id);
      this.book?.bookTagId.sort()
      console.log(this.book?.bookTagId)
      this.bookForm.controls['bookTagId'].setValue(this.book?.bookTagId || [])
    }else{
      this.book.bookTagId = this.book?.bookTagId.filter((tag) => tag !== id)
      console.log(this.book?.bookTagId)
      this.bookForm.controls['bookTagId'].setValue(this.book?.bookTagId)
    }
  }
}
