import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LogsPageComponent } from './logs-page.component';
import { StarRatingModule } from '../star-rating/star-rating.module';
import { LoggedSessionModule } from '../logged-session/logged-session.module';
import { SurfSessionService } from '../services/api/surfsession';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: LogsPageComponent }]),
    FormsModule,
    StarRatingModule,
    LoggedSessionModule
  ],
  declarations: [LogsPageComponent],
  exports: [
    LogsPageComponent,
  ],
  providers: [
    SurfSessionService,
  ]
})
export class LogsPageModule {}
