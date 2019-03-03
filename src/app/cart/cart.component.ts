import { ProductTileService } from './../services/product-tile.service';
import { Component, OnInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, AfterContentChecked {
  cartProducts: any[] = [];
  cartTotal: any = 0;

  constructor(private tileService: ProductTileService) { }

  ngOnInit() {
    // console.log(this.cartProducts);
  }

  ngAfterContentChecked() {
    this.cartProducts = this.tileService.getCartProducts();
    this.cartTotal = this.tileService.getCartTotal();
  }

}
