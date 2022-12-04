import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
})
export class LogoComponent implements OnInit {
  logoSrc: string = '/assets/images/logo.png';

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  goToHome() {
    this._router.navigateByUrl('/');
  }
}
