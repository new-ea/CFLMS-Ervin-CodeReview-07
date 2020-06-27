import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class CartService {
  items = [];
  constructor() { }

  addToCart(offer) {
    this.items.push(offer);
  }
 
  getItems() {
    return this.items;
  }

}
