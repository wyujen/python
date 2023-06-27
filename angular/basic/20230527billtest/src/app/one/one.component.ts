import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})


export class OneComponent {
  textt!: string
  
  constructor(
    private _http: HttpClient,
  ) {}
  
  
  print(){
    console.log(this.textt)
    
  }

  test(){
    this._http.get("http://192.168.1.174:3000/api")
    .subscribe(
      (res) => {console.log(res)}
    )
  }

}

