import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoggedSessionComponent } from './logged-session.component';
import { StarRatingModule } from '../star-rating/star-rating.module';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    StarRatingModule
  ],
  declarations: [LoggedSessionComponent],
  exports: [
    LoggedSessionComponent,
  ],
})
export class LoggedSessionModule {}
