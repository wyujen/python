import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataSetListComponent } from './data-set-list/data-set-list.component';
import { ImagePageComponent } from './image-page/image-page.component';

const routes: Routes = [
  {path: '',redirectTo:'/datasetlist',pathMatch:'full'},
  {path: 'datasetlist', component:DataSetListComponent},
  {path: 'image', component:ImagePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
