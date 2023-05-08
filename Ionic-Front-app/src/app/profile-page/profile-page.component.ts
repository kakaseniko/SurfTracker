import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/api/auth';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {

  email: string = "test@test.com";
  password: string = "";
  confirm_password: string ="";
  old_password: string = "";
  skill_level: string = "";
  token: any;
  constructor(private toastController: ToastController, private authService: AuthService) { }

  ngOnInit() {
    if(!localStorage.getItem('token')){
      window.location.href = '/login';
    }
    this.token = localStorage.getItem('token');

  }

  onSave() {
    alert(
     this.email
    )
  }
  onDelete(){
    this.toastController.create({
      message: 'Are you sure you want to delete your account?',
      color: 'warning',
      position: 'middle',
      buttons:[
        {
          text: 'Yes',
          handler: () => {
            this.authService.deleteAccount(this.token).subscribe({
              next: (v) => {
                this.toastController.create({
                  message: 'Account deleted',
                  color: 'success',
                  duration: 5000,
                  position: 'top',
                }).then(toast => toast.present());
                localStorage.removeItem('token');
                window.location.href = '/login';
              },
              error: (e) => {
                this.toastController.create({
                  message: e.message,
                  color: 'danger',
                  duration: 5000,
                  position: 'top',
                }).then(toast => toast.present());
              }
            })
          }
        },
        {
          text: 'No',
          role: 'cancel',
        }
      ]
     }).then(toast => toast.present());
}

}
