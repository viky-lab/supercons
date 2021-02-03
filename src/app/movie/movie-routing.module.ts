import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
  
const routes: Routes = [
  { path: '', redirectTo: 'movie/index', pathMatch: 'full' },
  { path: 'movie', redirectTo: 'movie/index', pathMatch: 'full'},
  { path: 'movie/index', component: IndexComponent },
  { path: 'movie/:movieId/view', component: ViewComponent },
  { path: 'movie/create', component: CreateComponent },
  { path: 'movie/:movieId/edit', component: EditComponent } 
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }