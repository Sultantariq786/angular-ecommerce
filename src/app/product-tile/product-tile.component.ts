import { ProductsService } from './../services/products.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.css']
})
export class ProductTileComponent implements OnInit {
  @Input() product = [ ];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {

  }

}
