import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Product } from 'src/app/interfaces/interfaces';
import { HomeService } from 'src/app/services/home.service';
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
    private _variablesService: VariablesService
  ) {}

  ngOnInit(): void {
    this._homeService.getProductsByCat(
      this._route.snapshot.paramMap.get('cat_name')
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
