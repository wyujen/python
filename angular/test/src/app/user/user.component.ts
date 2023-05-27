import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  

  name : string =''
  age : number = NaN
  sex : string =''
  country : string=''
  message : string =''
  
  output():void{
    console.log("==================")
    console.log("name:",this.name)
    console.log("age:",this.age)
    console.log("sex:",this.sex)
    console.log("country:",this.country)
    
  }
  
  save():void{
    
  this.output()
  }


}
