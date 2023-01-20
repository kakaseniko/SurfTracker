import { Component, OnInit } from '@angular/core';
import { DateService } from '../services/DateService';
import { FakeDataStore } from 'src/data/fakeDataStore';



@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss'],
})
export class TodayComponent implements OnInit {
  dateservice: DateService;
  fakeDataStore : FakeDataStore;

  fakeData = new Array(12);
  breakerTypes = new Array();
  hideExtraInfo = new Array();
  extraInfoOpen = false;


  constructor() { 
    this.dateservice = new DateService();
    this.fakeDataStore = new FakeDataStore();
    this.fakeData = this.fakeDataStore.daydata;

    this.fakeData.forEach( element => { 
      this.breakerTypes.push(element.breakerType)
      this.hideExtraInfo.push(true)
    })

  }

  ngOnInit() {
  }

  toggleExtraInfo(index: number){
    let selectedCardState = this.hideExtraInfo[index];

    this.hideExtraInfo.map( (element, i) => {
      this.hideExtraInfo[i] = true;
    }) 

    if(selectedCardState == true){
      this.hideExtraInfo[index] = false;
      this.extraInfoOpen = true;
      return;
    }
    this.extraInfoOpen = false;
  }

  getNextHour(plusHour: number){
    let now = new Date();
    let hour = parseInt(this.dateservice.getHour(now).substring(0,2)) + plusHour;
    if(hour > 23){
      hour = hour - 24
    }

    return hour.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  }

  //send request to API for todays forecast 

}
