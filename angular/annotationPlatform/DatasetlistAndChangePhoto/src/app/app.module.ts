import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagePageComponent } from './image-page/image-page.component';
import { DataSetListComponent } from './data-set-list/data-set-list.component';
import { DatasetComponentStore } from './store/dataset-component-store';
import { ImageComponentStore } from './store/image-component-store';

@NgModule({
  declarations: [
    AppComponent,
    ImagePageComponent,
    DataSetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DatasetComponentStore,ImageComponentStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
