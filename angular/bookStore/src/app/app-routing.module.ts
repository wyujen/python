import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, NavigationEnd } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookAddComponent } from './book-add/book-add.component';
import { TagListComponent } from './tag-list/tag-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/booklist', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'booklist', component: BookListComponent},
  {path: 'taglist', component: TagListComponent},
  {path: 'detail/:id', component: BookDetailComponent},
  {path: 'add', component: BookAddComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { 

  constructor(private router: Router){
    this.router.events.subscribe(event =>{
      if (event instanceof NavigationEnd){
        console.log('目前位置',event.url)
      }
    })
  }
}
