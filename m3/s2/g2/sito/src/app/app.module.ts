import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompComponent } from './comp/comp.component';
import { HomeComponent } from './pages/home/home.component';
import { ActiveComponent } from './pages/active/active.component';
import { InactiveComponent } from './pages/inactive/inactive.component';

@NgModule({
  declarations: [
    AppComponent,
    CompComponent,
    HomeComponent,
    ActiveComponent,
    InactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
