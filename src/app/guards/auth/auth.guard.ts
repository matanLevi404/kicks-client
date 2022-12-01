import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _snackbar: SnackbarService, private _router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = environment.token();

    if (!token) {
      this._snackbar.openSnackBar(
        'Failed: Forbbiden, Please Login in or Register !',
        'failed-snackbar'
      );
      this._router.navigateByUrl('/');
      return false;
    }

    const tokenDecode = JSON.parse(atob(token.split('.')[1]));

    if (Date.now() >= tokenDecode.exp * 1000) {
      localStorage.setItem('jwt', '');
      this._snackbar.openSnackBar(
        'Failed: Session Expired, Please Login again !',
        'failed-snackbar'
      );
      this._router.navigateByUrl('/');
      return false;
    }

    return true;
  }
}
