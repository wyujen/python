import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputprojectComponent } from './inputproject/inputproject.component';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FormTwoComponent } from './form-two/form-two.component';

@NgModule({
  declarations: [
    AppComponent,
    InputprojectComponent,
    ProjectdetailComponent,
    HomeComponent,
    FormTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
