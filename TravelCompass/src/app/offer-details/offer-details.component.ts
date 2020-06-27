import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';

import { offers } from '../offers';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.sass']
})
export class OfferDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private cartService: CartService) { }
  offer;

  showModal() {
    Swal.fire(
      'Your product has been added to the cart'
      )
  }
  
  addToCart(product) {
    this.cartService.addToCart(product);
    this.showModal();
  }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
    this.offer = offers[+params.get('offerId')];
   });
  }

}
