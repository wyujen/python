import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  newHero:{name:string, age:number} = { name: '漩渦鳴人', age: 15 }
  heros = [
    { name: '兩斤勘吉', age: 35 },
    { name: '秋本麗子', age: 25 },
    { name: '野比大雄', age: 12 },
    { name: '江戶川柯南', age: 8 }
  ];
  getNewHeroFromAnotherComponent(newHero: { name: string; age: number; }){
    console.log('app component')
    console.log(newHero)
    this.heros.push(newHero)
  }
}
