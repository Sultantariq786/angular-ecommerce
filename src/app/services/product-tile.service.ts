// import { ProductsService } from './products.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductTileService {
  cart: any[] = [];
  cartCount = 0;

  constructor() {console.log(this.cartCount); }

  getCartProducts() {
    return this.cart = JSON.parse(localStorage.getItem('cart'));
  }

  updateCart(selectedProduct) {
    this.cart.push(selectedProduct);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.cart = JSON.parse(localStorage.getItem('cart'));
    this.cartCount = this.cart.length;
    console.log('In tile Serv =' + this.cart);
    console.log(this.cartCount);
  }

  removeCart(selectedProduct) {
    const index = this.cart.indexOf(selectedProduct);
    this.cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.cart = JSON.parse(localStorage.getItem('cart'));
    this.cartCount = this.cart.length;
  }
}
