// import { ProductsService } from './products.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: any[] = [];
  cartCount = 0;
  cartTotal: any = 0;

  constructor() {console.log(this.cartCount); }

  getCartProducts() {
    return this.cart = JSON.parse(localStorage.getItem('cart'));
  }

  updateCart(selectedProduct) {
    // const isMature = ages.filter(age => age >= 18);
    // const alreadyInCart = this.cart.filter (cp => cp.product_id === selectedProduct.product_id);
    // console.log('ainc ' + alreadyInCart);
    // console.log('sp ' + selectedProduct.product_id);
    this.cart.push(selectedProduct);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.cart = JSON.parse(localStorage.getItem('cart'));
    this.cartCount = this.cart.length;
    // console.log(this.cart);
    // console.log(this.cartCount);
    this.cartTotal = this.getCartTotal();
  }

  removeCart(selectedProduct) {
    const index = this.cart.indexOf(selectedProduct);
    this.cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.cart = JSON.parse(localStorage.getItem('cart'));
    this.cartCount = this.cart.length;
    this.cartTotal = this.getCartTotal();
  }

  getCartTotal() {
    // console.log(this.cart[0].product_id);
    const TotalCartPrice = this.cart
    .map(product => product.product_price * product.product_qty)
    .reduce((total, addedProductPrice) => total + addedProductPrice, 0);
    console.log(TotalCartPrice);
    return TotalCartPrice;

    // const cTotal = this.cart.reduce(function(total, ) {
    //   return total + prod_price;
    // }, 0);
  }
}
