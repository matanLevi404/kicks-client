import { OnInit, ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'kicks-client';

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _cartService: CartService,
    private _authService: AuthService
  ) {}

  ngOnInit() {
    this._router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this._activatedRoute.params.subscribe((d) => {
          const token = environment.token();
          if (!token) {
            localStorage.setItem('jwt', '');
            this._authService._user.next({
              user_id: '',
              firstname: null,
              iat: 0,
              exp: 0,
            });
            this._cartService._cart.next({ cart: [], subTotal: 0, total: 0 });
            return true;
          }
          const tokenDecode = JSON.parse(atob(token.split('.')[1]));
          if (Date.now() >= tokenDecode.exp * 1000) {
            localStorage.setItem('jwt', '');
            this._authService._user.next({
              user_id: '',
              firstname: null,
              iat: tokenDecode.iat,
              exp: tokenDecode.exp,
            });
            this._cartService._cart.next({ cart: [], subTotal: 0, total: 0 });
            return true;
          }
          this._cartService.getCart();
          this._authService._user.next(tokenDecode);
          return true;
        });
      });
  }
}
