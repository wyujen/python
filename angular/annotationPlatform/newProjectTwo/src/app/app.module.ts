import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddDatasetComponent } from './add-dataset/add-dataset.component';
import { AddOntologyComponent } from './add-ontology/add-ontology.component';
import { NameAndDatasetComponent } from './name-and-dataset/name-and-dataset.component';
import { OntologyComponent } from './ontology/ontology.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProjectComponent,
    AddDatasetComponent,
    AddOntologyComponent,
    NameAndDatasetComponent,
    OntologyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
