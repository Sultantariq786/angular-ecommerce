import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: Http) { }

  getProducts() {
    console.log('Products Fetched');
    return this.http.get('https://products-8bcf0.firebaseio.com/products.json');
  }

  addProducts( products: any[] ) {
    console.log('Products Pushed');
    // return this.http.post('https://products-8bcf0.firebaseio.com/products.json',
    // products);
    return this.http.put('https://products-8bcf0.firebaseio.com/products.json',
    products);
  }

}
