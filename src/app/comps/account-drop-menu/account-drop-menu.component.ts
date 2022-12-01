import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-account-drop-menu',
  templateUrl: './account-drop-menu.component.html',
  styleUrls: ['./account-drop-menu.component.css'],
})
export class AccountDropMenuComponent implements OnInit {
  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _cartService: CartService
  ) {}

  ngOnInit(): void {}

  logout() {
    const token = localStorage.getItem('jwt');
    const tokenDecode = JSON.parse(atob(token.split('.')[1]));
    localStorage.setItem('jwt', '');
    this._authService._user.next({
      user_id: '',
      firstname: null,
      iat: tokenDecode.iat,
      exp: tokenDecode.exp,
    });
    this._cartService._cart.next({ cart: [], subTotal: 0, total: 0 });
  }
}
