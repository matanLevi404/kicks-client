import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { environment } from 'src/environments/environment';
import { Thumbs } from 'swiper';

@Component({
  selector: 'app-right-col',
  templateUrl: './right-col.component.html',
  styleUrls: ['./right-col.component.css'],
})
export class RightColComponent implements OnInit {
  constructor(private _snackbarService: SnackbarService) {}

  ngOnInit(): void {
    this.refreshPageOnJWTexp();
  }

  refreshPageOnJWTexp() {
    const token = environment.token();
    if (!token) return;
    const tokenDecode = JSON.parse(atob(token.split('.')[1]));
    const timer = tokenDecode.exp * 1000 - Date.now();

    setTimeout(() => {
      location.reload();
    }, timer);
  }
}
