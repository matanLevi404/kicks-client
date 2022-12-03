import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/interfaces';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { VariablesService } from 'src/app/variables/variables.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css'],
})
export class MyCartComponent implements OnInit {
  cart = this._cartService.cart$;
  wishlist = this._wishlistService.wishlist$;

  constructor(
    private _cartService: CartService,
    private _checkoutService: CheckoutService,
    private _wishlistService: WishlistService
  ) {}

  ngOnInit(): void {}

  checkout() {
    this._checkoutService.checkoutSession();
  }
}
