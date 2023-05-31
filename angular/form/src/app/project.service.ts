import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UTS, USERS, PRODUCTS } from './fakedata';
import { Ut } from './utproject.interface'



@Injectable({
  providedIn: 'root'
})
export class projectService {

  Uts = UTS
  USERS = USERS
  PROJECTS = PRODUCTS

  addUt(ut:Ut):void {
    this.Uts.push(ut)
  }
  
  getUts ():Observable<Ut[]>{
  return of(this.Uts)
  }


  constructor() { }
}

