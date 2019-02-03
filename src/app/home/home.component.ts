import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productsService: ProductsService) { }
  products = [ ];

  ngOnInit() {
    this.productsService.getProducts()
    .subscribe(
      (response: any) => this.products = response.json(),
      (error) => console.log(error)
    );
  }

}
