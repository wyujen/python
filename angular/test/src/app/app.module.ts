import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserComponent } from './user/user.component';
import { TwoComponent } from './two/two.component';
import { HomeComponent } from './home/home.component';

import { TagmovieComponent } from './tagmovie/tagmovie.component';
import { ChildInputComponent } from './input/child-input/child-input.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TwoComponent,
    HomeComponent,
    TagmovieComponent,
    ChildInputComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
