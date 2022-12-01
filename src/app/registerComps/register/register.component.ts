import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

function MatchPassword(password: string, confirmPassword: string) {
  return (formGroup: FormGroup) => {
    const passwordControl = formGroup.controls[password];
    const confirmPasswordControl = formGroup.controls[confirmPassword];

    if (!passwordControl || !confirmPasswordControl) {
      return null;
    }

    if (
      confirmPasswordControl.errors &&
      !confirmPasswordControl.errors['passwordMismatch']
    ) {
      return null;
    }

    if (passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ passwordMismatch: true });
    } else {
      confirmPasswordControl.setErrors(null);
    }
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  reactiveForm: FormGroup;
  submmited: boolean;

  constructor(private fb: FormBuilder, private _authService: AuthService) {}

  ngOnInit(): void {
    this.reactiveForm = this.fb.group(
      {
        firstname: ['', [Validators.required]],
        lastname: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        telephone: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
            ),
          ],
        ],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validator: MatchPassword('password', 'confirmPassword'),
      }
    );
  }

  onSubmit() {
    this.submmited = true;

    if (!this.reactiveForm.valid) return console.log('form is not valid');

    const body = {
      firstname: this.reactiveForm.value.firstname,
      lastname: this.reactiveForm.value.lastname,
      email: this.reactiveForm.value.email,
      telephone: this.reactiveForm.value.telephone,
      password: this.reactiveForm.value.password,
    };

    this._authService.register(body);
  }
}
