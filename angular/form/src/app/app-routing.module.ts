import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InputprojectComponent } from './inputproject/inputproject.component';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';
import { FormTwoComponent } from './form-two/form-two.component';

const routes: Routes = [
  // {path: '', redirectTo: '/home', pathMatch:'full'},
  // {path: 'home', component: HomeComponent},
  // {path: 'detail', component: ProjectdetailComponent},
  // {path: 'inputproject', component: FormTwoComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
