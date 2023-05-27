import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThreeComponent } from './three/three.component';
import { OneComponent } from './one/one.component';
const routes: Routes = [
  {path: '', redirectTo: 'one', pathMatch: 'full'},
  {path: 'one', component: OneComponent},
  {path: 'three', component: ThreeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
