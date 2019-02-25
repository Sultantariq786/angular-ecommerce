import { ProductTileService } from './../services/product-tile.service';
import { ProductsService } from './../services/products.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.css']
})
export class ProductTileComponent implements OnInit {
  @Input() product: any = [];
  // cart: any[] = [];
  // cartCount = 0;

  constructor(private productsService: ProductsService, private tileService: ProductTileService) { }

  ngOnInit() {
    // this.cart = JSON.parse(localStorage.getItem('cart'));
  }

  onAddQty() {
    // console.log(this);
    this.product.product_qty++;
    console.log(this.product.product_qty);
  }

  onSubQty() {
    if (this.product.product_qty > 0) {
      this.product.product_qty--;
    }
  }

  onAddToCart(selectedProduct) {
    this.tileService.updateCart(selectedProduct);
    console.log('p' + selectedProduct);
  }

  // onAddToCart() {
  //   this.cart.push(this.product);
  //   localStorage.setItem('cart', JSON.stringify(this.cart));
  //   console.log(this.cart);
  //   this.cartCount = this.cart.length;
  //   // console.log(this.cartCount);
  //   this.onDisplayCartTotal();
  // }

  // onDisplayCartTotal() {
  //   const cartPrices = JSON.parse(localStorage.getItem('cart')).map(cpp => cpp.product_price);
  //   console.log('cartPrices ' + cartPrices);
  //   const cartTotal = cartPrices.reduce((total, price) => total + price, 0);
  //   console.log('cartTotal ' + cartTotal);
  // }

  onGoToPDP() {
    console.log(this.product.product_id);
  }

}
