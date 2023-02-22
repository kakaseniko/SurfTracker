import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LogsPageComponent } from './logs-page.component';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: LogsPageComponent }]),
    FormsModule
  ],
  declarations: [LogsPageComponent],
  exports: [
    LogsPageComponent,
  ],
})
export class LogsPageModule {}
