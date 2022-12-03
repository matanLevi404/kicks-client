import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { HomeService } from 'src/app/services/home.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { environment } from 'src/environments/environment';
import { Thumbs } from 'swiper';

@Component({
  selector: 'app-right-col',
  templateUrl: './right-col.component.html',
  styleUrls: ['./right-col.component.css'],
})
export class RightColComponent implements OnInit {
  constructor(
    private _snackbarService: SnackbarService,
    private _homeService: HomeService
  ) {}

  ngOnInit(): void {
    this._homeService.getProducts();
    this.refreshPageOnJWTexp();
  }

  refreshPageOnJWTexp() {
    const token = localStorage.getItem('jwt');

    if (!token) return;

    const tokenDecode = JSON.parse(atob(token.split('.')[1]));
    const timer = tokenDecode.exp * 1000 - Date.now();

    setTimeout(() => {
      location.reload();
      localStorage.setItem('jwt', '');
    }, timer);
  }
}
