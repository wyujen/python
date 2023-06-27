import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, throwIfEmpty } from 'rxjs';
import { increment, decrement, reset } from '../Store/counter/counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent {
  count$!: Observable<number>

  constructor( private store : Store<{ count: number }>){
    this.count$ = store.select('count')
  }

  increment(){
    this.store.dispatch(increment())
  }
  decrement(){
    this.store.dispatch(decrement())
  }
  reset(){
    this.store.dispatch(reset())
  }
}
