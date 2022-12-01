import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-cart-drop-menu',
  templateUrl: './cart-drop-menu.component.html',
  styleUrls: ['./cart-drop-menu.component.css'],
})
export class CartDropMenuComponent implements OnInit {
  cart = this._cartService.cart$;
  constructor(
    private _cartService: CartService,
    private _checkoutService: CheckoutService
  ) {}

  ngOnInit(): void {}

  pullItem(id: string, size: number) {
    console.log(id, size);
    this._cartService.pull(id, size);
  }

  checkout() {
    this._checkoutService.checkoutSession();
  }
}
