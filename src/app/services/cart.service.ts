import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cart } from '../interfaces/interfaces';

import { VariablesService } from '../variables/variables.service';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  _cart = new ReplaySubject<Cart>();

  cart$ = this._cart.asObservable();

  constructor(
    private _snackbar: SnackbarService,
    private httpClient: HttpClient
  ) {}

  failedMsg = 'Failed: ';
  successMsg = 'Sucsses: ';

  // get cart
  async getCart() {
    const data = await fetch(environment.apiURL + '/cart', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${environment.token}`,
      },
    });

    const res = await data.json();

    if (res.err) {
      console.log(res.err);
    } else {
      console.log(res);
      this._cart.next(res);
    }
  }

  // push to cart
  async push(id: string, size: number) {
    const data = await fetch(environment.apiURL + '/cart/push/' + id, {
      method: 'POST',
      body: JSON.stringify({ size }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${environment.token}`,
      },
    });

    const res = await data.json();

    if (res.err) {
      this._snackbar.openSnackBar(this.failedMsg + res.err, 'failed-snackbar');
    } else {
      this.getCart();
      this._snackbar.openSnackBar(
        this.successMsg + res.msg,
        'success-snackbar'
      );
    }
  }

  //  pull from cart
  async pull(id: string, size: number) {
    const res = await fetch(environment.apiURL + '/cart/pull/' + id, {
      method: 'POST',
      body: JSON.stringify({ size }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${environment.token}`,
      },
    });

    const data = await res.json();

    if (data.err) {
      this._snackbar.openSnackBar(this.failedMsg + data.err, 'failed-snackbar');
    } else {
      this.getCart();
      this._snackbar.openSnackBar(
        this.successMsg + data.msg,
        'success-snackbar'
      );
    }
  }

  // empty the cart
  async empty() {
    const res = await fetch(environment.apiURL + '/cart/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${environment.token}`,
      },
    });

    const data = await res.json();

    if (data.err) {
      this._snackbar.openSnackBar(this.failedMsg + data.err, 'failed-snackbar');
    } else {
      this.getCart();
    }
  }
}
