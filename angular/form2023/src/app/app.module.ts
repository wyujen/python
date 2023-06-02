import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputProjectComponent } from './input-project/input-project.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    InputProjectComponent,
    ProjectdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
