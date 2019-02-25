import { Component, OnInit } from '@angular/core';
import { ProductTileService } from '../services/product-tile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartCount;

  constructor(private tileService: ProductTileService) { }

  ngOnInit() {
    this.updateCartCount();
  }

  updateCartCount() {
    this.cartCount = this.tileService.cartCount;
    console.log('header' + this.cartCount);
  }

}
