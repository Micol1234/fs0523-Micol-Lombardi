import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CategorieComponent } from './categorie/categorie.component';

const routes: Routes = [

  { path: '', component: HomeComponent
  },
  { path: 'categories', component: CategorieComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
