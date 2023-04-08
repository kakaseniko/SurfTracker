import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/api/auth';
import { ToastController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {

  email: string = "";
  password: string = "";
  constructor(private authService:AuthService, private toastController: ToastController, private router:Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if(!this.email || !this.password) {
      this.toastController.create({
        message: 'All fields must be filled.',
        duration: 5000,
        position: 'top',
        color: 'danger',
        buttons: [
          {
            text: 'X',
            role: 'cancel',
          }
        ]
      }).then(toast => toast.present());
      return;
    }

    this.authService.login(this.email + ':' + this.password).subscribe({
      next: (v) => {
        console.log(v);
        localStorage.setItem('token', v.token);
        this.router.navigate(['/logs']);
      },
      error: (e) => {
        this.toastController.create({
          message: e.message,
          duration: 10000,
          position: 'top',
          color: 'danger',
          icon: 'alert',
          buttons: [
            {
              text: 'X',
              role: 'cancel',
            }
          ]
        }).then(toast => toast.present());
      },
    });
 }
}
