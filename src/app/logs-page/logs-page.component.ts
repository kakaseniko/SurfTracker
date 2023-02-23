import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs-page',
  templateUrl: './logs-page.component.html',
  styleUrls: ['./logs-page.component.scss'],
})
export class LogsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  onRatingUpdated(rating: number) {
    console.log(`New rating: ${rating}`);
  }
  
}
