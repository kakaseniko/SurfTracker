import { Component, OnInit } from '@angular/core';
import { FakeDataStore } from 'src/data/fakeDataStore';

@Component({
  selector: 'app-next-week',
  templateUrl: './next-week.component.html',
  styleUrls: ['./next-week.component.scss'],
})
export class NextWeekComponent implements OnInit {

  weekDays= new Array(7)
  Object = Object;

  details: {[key: string]: string} = {
    "Height" : "2m",
    "Period" : "8s",
    "Wind spd" : "10k",
    "Wind" : "NW",

  };
  fakeDataStore: FakeDataStore;
  data;

  constructor() { 
    this.fakeDataStore = new FakeDataStore();
    this.data = this.fakeDataStore.weekdata;
  }

  ngOnInit() {}

  getDayName(daysToAdd:number){
    let date = new Date()
    date.setDate(date.getDate() + daysToAdd);
    return date.toLocaleDateString('en-US', { weekday: 'long' }).substring(0,3);        
  }
  getDayAndMonth(daysToAdd: number){
    let date = new Date()
    date.setDate(date.getDate() + daysToAdd);
    
    return date.getDate() + '/' + (date.getMonth() + 1) ;        

  }

}
