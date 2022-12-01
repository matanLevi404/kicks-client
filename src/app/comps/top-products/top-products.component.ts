import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { Product } from 'src/app/interfaces/interfaces';
import { HomeService } from 'src/app/services/home.service';
import { VariablesService } from 'src/app/variables/variables.service';

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.scss'],
})
export class TopProductsComponent implements OnInit, OnDestroy {
  constructor(
    private _homeService: HomeService,
    private _variablesService: VariablesService
  ) {}

  // private subscriptions: Subscription[] = [];
  private destroy$ = new Subject();

  products: Product[][] = [];

  ngOnInit(): void {
    this._homeService.getProducts();

    this._variablesService.products$
      .pipe(takeUntil(this.destroy$))
      .subscribe((products) => {
        for (let i = 1; i < products.length; i += 2) {
          const doubleProd = [products[i - 1], products[i]];
          this.products.push(doubleProd);
        }
      });
  }

  ngOnDestroy(): void {
    // this.subscriptions.forEach((s) => s.unsubscribe());
    this.destroy$.next(true);
  }
}
