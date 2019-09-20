import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public hide = true;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      nameControl: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      passwordControl: new FormControl(null, [Validators.required, Validators.minLength(7)])
    });
  }
  getUser(name: string, password: string): void {
    this.authService.getUser(name, password);
  }

}
