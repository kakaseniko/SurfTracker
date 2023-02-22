import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavigationComponent } from './navigation.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [NavigationComponent],
  exports: [
    NavigationComponent,
  ],
})
export class NavigationModule {}
