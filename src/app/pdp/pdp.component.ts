import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.component.html',
  styleUrls: ['./pdp.component.css']
})
export class PdpComponent implements OnInit {
  product;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    const prodId = +this.route.snapshot.paramMap.get('id');
    this.product = JSON.parse(localStorage.getItem('products')).filter(product => product.product_id === prodId)[0];
  }

}
