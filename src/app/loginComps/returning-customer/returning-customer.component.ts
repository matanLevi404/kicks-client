import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-returning-customer',
  templateUrl: './returning-customer.component.html',
  styleUrls: ['./returning-customer.component.css'],
})
export class ReturningCustomerComponent implements OnInit {
  constructor(private _authService: AuthService) {}

  ngOnInit(): void {}

  login(email: string, password: string) {
    this._authService.login(email, password);
  }
}
