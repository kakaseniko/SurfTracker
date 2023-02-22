import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProfilePageComponent } from './profile-page.component';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: ProfilePageComponent }]),
    FormsModule
  ],
  declarations: [ProfilePageComponent],
  exports: [
    ProfilePageComponent,
  ],
})
export class ProfilePageModule {}
