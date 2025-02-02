import { Component } from '@angular/core';
import { Login } from '../app.interface';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  signupPayLoad: Login={} as Login;

  passwordCheck:String="";

  constructor(private _service:ServicesService, private _router:Router){}

  public signupFunction(){
    if(this.passwordCheck===this.signupPayLoad.password){
      this._service.signupFunctionService(this.signupPayLoad).subscribe(
        response=>{
          if(response.user.username)
          this._router.navigate(['/test']);
        }
      )
    }  
  }
}
