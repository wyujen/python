import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Book, Tag } from './_book.interface';
;

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService 
{
  createDb(){
    const books : Book[] = [
    {id: 1, name: '百年孤獨',writer:'加布里埃爾', bookTagId:[1, 2] },
    {id: 2, name: '追風箏的人',writer:'卡勒德·胡賽尼', bookTagId:[3,5] },
    {id: 3, name: '看見',writer:'柴門文', bookTagId:[1,3,6] },
    {id: 4, name: '傲慢與偏見',writer:'珍·奧斯汀', bookTagId:[1,3,6] },
    {id: 5, name: '三體',writer:'劉慈欣', bookTagId:[7] },
    {id: 6, name: '解憂雜貨店',writer:'東野圭吾', bookTagId:[2,4,5] },
    {id: 7, name: '哈利波特',writer:'J.K.羅琳', bookTagId:[1,2,7] },
    {id: 8, name: '小王子',writer:'安托萬', bookTagId:[1,4,5,7] },
    {id: 9, name: '挪威的森林',writer:'村上春樹', bookTagId:[1,2,3] },
    ];

    const tags : Tag[] = [
      {id: 1, name: '經典'},
      {id: 2, name: '小說'},
      {id: 3, name: '浪漫愛情'},
      {id: 4, name: '哲學思考'},
      {id: 5, name: '人性探討'},
      {id: 6, name: '社會寫實'},
      {id: 7, name: '奇幻'},
    ]

    return {books, tags}
  }
    genId(books:Book[]){
      return books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1
    }

  constructor() { }
}
