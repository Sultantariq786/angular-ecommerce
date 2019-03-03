import { Component, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';
import { ProductTileService } from '../services/product-tile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterContentChecked {
  cartCount;
  cartTotal;

  constructor(private tileService: ProductTileService) { }

  ngOnInit() {

  }

  updateCart() {
    this.cartCount = this.tileService.cartCount;
    this.cartTotal = this.tileService.cartTotal;
  }

  ngAfterContentChecked() {
    this.updateCart();
  }

}
