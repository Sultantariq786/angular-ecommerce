import { CartService } from '../services/cart.service';
// import { ProductsService } from './../services/products.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.css']
})
export class ProductTileComponent implements OnInit {
  @Input() product: any = [];
  @Input() isCart;
  prodId;
  productCat;

  constructor(
   // private productsService: ProductsService,
    private cartService: CartService,
    private router: Router,
    ) { }

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
    this.cartService.updateCart(selectedProduct);
  }

  onRemoveFromCart(selectedProduct) {
    console.log('in tile Compo ' + selectedProduct);
    this.cartService.removeCart(selectedProduct);
  }

  onGoToPDP($event) {
    this.prodId = this.product.product_id;
    this.productCat = this.product.product_category;
    this.router.navigate(['/' + this.productCat + '/product/' + this.prodId]);
    console.log(this.product.product_id);
  }

}
