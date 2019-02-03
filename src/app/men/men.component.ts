import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {

  constructor(private productsService: ProductsService) { }
  menProducts = [];

  ngOnInit() {
    this.productsService.getProducts()
    .subscribe(
      (response: any) => {
        this.menProducts = response.json().filter(product => product.product_category === 'men');
        console.log(this.menProducts);
      }
      // (error) => console.log(error)
    );
  }

}
