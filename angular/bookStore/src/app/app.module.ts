import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './_data/in-memory-data.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';

import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookAddComponent } from './book-add/book-add.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TagListComponent } from './tag-list/tag-list.component';
import { ListComponent } from './book-list/list/list.component';
import { DetailComponent } from './book-list/list/detail/detail.component';
import { BookList2Component } from './book-list2/book-list2.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    
    BookDetailComponent,
    BookAddComponent,
    HomePageComponent,
    TagListComponent,
    ListComponent,
    DetailComponent,
    BookList2Component
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]

  
})
export class AppModule { }
