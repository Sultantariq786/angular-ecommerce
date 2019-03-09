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

  constructor(private tileService: CartService, public authService: AuthService) { }

  ngOnInit() {

  }

  updateCart() {
    this.cartCount = this.tileService.cartCount;
    this.cartTotal = this.tileService.cartTotal;
  }

  ngAfterContentChecked() {
    this.updateCart();
  }

  logoff() {
    this.authService.logout();
  }

}
