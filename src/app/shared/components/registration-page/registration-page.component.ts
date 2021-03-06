import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

import { RegistrationService } from '../../services';
import { SignUpParams } from '../../types/params/signUpParams.interface';
import { RegistrationMessageComponent } from '../registration-message/registration-message.component';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css'],
})
export class RegistrationPageComponent implements OnInit {

  registrationForm: any;
  hide = true;
  durationInSeconds = 5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private registrationService: RegistrationService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<RegistrationPageComponent>,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group ({
      first_name: new FormControl('', [
        Validators.required,
      ]),
      last_name: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  isControlInvalid(fieldName: string): boolean {
    return (this.registrationForm.get(fieldName).invalid
      && (this.registrationForm.get(fieldName).dirty
      || this.registrationForm.get(fieldName).touched));
  }

  getControlError(controlName: string): string | null {
    const control = this.registrationForm.get(controlName);
    if (control.errors.required) {
      return 'Поле не може бути порожнім';
    }
    if (control.errors.email) {
      return 'Введіть правильну ел. адресу';
    }
    return null;
  }

  submit(): void {
    if (this.registrationForm.invalid) {
      return;
    }

    const data: SignUpParams = {
      first_name: this.registrationForm.value.first_name,
      last_name: this.registrationForm.value.last_name,
      email: this.registrationForm.value.email,
      password: this.registrationForm.value.password,
    };

    // tslint:disable-next-line: deprecation
    this.registrationService.createUser(data).subscribe(() => {
      this.dialogRef.close();
      this.snackBar.openFromComponent(RegistrationMessageComponent, {
        duration: this.durationInSeconds * 1000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    });
  }

}
