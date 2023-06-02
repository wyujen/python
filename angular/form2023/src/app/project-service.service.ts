import { Injectable } from '@angular/core';
import { UTS, USERS, PRODUCTS } from './fakedata';
import { Ut, User, Product } from './utproject.interface'

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  Uts = UTS
  Users = USERS
  Products = PRODUCTS

  constructor() { }

  getUts ():Ut[]{
    return this.Uts
  }

  getUsers():User[]{
    return this.Users
  }

  getProducts():Product[]{
    return this.Products
  }

  addUt(ut:Ut):void {
    this.Uts.push(ut)
  }
}
