import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/interfaces';
import { VariablesService } from '../variables/variables.service';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  _products = new Subject<[Product]>();
  _product = new Subject<Product>();

  products$ = this._products.asObservable();
  product$ = this._product.asObservable();

  constructor(
    private _variablesService: VariablesService,
    private _snackbar: SnackbarService
  ) {}

  // fetch all products
  async getProducts() {
    const data = await fetch(environment.apiURL + '/home', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const res = await data.json();

    if (res.err) {
      console.log(res.err);
    } else {
      this._products.next(res.products);
      this._variablesService._products.next(res.products);
    }
  }

  // fetch all products by category
  async getProductsByCat(cat: string) {
    if (cat == 'All') return this.getProducts();
    const data = await fetch(environment.apiURL + '/home/categories/' + cat, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const res = await data.json();

    if (res.err) {
      console.log(res.err);
    } else {
      console.log(res);
      this._products.next(res.products);
      this._variablesService._products.next(res.products);
    }
  }

  // fetch products by search
  async getProductsBySearch(q: string) {
    // return console.log(environment.apiURL + '/home/categories/search?q=' + q);
    const res = await fetch(environment.apiURL + '/home/search?q=' + q, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    if (data.err) {
      this._snackbar.openSnackBar('Failed:' + data.err, 'failed-snackbar');
    } else {
      console.log(data);
      if (data.products.length == 0)
        this._snackbar.openSnackBar(
          'Failed:' + 'No results for this search !',
          'failed-snackbar'
        );
      this._products.next(data.products);
      this._variablesService._products.next(data.products);
    }
  }

  // fetch one product by id
  async getProduct(id: string) {
    const res = await fetch(environment.apiURL + '/home/product/' + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    if (data.err) {
      console.log(data.err);
    } else {
      this._product.next(data.product);
      return data.product;
    }
  }
}
