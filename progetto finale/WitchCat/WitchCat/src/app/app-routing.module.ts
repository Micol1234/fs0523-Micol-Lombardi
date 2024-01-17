import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,


  },
  {
    path: 'category', component: CategoryComponent
  }
,
{
  path: 'post', component: SinglePostComponent
},
{
  path:'about', component: AboutUsComponent
},
{
  path:'terms', component: TermsComponent
},
{
  path:'contact', component: ContactComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
