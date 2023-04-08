import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoginPageComponent } from './login-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/api/auth';
import { ToastController } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: LoginPageComponent }]),
    FormsModule,
  ],
  declarations: [LoginPageComponent],
  exports: [
    LoginPageComponent,
  ],
  providers: [
    AuthService,
    ToastController,
  ]
})
export class LoginPageModule {}
