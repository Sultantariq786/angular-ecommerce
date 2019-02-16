import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {
  registerProdForm: FormGroup;

  constructor(private productsService: ProductsService) { }
  products = [
    {
      product_id: this.generateId(),
      product_category: 'women',
      product_name: 'Ladies Suit',
      product_desc: 'This is a Cotton Suit for Ladies',
      product_img: '../../assets/images/ladiessuit.jpeg',
      product_alt: 'Ladies Suit Image',
      product_qty: 1,
      product_price: this.generatePrice(),
    },
    {
      product_id: this.generateId(),
      product_category: 'men',
      product_name: 'Suit',
      product_desc: 'This is a Suit for Men',
      product_img: '../../assets/images/suit.jpeg',
      product_alt: 'Suit Image',
      product_qty: 1,
      product_price: this.generatePrice(),
    }
  ];

  ngOnInit() {
    this.registerProdForm = new FormGroup({
      'productData': new FormGroup({
        'product_id': new FormControl(null, [Validators.required]),
        'product_category': new FormControl(null, [Validators.required]),
        'product_name': new FormControl(null, [Validators.required]),
        'product_desc': new FormControl(null, [Validators.required]),
        'product_img': new FormControl(null, [Validators.required]),
        'product_alt': new FormControl(null, [Validators.required]),
        'product_qty': new FormControl(null, [Validators.required]),
        'product_price': new FormControl(null, [Validators.required])
      }),
    });

  }

  private onAddProduct() {
    this.products.push(this.registerProdForm.value.productData);
    this.productsService.addProducts(this.products)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  private generateId() {
    return Math.round(Math.random() * 100);
  }

  private generatePrice() {
    return Math.round(Math.random() * 10000);
  }

  onSubmit() {
    this.onAddProduct();
    // console.log(this.registerProdForm);
    this.registerProdForm.reset();
  }

}
