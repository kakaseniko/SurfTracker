import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StarRatingModule } from '../star-rating/star-rating.module';
import { LoggedSessionModule } from '../logged-session/logged-session.module';
import { AddSessionComponent } from './add-session.component';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: AddSessionComponent }]),
    FormsModule,
    StarRatingModule,
    LoggedSessionModule,
    StarRatingModule
  ],
  declarations: [AddSessionComponent],
  exports: [
    AddSessionComponent,
  ],
})
export class AddSessionModule {}
