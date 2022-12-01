import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  firstSubmitted: boolean = false;
  secondSubmitted: boolean = false;

  isLinear = false;

  monthList: string[] = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];

  constructor(
    private fb: FormBuilder,
    private _checkoutService: CheckoutService
  ) {}

  ngOnInit(): void {
    this.firstFormGroup = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telephone: [
        '',
        [
          Validators.required,
          Validators.pattern(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/),
        ],
      ],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      postcode: ['', [Validators.required]],
      country: ['', [Validators.required]],
    });

    this.secondFormGroup = this.fb.group({
      number: ['', [Validators.required]],
      mm: ['', [Validators.required]],
      yy: ['', [Validators.required]],
      cvv: ['', [Validators.required]],
      holder: ['', [Validators.required]],
    });
  }

  onFirstSubmit() {
    this.firstSubmitted = true;
  }

  onSecondSubmit() {
    this.secondSubmitted = true;

    const body = {
      firstname: this.firstFormGroup.value.firstname,
      lastname: this.firstFormGroup.value.lastname,
      email: this.firstFormGroup.value.email,
      address: this.firstFormGroup.value.address,
      city: this.firstFormGroup.value.city,
      postal_code: this.firstFormGroup.value.postcode,
      country: this.firstFormGroup.value.country,
    };

    console.log(body);
    // this._checkoutService.checkout(body);
  }

  checkout() {
    this._checkoutService.checkoutSession();
  }

  downloadRecipt() {
    // this._checkoutService.downloadRecipt();
  }
}
