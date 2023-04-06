import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AuthService } from '../services/api/auth';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  isMobile$ = this.platform.is('mobile');
  isLoggedIn = false;

  constructor(private platform: Platform) {
    this.isLoggedIn = localStorage.getItem('token') ? true : false;
   }

  ngOnInit() {}

}
