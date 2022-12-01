import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(msg: string, cssName: string) {
    this._snackBar
      .open(msg, 'X', {
        duration: 4000,
        panelClass: [cssName],
      })
      .afterDismissed();
  }
}
