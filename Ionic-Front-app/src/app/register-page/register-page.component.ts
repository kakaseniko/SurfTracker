import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/api/auth';
import { ToastController } from '@ionic/angular';
import {Router} from '@angular/router';



@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {

  email: string = "";
  password: string = "";
  confirm_password: string ="";
  skill_level: string = "";
  constructor(private authService:AuthService, private toastController: ToastController, private router: Router) { }

  ngOnInit() {}

  onSubmit() {
    if(!this.email || !this.password || !this.confirm_password || !this.skill_level) {
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
    if(this.password != this.confirm_password){
      this.toastController.create({
        message: 'Passwords do not match.',
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
    this.authService.register(this.email, this.password, this.skill_level).subscribe({
      next: (v) => {
        this.toastController.create({
          message: 'Registration successful. You can log in now.',
          duration: 10000,
          position: 'top',
          color: 'success',
          buttons: [
            {
              text: 'X',
              role: 'cancel',
            }
          ]
        }).then(toast => toast.present());
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
