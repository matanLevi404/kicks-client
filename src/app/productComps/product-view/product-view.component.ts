import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil, tap } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { HomeService } from 'src/app/services/home.service';

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  thumbsSwiper: any;
  product = this._homeService.product$;

  rating: boolean[] = [];

  mySize: number;
  constructor(
    private _route: ActivatedRoute,
    private _homeService: HomeService,
    private _cartService: CartService
  ) {}

  ngOnInit(): void {
    this._route.params.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      this._homeService.getProduct(params['id']).then((p) => {
        console.log(p['rating']);
        for (let i = 0; i < 5; i++) {
          if (i < p.rating) this.rating.push(true);
          else this.rating.push(false);
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  setSize(size: number) {
    this.mySize = size;
  }

  pushToCart() {
    this._cartService.push(
      this._route.snapshot.paramMap.get('id'),
      this.mySize
    );
  }
}
