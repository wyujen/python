import { Component,OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-input',
  templateUrl: './child-input.component.html',
  styleUrls: ['./child-input.component.css']
})
export class ChildInputComponent  implements OnInit {

  @Output() outputAddHero = new EventEmitter<any>()
  @Input()
  inputDefaultHero!: { name: string; age: number; }; 

  constructor() { }

  ngOnInit() {
    console.log('取得從外部元件的資料')
    console.log(this.inputDefaultHero)
  }
  addHero() {
    console.log('將元件的資料output傳送出去')
    this.outputAddHero.emit(this.inputDefaultHero)
    this.inputDefaultHero = { name: '', age: 0 }
  }
  

}
