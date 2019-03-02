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

  constructor(private productsService: ProductsService, private tileService: ProductTileService) { }

  ngOnInit() {

  }

  onAddQty($event) {
    // console.log(this);
    this.product.product_qty++;
  }

  onSubQty($event) {
    if (this.product.product_qty > 0) {
      this.product.product_qty--;
    }
  }

  onAddToCart(selectedProduct) {
    console.log('in tile Compo ' + selectedProduct);
    this.tileService.updateCart(selectedProduct);
  }

  // onAddToCart() {
  //   this.cart.push(this.product);
  //   localStorage.setItem('cart', JSON.stringify(this.cart));
  //   console.log(this.cart);
  //   this.cartCount = this.cart.length;
  //   // console.log(this.cartCount);
  //   this.onDisplayCartTotal();
  // }

  onGoToPDP($event) {
    console.log(this.product.product_id);
  }

}
