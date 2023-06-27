import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';
import { InputProjectComponent } from './input-project/input-project.component';

const routes: Routes = [
  {path: 'inputproject', component: InputProjectComponent},
  {path: 'projectdetail', component: ProjectdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
