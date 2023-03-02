import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegisterPageComponent } from './register-page.component';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: RegisterPageComponent }]),
    FormsModule
  ],
  declarations: [RegisterPageComponent],
  exports: [
    RegisterPageComponent,
  ],
})
export class RegisterPageModule {}
