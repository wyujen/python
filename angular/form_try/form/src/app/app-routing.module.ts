import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InputprojectComponent } from './inputproject/inputproject.component';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';
import { FormTwoComponent } from './form-two/form-two.component';

const routes: Routes = [
  {path: 'inputproject', component: InputprojectComponent},
  {path: 'projectdetail', component: ProjectdetailComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
