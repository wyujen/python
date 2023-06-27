import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Validators } from '@angular/forms';

import { Book, Tag } from 'src/app/_data/_book.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
@Input() Books?: Book[]  
@Input() tags?: Tag[]
@Input() editValue?: boolean


@Output() detailSave = new EventEmitter();
@Output() detailDelete = new EventEmitter();
@Output() lotDelete = new EventEmitter();

  tempDelete:Book[] = [];
  detailbook? : Book


  
  
  constructor (){}

  getEditValue(){
    if(this.editValue==true){
      return true
    }else{
      this.tempDelete=[]
      return false
    }
  }
  updatetempdelete (book: Book){
    this.detailbook = undefined
    if (!this.tempDelete.includes(book)){
      
      this.tempDelete.push(book);
      this.tempDelete.sort()
      console.log("if",this.tempDelete);
      this.lotDelete.emit(this.tempDelete);
      

    }else if (this.tempDelete.includes(book)){
  
      this.tempDelete = this.tempDelete.filter((temp) => temp !== book)
      console.log("else if ",this.tempDelete);
      this.lotDelete.emit(this.tempDelete);
    }
  }
  selectbook(book:Book){
    this.detailbook = book;
    
  }

  detailsave(book:Book){
    this.detailSave.emit(book)
    console.log('fa',book)
    this.tempDelete = []
    this.detailbook = undefined;
  }

  detaildelete(book:Book){
    this.detailDelete.emit(book)
    this.tempDelete = []
    this.detailbook = undefined;
  }

}
