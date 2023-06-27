import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home.component";
import { ProductsComponent } from './products.compone';
const routes: Routes =[
    {path:'', component: HomeComponent },
    {path: 'products',component:ProductsComponent},
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]

})
export class AppRoutingModule {}