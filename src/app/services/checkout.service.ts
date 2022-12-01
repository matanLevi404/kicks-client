import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CheckoutBody } from '../interfaces/interfaces';
import { CartService } from './cart.service';
import { SnackbarService } from './snackbar.service';

declare const Stripe;

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  failedMsg = 'Failed: ';
  successMsg = 'Sucsses: ';

  constructor(
    private _snackbar: SnackbarService,
    private _cartService: CartService
  ) {}

  async checkout(body: CheckoutBody) {
    const res = await fetch(environment.apiURL + '/checkout', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${environment.token()}`,
      },
    });

    const data = await res.json();

    if (data.err) {
      this._snackbar.openSnackBar(this.failedMsg + data.err, 'failed-snackbar');
    } else {
      console.log(data);
      this._snackbar.openSnackBar(
        this.successMsg + data.msg,
        'success-snackbar'
      );
      this._cartService.empty();
    }
  }

  async checkoutSession() {
    const res = await fetch(environment.apiURL + '/checkout/checkout-session', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${environment.token()}`,
      },
    });

    const data = await res.json();

    if (data.err) {
      console.log(data.err);
    } else {
      console.log(data);
      const client_secret = environment.ANGULAR_APP_PUBLISHABLE_KEY;
      let stripe = Stripe(client_secret);

      await stripe.redirectToCheckout({
        sessionId: data.id,
      });
    }
  }
}
