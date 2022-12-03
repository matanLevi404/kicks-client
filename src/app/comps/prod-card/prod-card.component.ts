import { Input } from '@angular/core';
import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Product } from 'src/app/interfaces/interfaces';
import { CartService } from 'src/app/services/cart.service';
import { HomeService } from 'src/app/services/home.service';
import { RateService } from 'src/app/services/rate.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-prod-card',
  templateUrl: './prod-card.component.html',
  styleUrls: ['./prod-card.component.css'],
})
export class ProdCardComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  @Input() product: Product;
  @Input() isLeft: boolean;

  wishlist: Product[] = [];
  wishlistStyle: boolean = false;

  rateList: string[];
  rateStyle: boolean = false;

  productId: string = '';

  rating: boolean[] = [];

  sizes: number[] = [];

  openSizes: boolean = false;

  mySize: number;

  constructor(
    private _router: Router,
    private _homeService: HomeService,
    private _cartService: CartService,
    private _wishlistService: WishlistService,
    private _rateService: RateService
  ) {}

  ngOnInit(): void {
    this._wishlistService.wishlist$
      .pipe(takeUntil(this.destroy$))
      .subscribe((wishlist) => {
        this.wishlist = wishlist;
        if (wishlist.find((p) => p['_id'] == this.product['_id']))
          this.wishlistStyle = true;
        else this.wishlistStyle = false;
      });

    this._rateService.rateList$
      .pipe(takeUntil(this.destroy$))
      .subscribe((rateList) => {
        if (rateList.find((id) => id == this.product['_id']))
          this.rateStyle = true;
        else this.rateStyle = false;
      });

    for (let i = 0; i < 5; i++) {
      if (i < this.product.rating) this.rating.push(true);
      else this.rating.push(false);
    }

    this.productId = this.product['_id'];

    for (let i = 36; i < 56; i++) {
      this.sizes.push(i);
      this.sizes.push(i + 0.5);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  pushToCart(size: number) {
    this._cartService.push(this.product['_id'], size);
    this.openSizes = false;
  }

  toggleFromWishlist() {
    const productId = this.product['_id'];

    if (this.wishlist.find((p) => p['_id'] == productId)) {
      this._wishlistService.remove(productId).then((bool: boolean) => {
        if (bool) this.wishlistStyle = false;
      });
    } else {
      this._wishlistService.add(productId).then((bool: boolean) => {
        if (bool) this.wishlistStyle = true;
      });
    }
  }

  async toggleRating() {
    const productId = this.product['_id'];

    await this._rateService.toggleRating(productId);

    this._homeService.getProduct(productId).then((p: Product) => {
      this.rating = [];
      this.product = p;
      console.log(p.rating);
      for (let i = 0; i < 5; i++) {
        if (i < p.rating) this.rating.push(true);
        else this.rating.push(false);
      }
    });
  }

  goToProduct(e) {
    if (e.target.className.includes('cart')) this.openSizes = !this.openSizes;
    else if (e.target.className.includes('star')) this.toggleRating();
    else if (e.target.className.includes('wish')) this.toggleFromWishlist();
    else {
      window.scrollTo(0, 0);
      this._router.navigateByUrl(`/product/${this.product['_id']}`);
    }
  }
}
