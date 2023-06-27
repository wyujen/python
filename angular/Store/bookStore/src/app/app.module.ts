import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './_data/in-memory-data.service';
import { BookListComponent } from './book-list/book-list.component';

import { booksReducer } from './store/book.reducer';

import { StoreModule } from '@ngrx/store';
import { CollectionComponent } from './collection/collection.component';
import { AddBookComponent } from './add-book/add-book.component';

@NgModule({

  declarations: [
    AppComponent,
    BookListComponent,
    CollectionComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    StoreModule.forRoot({ books:booksReducer }),

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
    
    
  ],
  
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
