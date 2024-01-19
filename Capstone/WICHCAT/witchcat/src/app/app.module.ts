import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { CartComponent } from './pages/admin/cart/cart.component';
import { CategotyComponent } from './pages/admin/categoty/categoty.component';
import { CustumersComponent } from './pages/admin/custumers/custumers.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { OrderComponent } from './pages/admin/order/order.component';
import { CategoryProductsComponent } from './pages/website/category-products/category-products.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { CheckoutComponent } from './pages/website/checkout/checkout.component';
import { CustumerCartComponent } from './pages/website/custumer-cart/custumer-cart.component';
import { CustumerOrderComponent } from './pages/website/custumer-order/custumer-order.component';
import { WebProductsComponent } from './pages/website/web-products/web-products.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
   LoginComponent,
    CartComponent,
    CategotyComponent,
    CustumersComponent,
    LayoutComponent,
    ProductsComponent,
    OrderComponent,
    CategoryProductsComponent,
    LandingComponent,
    CheckoutComponent,
    CustumerCartComponent,
    CustumerOrderComponent,
    WebProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
