import { Component } from '@angular/core';
import { hello } from './hello';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  constructor(){
    hello()
  }
}
