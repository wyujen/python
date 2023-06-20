import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book, Tag } from 'src/app/_data/_book.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  @Input() book?: Book;
  @Input() tags?: Tag[];

  @Output() detailSave = new EventEmitter();
  @Output() detailDelete = new EventEmitter();

  detailsave(){
    this.detailSave.emit(this.book)
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
    }else{
      this.book.bookTagId = this.book?.bookTagId.filter((tag) => tag !== id)
      console.log(this.book?.bookTagId)
    }
  }
}
