import { Injectable } from '@angular/core';
import { UTS, USERS, PRODUCTS } from './fakedata';
import { Ut, User, Product } from './utproject.interface'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  Uts = UTS
  Users = USERS
  Products = PRODUCTS

  addUt(ut:Ut):void {
    this.Uts.push(ut)
  }
  
  getUts ():Ut[]{
  return this.Uts
  }

  getUsers():User[]{
    return this.Users
  }

  getProducts():Product[]{
    return this.Products
  }

  constructor() { }
}
