import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { ShopCarComponent } from './shop-car/shop-car.component';

const routes: Routes = [
  {path: '',redirectTo:'/list',pathMatch:'full'},
  {path: 'list', component:BookListComponent},
  {path: 'car', component:ShopCarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
