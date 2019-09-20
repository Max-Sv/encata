import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { IUser } from 'src/app/core/core.service';
import { Observable, of } from 'rxjs';
import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public user: IUser;
  public hide = true;
  public signupForm: FormGroup;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      nameControl: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      passwordControl: new FormControl(null, [Validators.required, Validators.minLength(7)]),
      confirmPasswordControl: new FormControl(null, [Validators.required, Validators.minLength(7)]),
      EmailPhoneControl: new FormControl(null, [Validators.required, Validators.minLength(3), this.validatePhoneEmail]),
    });
  }
  registerUser(): void {
    this.authService.registerUser(this.user);
  }

  validatePhoneEmail(control: FormControl): { [key: string]: any } | null {
    const regexpPhone: RegExp = /^(\+375|375|80)\s*(25|29|33|44)\s*(([0-9]{7})|[0-9]{3}( [0-9]{2}){2})$/;
    const regexpEmail: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    if ((regexpPhone.test(control.value)) || (regexpEmail.test(control.value))) {
      return null;
    }
    return { 'InvalidPhoneOrEmail': true };

  }
}
