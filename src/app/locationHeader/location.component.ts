import { Component, OnInit } from '@angular/core';
import { DateService } from '../services/DateService';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  //styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  location: string;
  today: string = '';
  date: Date;
  dateService: DateService;

  constructor() { 
    this.location = 'Scheveningen, NL';
    this.date = new Date();
    this.dateService = new DateService(); 
  }

  ngOnInit() {
    let tdy = new Date();
    this.today = this.dateService.getWeekDay(tdy) + ' ' + this.dateService.getDay(tdy) + ' ' + this.dateService.getMonth(tdy) + ' ' + this.dateService.getHour(tdy);
  }


}
