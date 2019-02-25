import { ProductsService } from './../services/products.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ProductTileComponent } from '../product-tile/product-tile.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private productsService: ProductsService) { }
  // @ViewChild(ProductTileComponent) child;
  products: any = [ ];
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
      }
      // (error) => console.log(error)
    );
  }

  ngAfterViewInit() {
    // this.cartCount = this.child.cartCount;
    // console.log('View Inti ' + this.cartCount);
  }

}
