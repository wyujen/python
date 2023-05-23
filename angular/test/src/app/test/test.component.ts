import { Component } from '@angular/core';
import { hello } from '../hello';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  constructor(){
    hello()
  }
}
