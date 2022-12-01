import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { VariablesService } from 'src/app/variables/variables.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  cartSrc: string = '/assets/images/shopping-cart.png';
  cartRedSrc: string = '/assets/images/shopping-cart-red.png';

  hover: boolean = false;
  isOpen: boolean = false;

  cart = this._cartService.cart$;

  constructor(private _cartService: CartService) {}

  ngOnInit(): void {}

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  onMouseEnter() {
    this.hover = true;
  }

  onMouseLeave() {
    this.hover = false;
  }
}
