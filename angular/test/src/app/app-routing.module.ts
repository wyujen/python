import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component'
import { TwoComponent } from './two/two.component';
import { TagmovieComponent } from './tagmovie/tagmovie.component';
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: TagmovieComponent},
  // {path: 'user', component: UserComponent},
  // {path: 'userForm', component: TwoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
