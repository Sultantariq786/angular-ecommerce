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
      product_id: 1,
      product_category: 'women',
      product_name: 'Ladies Suit',
      product_desc: 'This is a Cotton Suit for Ladies. Stylish office where for daily office use.  ',
      product_img: 'https://5.imimg.com/data5/SR/JT/MY-12033534/fancy-ladies-suits-500x500-500x500.jpg',
      product_alt: 'Ladies Suit Image',
      product_qty: 0,
      product_price: 6500,
    },
    {
      product_id: 2,
      product_category: 'men',
      product_name: 'Suit',
      product_desc: 'This is a Suit for Men',
      product_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmxXnbgx3ecigoE_tGDX6NMp_iw1Km1WildYkXImybDROB8IbyvA',
      product_alt: 'Suit Image',
      product_qty: 0,
      product_price: 9500,
    },
    {
      product_id: 3,
      product_category: 'men',
      product_name: 'Suit',
      product_desc: 'This is a Suit for Men',
      product_img: 'https://scene7.josbank.com/is/image/JosBank/32500_041_main?$browse_thumbnail$?$browse_thumbnail$',
      product_alt: 'Suit Image',
      product_qty: 0,
      product_price: 7500,
    },
    {
      product_id: 4,
      product_category: 'kids',
      product_name: 'Frock',
      product_desc: 'This is a Frock for your daughter',
      product_img: 'https://5.imimg.com/data5/DD/SU/MY-44450893/kids-lehenga-500x500.jpg',
      product_alt: 'Frock Image',
      product_qty: 0,
      product_price: 1750,
    },
    {
      product_id: 5,
      product_category: 'women',
      product_name: 'Ladies Office Suit',
      product_desc: 'This is a Suit for Women',
      product_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpbCz-q1erKtuNLYQ2KOXgjAXfi5d-s0d4jd6jsVDmwVLu93cC',
      product_alt: 'Ladies Suit Image',
      product_qty: 0,
      product_price: 5475,
    },
    {
      product_id: 6,
      product_category: 'kids',
      product_name: 'Kids Suit',
      product_desc: 'This is a Suit for your son',
      product_img: 'https://images-na.ssl-images-amazon.com/images/I/61kvlgq-GNL._UY445_.jpg',
      product_alt: 'Kids Suit Image',
      product_qty: 0,
      product_price: 1200,
    },
    {
      product_id: 7,
      product_category: 'men',
      product_name: 'Men T-shirt',
      product_desc: 'This is a Tshirt',
      product_img: 'https://rukminim1.flixcart.com/image/332/398/jp02t8w0/t-shirt/g/t/z/l-25rwn-lewel-original-imafbbjwskwhtamw.jpeg?q=50',
      product_alt: 'Men Tshirt Image',
      product_qty: 0,
      product_price: 1250,
    },
    {
      product_id: 8,
      product_category: 'kids',
      product_name: 'Kids Shoe',
      product_desc: 'This is a Shoe for your son',
      product_img: 'https://image.dhgate.com/0x0/f2/albu/g5/M00/8A/30/rBVaI1nfc3mADv4mAAC5qOJY3jU389.jpg',
      product_alt: 'Kids Shoe Image',
      product_qty: 0,
      product_price: 750,
    },
    {
      product_id: 9,
      product_category: 'men',
      product_name: 'Men Kurta',
      product_desc: 'This is a designer Kurta',
      product_img: 'https://cdn.shopclues.com/images1/thumbnails/64757/320/320/123538820-64757883-1529610356.jpg',
      product_alt: 'Kurta Image',
      product_qty: 0,
      product_price: 1650,
    },
    {
      product_id: 10,
      product_category: 'women',
      product_name: 'Women Top',
      product_desc: 'This is a Shoe for your women',
      product_img: 'https://images-eu.ssl-images-amazon.com/images/I/31U71ns6L6L._AC_UL260_SR200,260_.jpg',
      product_alt: 'Women Top Image',
      product_qty: 0,
      product_price: 1550,
    },
    {
      product_id: 11,
      product_category: 'kids',
      product_name: 'Kids T-Shirt',
      product_desc: 'This is a Cotton Blended T-Shirt for your kid',
      product_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLYwOYX1otPDGgOZdmyrZDah_9OJBXP6esyBATpaMxAoiYt3eQ',
      product_alt: 'Kids T-Shirt Image',
      product_qty: 0,
      product_price: 675,
    },
    {
      product_id: 12,
      product_category: 'kids',
      product_name: 'Kids Toy',
      product_desc: 'This is a Musical Toy for your kid',
      product_img: 'https://images-na.ssl-images-amazon.com/images/I/611b2p-6T5L._SX425_.jpg',
      product_alt: 'Kids Toy Image',
      product_qty: 0,
      product_price: 1585,
    },
    {
      product_id: 13,
      product_category: 'women',
      product_name: 'Purse',
      product_desc: 'This is a leather bag for women',
      product_img: 'https://images-na.ssl-images-amazon.com/images/I/61EUkpIK5iL._UY395_.jpg',
      product_alt: 'Purse Image',
      product_qty: 0,
      product_price: 1585,
    },
    {
      product_id: 14,
      product_category: 'men',
      product_name: 'Wallet',
      product_desc: 'This is a leather wallet for men',
      product_img: 'https://images-na.ssl-images-amazon.com/images/I/71YyWOWb91L._SY355_.jpg',
      product_alt: 'Wallet Image',
      product_qty: 0,
      product_price: 2075,
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

  // private generateId() {
  //   return Math.round(Math.random() * 100);
  // }

  // private generatePrice() {
  //   return Math.round(Math.random() * 10000);
  // }

  onSubmit() {
    this.onAddProduct();
    // console.log(this.registerProdForm);
    this.registerProdForm.reset();
  }

}
