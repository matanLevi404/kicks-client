import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { Product } from '../interfaces/interfaces';

interface User {
  firstname: string;
}

@Injectable({
  providedIn: 'root',
})
export class VariablesService {
  _user = new ReplaySubject<User>();
  _products = new Subject<Product[]>();
  _cart = new ReplaySubject<any[]>();

  products$ = this._products.asObservable();
  cart$ = this._cart.asObservable();
  user$ = this._user.asObservable();
  constructor() {}
}
