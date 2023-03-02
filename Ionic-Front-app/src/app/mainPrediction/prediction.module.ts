import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PredictionComponent } from './prediction.component';
import { WaveIconModule } from '../wave-icon/wave-icon.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaveIconModule
  ],
  declarations: [PredictionComponent],
  exports: [
    PredictionComponent,
  ],
})
export class PredictionModule {}
