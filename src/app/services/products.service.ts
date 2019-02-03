import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url = 'https://products-8bcf0.firebaseio.com/products.json';

  constructor(private http: Http) { }

  getProducts() {
    console.log('Products Fetched');
    return this.http.get(this.url);
  }

  addProducts( products: any[] ) {
    console.log('Products Pushed');
    // return this.http.post(this.url, products);
    return this.http.put(this.url, products);
  }

  // getKidProducts() {

  // }

}
