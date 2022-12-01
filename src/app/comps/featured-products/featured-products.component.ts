import { ElementRef, OnDestroy } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Product } from 'src/app/interfaces/interfaces';
import { HomeService } from 'src/app/services/home.service';
import { VariablesService } from 'src/app/variables/variables.service';

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  SwiperOptions,
  Swiper,
} from 'swiper';
import { SwiperComponent } from 'swiper/angular';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss'],
})
export class FeaturedProductsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  products: Product[] = [];

  constructor(private _variablesService: VariablesService) {}

  ngOnInit(): void {
    this._variablesService.products$
      .pipe(takeUntil(this.destroy$))
      .subscribe((products) => {
        this.products = products;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
