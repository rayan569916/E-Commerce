import { Component, Inject } from '@angular/core';
import { ServicesService } from '../services.service';
import { Login } from '../app.interface';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginPayLoad: Login = {
    username: '',
    password: ''
  }

  loginResponse: any = {};

  private _snackBar = Inject(MatSnackBar);
  constructor(private _service: ServicesService, private _router: Router) { }

  public loginFunction() {
    if (this.loginPayLoad.password && this.loginPayLoad.username)
      this._service.loginFunctionService(this.loginPayLoad).subscribe(
        response => {
          this.loginResponse = response;
          if (response.username) {
            this._router.navigate(['/home-page']);
          }
        }
      )
  }
}
