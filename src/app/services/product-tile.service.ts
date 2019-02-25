import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductTileService {
  cart: any[] = [];
  cartCount;

  constructor() { }

  updateCart(selectedProduct) {
    this.cart.push(selectedProduct);
    console.log(this);
    this.cartCount = this.cart.length;
    // console.log(this.cartCount);
  }
}
