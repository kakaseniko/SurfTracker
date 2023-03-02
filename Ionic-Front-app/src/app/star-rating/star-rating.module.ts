import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { StarRatingComponent } from './star-rating.component';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [StarRatingComponent],
  exports: [
    StarRatingComponent,
  ],
})
export class StarRatingModule {}
