import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/interfaces';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { VariablesService } from 'src/app/variables/variables.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css'],
})
export class MyCartComponent implements OnInit {
  cart = this._cartService.cart$;

  constructor(
    private _cartService: CartService,
    private _checkoutService: CheckoutService
  ) {}

  ngOnInit(): void {}

  checkout() {
    this._checkoutService.checkoutSession();
  }
}
