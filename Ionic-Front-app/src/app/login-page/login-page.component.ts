import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/api/auth';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {

  email: string = "";
  password: string = "";
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  onSubmit() {

    this.authService.login(this.email + ':' + this.password).subscribe(response => {
      alert(response)
    });
 }
}
