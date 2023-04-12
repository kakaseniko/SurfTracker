import { Component, OnInit } from '@angular/core';
import { Session } from '../models/session';
import { Platform } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AddSessionComponent } from '../add-session/add-session.component';
import { SurfSessionService } from '../services/api/surfsession';
import {Router} from '@angular/router';



@Component({
  selector: 'app-logs-page',
  templateUrl: './logs-page.component.html',
  styleUrls: ['./logs-page.component.scss'],
})
export class LogsPageComponent implements OnInit {
  sessions: Session[] = [];
  isMobile$ = this.platform.is('mobile');
  
  constructor(
    private platform: Platform, 
    public modalController: ModalController, 
    private surfSessionService: SurfSessionService,
    private router:Router
    ) { 
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if(token){
      this.surfSessionService.get(token).subscribe({
        next: (v) => {
          for(let element of v){
            var date_time = element.date_time.split('T');
            var date = date_time[0];
            var time = date_time[1].split('Z')[0];
            this.sessions.push(new Session(element.id, element.spot, element.country, date, time, element.rating));
          }
          console.log(this.sessions)
        },
        error: (e) => {
          console.log(e);
        }
      }); 
      return;
    }
    this.router.navigate(['/login']);
  
  }

  onRatingUpdated(rating: number) {
    console.log(`New rating: ${rating}`);
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: AddSessionComponent,
        });
    await modal.present();
  }
}
