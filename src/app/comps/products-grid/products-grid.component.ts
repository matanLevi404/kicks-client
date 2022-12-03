import { ThisReceiver } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Product } from 'src/app/interfaces/interfaces';
import { HomeService } from 'src/app/services/home.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { VariablesService } from 'src/app/variables/variables.service';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.css'],
})
export class ProductsGridComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  products: Product[] = [];
  catHeading: string;
  constructor(
    private _route: ActivatedRoute,
    private _homeService: HomeService,
    private _variablesService: VariablesService,
    private _wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    if (this._route.snapshot.routeConfig.path == 'wishlist') {
      console.log('wishlist items');
      this._wishlistService.wishlist$
        .pipe(takeUntil(this.destroy$))
        .subscribe((wishlist) => {
          this.products = wishlist;
        });
      this.catHeading = 'Wish List';
      return;
    } else if (!this._route.snapshot.queryParams['q'])
      this._homeService.getProductsByCat(
        this._route.snapshot.paramMap.get('cat_name')
      );
    else
      this._homeService.getProductsBySearch(
        this._route.snapshot.queryParams['q']
      );

    this._variablesService.products$
      .pipe(takeUntil(this.destroy$))
      .subscribe((products) => {
        this.products = products;
        this.catHeading = this._route.snapshot.paramMap.get('cat_name');
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
