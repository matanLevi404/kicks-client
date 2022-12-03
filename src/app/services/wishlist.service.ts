import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/interfaces';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  _wishlist = new ReplaySubject<Product[]>();

  wishlist$ = this._wishlist.asObservable();

  constructor(private _snackbar: SnackbarService) {}

  failedMsg = 'Failed: ';
  successMsg = 'Sucsses: ';

  // get wish list
  async getWishlist() {
    const res = await fetch(environment.apiURL + '/wishlist', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });

    const data = await res.json();

    if (data.err) {
      console.log(data.err);
    } else {
      this._wishlist.next(data.wishList);
    }
  }

  // add to wish list
  async add(productId: string): Promise<boolean> {
    const res = await fetch(environment.apiURL + '/wishlist/add', {
      method: 'POST',
      body: JSON.stringify({ productId }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });

    const data = await res.json();

    if (data.err) {
      this._snackbar.openSnackBar(this.failedMsg + data.err, 'failed-snackbar');
      return false;
    } else {
      this._snackbar.openSnackBar(
        this.successMsg + data.msg,
        'success-snackbar'
      );
      this._wishlist.next(data.wishList);
      return true;
    }
  }

  // remove from wish list
  async remove(productId: string): Promise<boolean> {
    const res = await fetch(environment.apiURL + '/wishlist/remove', {
      method: 'POST',
      body: JSON.stringify({ productId }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });

    const data = await res.json();

    if (data.err) {
      this._snackbar.openSnackBar(this.failedMsg + data.err, 'failed-snackbar');
      return false;
    } else {
      this._snackbar.openSnackBar(
        this.successMsg + data.msg,
        'success-snackbar'
      );
      this._wishlist.next(data.wishList);
      return true;
    }
  }
}
