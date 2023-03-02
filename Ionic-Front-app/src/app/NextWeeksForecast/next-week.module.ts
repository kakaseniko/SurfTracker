import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NextWeekComponent } from './next-week.component';
import { WaveIconModule } from '../wave-icon/wave-icon.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaveIconModule
  ],
  declarations: [NextWeekComponent],
  exports: [
    NextWeekComponent,
  ],
})
export class NextWeekModule {}
