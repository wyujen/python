import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { InputProjectComponent } from './input-project/input-project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { FirComponent } from './fir/fir.component';

@NgModule({
  declarations: [
    AppComponent,
    InputProjectComponent,
    ProjectDetailComponent,
    FirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
