import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CategorieComponent } from './categorie/categorie.component';
import { CartCheckoutComponent } from './cart-checkout/cart-checkout.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [HomeComponent, CategorieComponent, CartCheckoutComponent, CheckoutComponent,],
  imports: [
   HomeRoutingModule, SharedModule
  ]
})
export class HomeModuleModule { }
