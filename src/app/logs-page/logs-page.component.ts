import { Component, OnInit } from '@angular/core';
import { Session } from '../models/session';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-logs-page',
  templateUrl: './logs-page.component.html',
  styleUrls: ['./logs-page.component.scss'],
})
export class LogsPageComponent implements OnInit {
  session = new Session(1, 1, 'Scheveningen', 'NL', '20-05-2022', '15:00', 1, 'details');
  isMobile$ = this.platform.is('mobile');
  
  constructor(private platform: Platform) { }

  ngOnInit() {}

  onRatingUpdated(rating: number) {
    console.log(`New rating: ${rating}`);
  }
  
}
