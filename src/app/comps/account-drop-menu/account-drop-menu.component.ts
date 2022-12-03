import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Product } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { RateService } from 'src/app/services/rate.service';
import { environment } from 'src/environments/environment';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-account-drop-menu',
  templateUrl: './account-drop-menu.component.html',
  styleUrls: ['./account-drop-menu.component.css'],
})
export class AccountDropMenuComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  isLoggedIn: boolean = false;

  wishlist = this._wishlistService.wishlist$;

  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _cartService: CartService,
    private _wishlistService: WishlistService,
    private _rateService: RateService,
    private _checkoutService: CheckoutService
  ) {}

  ngOnInit(): void {
    this._authService.user$.pipe(takeUntil(this.destroy$)).subscribe((user) => {
      console.log(user);
      if (!user.firstname) this.isLoggedIn = false;
      else this.isLoggedIn = true;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  goToCheckout() {
    this._checkoutService.checkoutSession();
  }

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
    this._wishlistService._wishlist.next([]);
    this._rateService._rateList.next([]);
    this._cartService._cart.next({ cart: [], subTotal: 0, total: 0 });
  }
}
