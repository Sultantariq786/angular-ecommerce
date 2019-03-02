import { ProductsService } from './products.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductTileService {
  cart: any[] = [];
  cartCount;

  constructor() { }

  getCartProducts() {
    return this.cart;
  }

  updateCart(selectedProduct) {
    this.cart.push(selectedProduct);
    this.cartCount = this.cart.length;
    console.log(this.cart);
  }
}
