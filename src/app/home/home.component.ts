import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productsService: ProductsService) { }
  products: any[] = [];
  cartCount: number;


  ngOnInit() {
    // this.productsService.getProducts()
    // .subscribe(
    //   (response: any) => this.products = response.json(),
    //   (error) => console.log(error)
    // );

    /*Setting product response to localstorage and fetching from there on page*/
    this.productsService.getProducts()
    .subscribe(
      (response: any) => {
        // this.products = response.json();
        localStorage.setItem('products', JSON.stringify(response.json()));
        this.products = JSON.parse(localStorage.getItem('products'));
        // console.log(this.products);
      }
      // (error) => console.log(error)
    );
  }
  /*For Product Search*/
  filter(query: string) {
    this.products = (query && query !== '') ?
    this.products = JSON.parse(localStorage.getItem('products')).filter(p => p.product_name.toLowerCase().includes(query.toLowerCase())) :
    this.products = JSON.parse(localStorage.getItem('products'));
    // console.log(this.products);
  }

}
