import { Component } from '@angular/core';
import { iLogin } from '../Models/login';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private authSvc:AuthService,
    private router:Router
    ){}
    loginData:iLogin = {
      email: 'mario@rossi.it',
      password: 'password'
    }
    save(){
      this.authSvc.login(this.loginData)
      .subscribe((data: any) => {
          this.router.navigate(['/dashboard'])
      })
    }

  }

}
