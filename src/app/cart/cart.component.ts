import { CartService } from '../services/cart.service';
import { Component, OnInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, AfterContentChecked {
  cartProducts: any[] = [];
  cartTotal: any = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartProducts = this.cartService.getCartProducts();
  }

  removeFromCart(selectedProduct) {
    this.cartService.removeCart(selectedProduct);
  }

  onAddQty(selectedProduct) {
    console.log(selectedProduct);
    selectedProduct.product_qty++;
  }

  onSubQty(selectedProduct) {
    if (selectedProduct.product_qty > 0) {
      selectedProduct.product_qty--;
    }
  }

  ngAfterContentChecked() {
    this.cartProducts = this.cartService.getCartProducts();
    this.cartTotal = this.cartService.getCartTotal();
  }

}
