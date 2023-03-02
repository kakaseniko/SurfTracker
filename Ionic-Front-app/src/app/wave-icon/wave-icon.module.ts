import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { WaveIconComponent } from './wave-icon.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [WaveIconComponent],
  exports: [
    WaveIconComponent,
  ],
})
export class WaveIconModule {}
