import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './layouts/header/header.component';
import { CategoryNavbarComponent } from './layouts/category-navbar/category-navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { CategoryComponent } from './pages/category/category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { ComentFormComponent } from './comments/coment-form/coment-form.component';
import { ComentListComponent } from './comments/coment-list/coment-list.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { PostCardComponent } from './layouts/post-card/post-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CategoryNavbarComponent,
    FooterComponent,
    CategoryComponent,
    SinglePostComponent,
    TermsComponent,
    ContactComponent,
    SubscriptionComponent,
    ComentFormComponent,
    ComentListComponent,
    AboutUsComponent,
    PostCardComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
