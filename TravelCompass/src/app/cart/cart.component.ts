import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  items;
  total: number;
  discount: string;
  itemPrice: number = 0;
  showDeletedMessage : boolean;

  constructor(private cartService: CartService) { } 

  showModal() {
    Swal.fire(
      'Thank You for your purchase!',
      'Your booking information will be sent soon to you!',
      'success'
    )
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    for (let nextItem of this.items) {
      // calculating the sum
      this.itemPrice += Number(nextItem.price)
    }

    // calculating discount
    if (this.itemPrice < 200) {
      this.discount = `Total Price:`;
      this.total = Number(this.itemPrice);
      this.total *= 1; 

    } else if (this.itemPrice >= 200 && this.itemPrice < 500 ) {
      this.itemPrice = this.itemPrice * 0.9;
      this.discount = `Total Price (10% discount):`;
      this.total = Number(this.itemPrice);
      this.total *= 1; 

    } else if ( this.itemPrice >= 500) {
      this.itemPrice = this.itemPrice * 0.8;
      this.discount = `Total Price (20% discount):`;
      this.total = Number(this.itemPrice);
      this.total *= 1; 
      
    }

  }

  clearCart() {
    this.showModal();
    this.items = [];
    this.total = 0;
    this.discount = "";
  }

}
