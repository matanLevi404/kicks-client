import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject, ReplaySubject } from 'rxjs';
import { SnackbarService } from './snackbar.service';
import { HomeService } from './home.service';

@Injectable({
  providedIn: 'root',
})
export class RateService {
  _rateList = new ReplaySubject<string[]>();

  rateList$ = this._rateList.asObservable();

  constructor(
    private _snackbar: SnackbarService,
    private _homeService: HomeService
  ) {}

  failedMsg = 'Failed: ';
  successMsg = 'Sucsses: ';

  async getRatinglist() {
    const res = await fetch(environment.apiURL + '/rate', {
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
      this._rateList.next(data.products);
    }
  }

  async toggleRating(productId: string) {
    const res = await fetch(environment.apiURL + '/rate', {
      method: 'POST',
      body: JSON.stringify({ productId }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });

    const data = await res.json();

    if (data.err) {
      console.log(data.err);
      this._snackbar.openSnackBar(this.failedMsg + data.err, 'failed-snackbar');
    } else {
      console.log(data);
      this._snackbar.openSnackBar(
        this.successMsg + data.msg,
        'success-snackbar'
      );
      this._rateList.next(data.products);
    }
  }
}
