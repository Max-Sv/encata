import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: any;
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
  }


  getUser(name, password): void {
    this.http.get('localhost:3000/api/login').subscribe(
      user => this.user = user,
      error => {
        this.snackBar.open(error.message, 'OK', {
          duration: 5000,
          panelClass: 'error'
        });
      }
    );
  }
  registerUser(user): void {
    this.http.post('localhost:3000/api/registration', user).subscribe(
      data => this.user = data,
      error => {
        this.snackBar.open(error.message, 'OK', {
          duration: 5000,
          panelClass: 'error'
        });
      }
    );
  }

}
