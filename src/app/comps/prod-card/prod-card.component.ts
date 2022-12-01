import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/interfaces';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-prod-card',
  templateUrl: './prod-card.component.html',
  styleUrls: ['./prod-card.component.css'],
})
export class ProdCardComponent implements OnInit {
  @Input() product: Product;
  @Input() isLeft: boolean;

  productId: string = '';

  rating: boolean[] = [];

  constructor(private _router: Router, private _cartService: CartService) {}

  ngOnInit(): void {
    this.productId = this.product['_id'];
    for (let i = 0; i < 5; i++) {
      if (i < this.product.rating) this.rating.push(true);
      else this.rating.push(false);
    }
  }

  pushToCart(id: string) {
    // this._cartService.push(id, 42);
    this._router.navigateByUrl(`/product/${id}`);
  }

  goToProduct(id: string) {
    console.log(id);
    this._router.navigateByUrl(`/product/${id}`);
  }
}
