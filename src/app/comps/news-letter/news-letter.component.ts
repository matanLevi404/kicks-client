import { Component, OnInit } from '@angular/core';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-news-letter',
  templateUrl: './news-letter.component.html',
  styleUrls: ['./news-letter.component.css'],
})
export class NewsLetterComponent implements OnInit {
  constructor(private _snackbar: SnackbarService) {}

  ngOnInit(): void {}

  subscribeMsg(inp: HTMLInputElement) {
    if (inp.value == '' || !inp.value.includes('@'))
      this._snackbar.openSnackBar(
        'Failed: Not a valid email !',
        'failed-snackbar'
      );
    else
      this._snackbar.openSnackBar(
        'Success: Thank you for your subscription !',
        'success-snackbar'
      );
    inp.value = '';
  }
}
