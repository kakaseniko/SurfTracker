import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TodayComponent } from './today.component';
import { WaveIconModule } from '../wave-icon/wave-icon.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaveIconModule
  ],
  declarations: [TodayComponent],
  exports: [
    TodayComponent,
  ],
})
export class TodayModule {}
