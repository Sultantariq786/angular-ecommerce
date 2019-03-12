import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterContentChecked {
  cartCount;
  cartTotal;

  constructor(private cartService: CartService, public authService: AuthService) { }

  ngOnInit() {

  }

  updateCart() {
    this.cartCount = this.cartService.cartCount;
    this.cartTotal = this.cartService.cartTotal;
  }

  ngAfterContentChecked() {
    this.updateCart();
  }

  logoff() {
    this.authService.logout();
  }

}
