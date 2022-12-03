import { OnDestroy, ViewChild } from '@angular/core';
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
  selector: 'app-big-deal',
  templateUrl: './big-deal.component.html',
  styleUrls: ['./big-deal.component.scss'],
})
export class BigDealComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  @ViewChild('swiperSlider') swiperSlider: SwiperComponent;

  config: SwiperOptions = {};

  products: Product[] = [];
  constructor(
    private _homeService: HomeService,
    private _variablesService: VariablesService
  ) {}

  ngOnInit(): void {
    this._homeService.products$
      .pipe(takeUntil(this.destroy$))
      .subscribe((products) => {
        this.products = products.filter((p) => p.bigDeal == true);
      });
    // this._variablesService.products$
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((products) => {
    //     console.log(products);
    //     this.products = products.filter((p) => p.bigDeal == true);
    //   });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
