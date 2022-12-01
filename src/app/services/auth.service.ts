import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegisterBody, User } from '../interfaces/interfaces';
import { CartService } from './cart.service';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  _user = new ReplaySubject<User>();

  user$ = this._user.asObservable();

  constructor(
    private _snackbar: SnackbarService,
    private _router: Router,
    private _cartService: CartService
  ) {}

  failedMsg = 'Failed: ';
  successMsg = 'Sucsses: ';

  getUser() {
    const token = localStorage.getItem('jwt');

    if (!token) return;

    const tokenDecode = JSON.parse(atob(token.split('.')[1]));

    tokenDecode.firstname = 'Hello ' + tokenDecode.firstname;
    this._user.next(tokenDecode);
  }

  async login(email: string, password: string) {
    const data = await fetch(environment.apiURL + '/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const res = await data.json();

    if (res.err) {
      this._snackbar.openSnackBar(this.failedMsg + res.err, 'failed-snackbar');
      return;
    } else {
      this._snackbar.openSnackBar(
        this.successMsg + res.msg,
        'success-snackbar'
      );
      localStorage.setItem('jwt', res.accessToken);
      res.firstname = 'Hello ' + res.firstname;
      this._user.next(res);
      this._cartService.getCart();
      this._router.navigateByUrl('/');
    }
  }

  async register(body: RegisterBody) {
    const res = await fetch(environment.apiURL + '/register', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    if (data.err) {
      this._snackbar.openSnackBar(this.failedMsg + data.err, 'failed-snackbar');
      console.log(res);
      return;
    } else {
      this._snackbar.openSnackBar(
        this.successMsg + data.msg,
        'success-snackbar'
      );
      this._router.navigateByUrl('/login');
    }
  }

  logout() {}
}
