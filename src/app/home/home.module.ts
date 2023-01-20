import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { LocationModule } from '../locationHeader/location.module';
import { PredictionModule } from '../mainPrediction/prediction.module';
import { TodayModule } from '../todaysForecast/today.module';
import { NextWeekModule } from '../NextWeeksForecast/next-week.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    LocationModule,
    PredictionModule,
    TodayModule, 
    NextWeekModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
