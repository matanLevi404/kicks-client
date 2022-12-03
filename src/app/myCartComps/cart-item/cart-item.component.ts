import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'tr[app-cart-item]',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() item: any;

  constructor(private _cartService: CartService) {}

  ngOnInit(): void {
    console.log(this.item);
  }

  push(id: string, size: number) {
    this._cartService.push(id, size);
  }

  pull(id: string, size: number) {
    // console.log(id, size);
    this._cartService.pull(id, size);
  }
}
