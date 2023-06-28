import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { ShopCarComponent } from './shop-car/shop-car.component';
import { ShopCarPageComponent } from './shop-car-page/shop-car-page.component';
import { BookStore } from './book.store';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    ShopCarComponent,
    ShopCarPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BookStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
