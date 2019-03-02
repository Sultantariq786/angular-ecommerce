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
      product_img: 'https://5.imimg.com/data5/SR/JT/MY-12033534/fancy-ladies-suits-500x500-500x500.jpg',
      product_alt: 'Ladies Suit Image',
      product_qty: 0,
      product_price: this.generatePrice(),
    },
    {
      product_id: this.generateId(),
      product_category: 'men',
      product_name: 'Suit',
      product_desc: 'This is a Suit for Men',
      product_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmxXnbgx3ecigoE_tGDX6NMp_iw1Km1WildYkXImybDROB8IbyvA',
      product_alt: 'Suit Image',
      product_qty: 0,
      product_price: this.generatePrice(),
    },
    {
      product_id: this.generateId(),
      product_category: 'men',
      product_name: 'Suit',
      product_desc: 'This is a Suit for Men',
      product_img: 'https://scene7.josbank.com/is/image/JosBank/32500_041_main?$browse_thumbnail$?$browse_thumbnail$',
      product_alt: 'Suit Image',
      product_qty: 0,
      product_price: this.generatePrice(),
    },
    {
      product_id: this.generateId(),
      product_category: 'kids',
      product_name: 'Frock',
      product_desc: 'This is a Frock for your daughter',
      product_img: 'https://5.imimg.com/data5/DD/SU/MY-44450893/kids-lehenga-500x500.jpg',
      product_alt: 'Frock Image',
      product_qty: 0,
      product_price: this.generatePrice(),
    },
    {
      product_id: this.generateId(),
      product_category: 'women',
      product_name: 'Ladies Office Suit',
      product_desc: 'This is a Suit for Women',
      product_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpbCz-q1erKtuNLYQ2KOXgjAXfi5d-s0d4jd6jsVDmwVLu93cC',
      product_alt: 'Ladies Suit Image',
      product_qty: 0,
      product_price: this.generatePrice(),
    },
    {
      product_id: this.generateId(),
      product_category: 'kids',
      product_name: 'Kids Suit',
      product_desc: 'This is a Suit for your son',
      product_img: 'https://images-na.ssl-images-amazon.com/images/I/61kvlgq-GNL._UY445_.jpg',
      product_alt: 'Kids Suit Image',
      product_qty: 0,
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
