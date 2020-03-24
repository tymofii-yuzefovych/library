import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InitLayoutComponent} from './pages/init-layout/init-layout.component';
import {CreateBookComponent} from './pages/create-book/create-book.component';
import {BookDetailComponent} from './pages/book-detail/book-detail.component';


const routes: Routes = [
  {
    path: '',
    component: InitLayoutComponent
  },
  {
    path: 'create-book',
    component: CreateBookComponent
  },
  {
    path: 'book-detail/:id',
    component: BookDetailComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
