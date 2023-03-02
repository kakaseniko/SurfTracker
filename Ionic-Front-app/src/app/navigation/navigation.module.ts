import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavigationComponent } from './navigation.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ],
  declarations: [NavigationComponent],
  exports: [
    NavigationComponent,
  ],
})
export class NavigationModule {}
