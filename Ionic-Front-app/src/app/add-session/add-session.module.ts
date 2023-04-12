import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StarRatingModule } from '../star-rating/star-rating.module';
import { LoggedSessionModule } from '../logged-session/logged-session.module';
import { AddSessionComponent } from './add-session.component';
import { SurfSessionService } from '../services/api/surfsession';
import { ToastController } from '@ionic/angular';



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
  providers: [
    SurfSessionService,
    ToastController,
  ]
})
export class AddSessionModule {}
