import { Component, OnInit } from '@angular/core';
import { SurfSessionService } from '../services/api/surfsession';
import { Session } from '../models/session';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.scss'],
})
export class AddSessionComponent implements OnInit {
  constructor(private surfSessionService: SurfSessionService, private toastController: ToastController, private router: Router) { }
  country: string;
  spot: string;
  date: string = new Date().toISOString();
  rating: number = 0;
  
  ngOnInit() {}

  onRatingUpdated(rating: number) {
    console.log(`New rating: ${rating}`);
    this.rating = rating;
  }
  onCountryUpdated(ev: any) { 
    this.country = ev.target.value;
  }
  onSpotUpdated(ev: any) {
    this.spot = ev.target.value;
  }
  onDateUpdated(ev: any) {
    this.date = ev.target.value;
  }

  onSubmit() {
    if(!this.country || !this.spot ){
      this.toastController.create({
        message: 'Please select country and spot',
        duration: 2000,
        color: 'danger'
      }).then(toast => toast.present());
      return;
    }
    let date_time = this.date.split('T');
    let date = date_time[0];
    let time = date_time[1].split('Z')[0];
    let session = new Session(1, this.spot, this.country, date, time, this.rating);
    let token = localStorage.getItem('token');
    if(token){
      this.surfSessionService.post(token, session).subscribe({
        next: (v) => {
          this.router.navigate(['/logs']);
        },
        error: (e) => {
          this.toastController.create({
            message: 'Something went wrong',
            duration: 2000,
            color: 'danger'
          }).then(toast => toast.present());
        }
      });
    }

 }
}
