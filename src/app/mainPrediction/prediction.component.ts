import { Component, OnInit } from '@angular/core';
import { FakeDataStore } from 'src/data/fakeDataStore';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  //styleUrls: ['./prediction.component.scss'],
  styles: [
    `h3 {font-weight: bold; color: white; font-size: large; padding-bottom: 0.3rem}
     h4 {padding-bottom: 1rem; font-size: medium}
    `
  ]
})
export class PredictionComponent implements OnInit {
  breakerType: string;
  level: string;
  fakeDataStore : FakeDataStore;
  data;


  constructor(private sanitizer: DomSanitizer) { 
    
    this.fakeDataStore = new FakeDataStore();
    this.data = this.fakeDataStore.weekdata[0];
    this.breakerType = this.data.breakerType;
    this.level = this.data.level;
    //Send request to API to get current data

  }

  ngOnInit() {
  }

}
