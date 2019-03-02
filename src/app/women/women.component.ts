import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {

  constructor(private productsService: ProductsService) { }
  womenProducts = [];

  ngOnInit() {
    // this.productsService.getProducts()
    // .subscribe(
    //   (response: any) => {
    //     this.womenProducts = response.json().filter(product => product.product_category === 'women');
    //     // console.log(this.womenProducts);
    //   }
    // );
    this.womenProducts = JSON.parse(localStorage.getItem('products')).filter(product => product.product_category === 'women');
  }

}
