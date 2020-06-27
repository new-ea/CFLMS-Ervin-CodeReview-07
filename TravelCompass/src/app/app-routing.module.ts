import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { OffersListComponent } from './offers-list/offers-list.component';
import { OfferDetailsComponent } from './offer-details/offer-details.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {
    path:"", component: HomeComponent
  },
  {
    path:"blog", component: BlogComponent
  },
  {
    path:"offers-list", component: OffersListComponent
  },
  {
    path: 'offers/:offerId', component: OfferDetailsComponent
  },
  {
    path: 'cart', component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
