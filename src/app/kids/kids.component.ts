import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {

  constructor(private productsService: ProductsService) { }
  kidsProducts = [];

  ngOnInit() {
    // this.productsService.getProducts()
    // .subscribe(
    //   (response: any) => {
    //     this.kidsProducts = response.json().filter(product => product.product_category === 'kids');
    //     console.log(this.kidsProducts);
    //   }
    //   // (error) => console.log(error)
    // );
    this.kidsProducts = JSON.parse(localStorage.getItem('products')).filter(product => product.product_category === 'kids');
  }

}
