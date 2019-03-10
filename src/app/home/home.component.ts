import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productsService: ProductsService, private authService: AuthService) { }
  products: any[] = [];
  cartCount: number;
  user = this.authService.username;

  ngOnInit() {
    // this.productsService.getProducts()
    // .subscribe(
    //   (response: any) => this.products = response.json(),
    //   (error) => console.log(error)
    // );

    /*Setting product response to localstorage and fetching from there on page*/

    if (this.user) {
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

  }
  /*For Product Search*/
  filter(query: string) {
    this.products = (query && query !== '') ?
    this.products = JSON.parse(localStorage.getItem('products')).filter(p => p.product_name.toLowerCase().includes(query.toLowerCase())) :
    this.products = JSON.parse(localStorage.getItem('products'));
    // console.log(this.products);
  }

}
